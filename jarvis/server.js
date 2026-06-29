const express = require('express');
const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// ── Config ──────────────────────────────────────────────────────────────────
const CONFIG_FILE = path.join(__dirname, 'config.json');
let config = {
  anthropicApiKey: '',
  vscodeExe: 'D:\\VS CODE\\Microsoft VS Code\\Code.exe',
  musicFolder: '',
  apps: {
    'axiom trade': 'https://axiom.trade',
    'axiom':       'https://axiom.trade',
    'youtube':     'https://youtube.com',
    'chrome':      'chrome',
    'notepad':     'notepad',
  }
};

if (fs.existsSync(CONFIG_FILE)) {
  try { config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8')) }; }
  catch {}
}

// ── Command definitions ──────────────────────────────────────────────────────
const COMMANDS = [
  {
    match: (t) => /open (vs ?code|code editor|editor)/i.test(t),
    execute: () => {
      spawn(config.vscodeExe, [], { detached: true, stdio: 'ignore' }).unref();
    },
    response: 'Opening VS Code.'
  },
  {
    match: (t) => /open axiom( trade)?/i.test(t) || /axiom trade/i.test(t),
    execute: () => { exec(`start "" "${config.apps['axiom trade']}"`); },
    response: 'Opening Axiom Trade.'
  },
  {
    match: (t) => /open (chrome|browser|google)/i.test(t),
    execute: () => { exec('start chrome'); },
    response: 'Opening Chrome.'
  },
  {
    match: (t) => /open (youtube|yt)/i.test(t),
    execute: () => { exec(`start "" "https://youtube.com"`); },
    response: 'Opening YouTube.'
  },
  {
    match: (t) => /open spotify/i.test(t),
    execute: () => { exec('start spotify:'); },
    response: 'Opening Spotify.'
  },
  {
    match: (t) => /^(let'?s start|start it up|let'?s go|start the (day|music|vibe))/i.test(t),
    execute: () => {
      if (config.musicFolder && fs.existsSync(config.musicFolder)) {
        exec(`start "" "${config.musicFolder}"`);
      } else {
        exec('start "" "https://music.youtube.com"');
      }
    },
    response: "Let's go! Starting music."
  },
  {
    match: (t) => /play (music|song|songs)/i.test(t),
    execute: () => {
      if (config.musicFolder && fs.existsSync(config.musicFolder)) {
        exec(`start "" "${config.musicFolder}"`);
      } else {
        exec('start "" "https://music.youtube.com"');
      }
    },
    response: 'Playing music.'
  },
  {
    match: (t) => /open (notepad|text editor)/i.test(t),
    execute: () => { exec('start notepad'); },
    response: 'Opening Notepad.'
  },
  {
    match: (t) => /^(hey|hi|hello|sup|yo|what'?s up|wassup)[\s!?.]*$/i.test(t.trim()),
    execute: () => {},
    response: () => {
      const greets = [
        "Hey boss! What are we doing today?",
        "Hey boss! Ready when you are.",
        "Yo boss! What's the move?",
        "Hey boss! Let's get it.",
      ];
      return greets[Math.floor(Math.random() * greets.length)];
    }
  },
  {
    match: (t) => /^(what time|what's the time|current time)/i.test(t),
    execute: () => {},
    response: () => {
      const now = new Date();
      return `It's ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.`;
    }
  },
  {
    match: (t) => /^(what('s| is) (today|the date)|current date)/i.test(t),
    execute: () => {},
    response: () => {
      return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;
    }
  },
];

// ── Routes ───────────────────────────────────────────────────────────────────

// Process voice/text command
app.post('/command', async (req, res) => {
  const { text, history } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });

  // 1. Try local command match first
  for (const cmd of COMMANDS) {
    if (cmd.match(text)) {
      cmd.execute();
      const response = typeof cmd.response === 'function' ? cmd.response() : cmd.response;
      return res.json({ type: 'command', response });
    }
  }

  // 2. Fall back to AI chat
  const apiKey = config.anthropicApiKey;
  if (!apiKey) {
    return res.json({
      type: 'chat',
      response: "No API key set boss. Add your OpenAI or Anthropic key in Settings."
    });
  }

  const SYSTEM = `You are Jarvis, a sharp and loyal personal AI assistant running on Windows for your boss.

Personality rules:
- Always call the user "boss" — naturally, not every sentence, but regularly.
- Mirror their energy: if they're hype and excited, match that energy. If they're calm and focused, be smooth and chill. If they're stressed, be steady and reassuring.
- Be brief, real, and direct. No corporate fluff. Talk like a smart friend who happens to be an AI.
- When greeted, always respond with "Hey boss!" plus a short line matching their vibe.
- You can open apps on command: VS Code, Axiom Trade, Chrome, YouTube, Spotify, play music.
- Keep responses under 2-3 sentences unless the boss clearly wants more.`;

  const msgs = [...(history || []), { role: 'user', content: text }];
  const isOpenAI = apiKey.startsWith('sk-');

  try {
    let reply;

    if (isOpenAI) {
      // OpenAI API
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          max_tokens: 512,
          messages: [{ role: 'system', content: SYSTEM }, ...msgs]
        },
        { headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' } }
      );
      reply = response.data.choices[0].message.content;
    } else {
      // Anthropic API
      const response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        { model: 'claude-haiku-4-5-20251001', max_tokens: 512, system: SYSTEM, messages: msgs },
        { headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' } }
      );
      reply = response.data.content[0].text;
    }

    return res.json({ type: 'chat', response: reply });
  } catch (err) {
    const status = err.response?.status;
    const msg    = err.response?.data?.error?.message || err.message || 'Unknown error';
    console.error(`API error ${status}:`, msg);
    return res.json({ type: 'chat', response: `API error (${status}): ${msg}` });
  }
});

// Save config (API key, music folder, etc.)
app.post('/config', (req, res) => {
  config = { ...config, ...req.body };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
  res.json({ ok: true });
});

app.get('/config', (req, res) => {
  res.json({
    hasApiKey: !!config.anthropicApiKey,
    musicFolder: config.musicFolder,
    vscodeExe: config.vscodeExe
  });
});

// ── Start ────────────────────────────────────────────────────────────────────
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n Jarvis is running → http://localhost:${PORT}\n`);
  // Try Chrome first, fall back to default browser
  exec(`start chrome "http://localhost:${PORT}"`, (err) => {
    if (err) exec(`start "" "http://localhost:${PORT}"`);
  });
});
