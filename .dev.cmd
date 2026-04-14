@echo off
cd /d "%~dp0"
echo.
echo Iniciando WEBFORJA em modo desenvolvimento...
echo Acesse: http://localhost:3000
echo.
call "C:\Program Files\nodejs\npm.cmd" run dev
