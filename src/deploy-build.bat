@echo off
chcp 65001 >nul
echo.
echo ╔═══════════════════════════════════════════════════╗
echo ║   📤 Загрузка сборки на сервер                   ║
echo ╚═══════════════════════════════════════════════════╝
echo.

SET SERVER=217.114.15.80
SET USER=root
SET REMOTE_PATH=/var/www/ivo/build/

REM Проверка наличия папки build
if not exist "build" (
    echo ❌ Папка build/ не найдена!
    echo Сначала выполните: build-local.bat
    pause
    exit /b 1
)

echo 📦 Загрузка файлов на сервер...
echo Сервер: %SERVER%
echo Путь: %REMOTE_PATH%
echo.

echo ВНИМАНИЕ: Для загрузки файлов используйте WinSCP или FileZilla
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 1. Откройте WinSCP или FileZilla
echo 2. Подключитесь к серверу: %SERVER%
echo 3. Логин: %USER%
echo 4. Перейдите в папку: /var/www/ivo/
echo 5. УДАЛИТЕ старую папку build/
echo 6. Загрузите НОВУЮ папку build/ из текущей директории
echo.
echo После загрузки выполните в PuTTY или другом SSH клиенте:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo ssh %USER%@%SERVER%
echo chown -R www-data:www-data %REMOTE_PATH%
echo chmod -R 755 %REMOTE_PATH%
echo systemctl restart nginx
echo.
echo Затем откройте http://иэо.рф и нажмите Ctrl+Shift+R
echo.
pause
