@echo off
title Jarvis AI Assistant (keep open)
cd /d "%~dp0"
echo.
echo  Starting Jarvis... Chrome will open automatically.
echo  Do NOT close this window while using Jarvis.
echo.
"C:\Program Files\nodejs\node.exe" server.js
pause
