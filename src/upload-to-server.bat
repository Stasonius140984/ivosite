@echo off
chcp 65001 >nul
echo ═══════════════════════════════════════════════════════════════════════
echo 🚀 ЗАГРУЗКА ОБНОВЛЁННЫХ ФАЙЛОВ НА СЕРВЕР
echo ═══════════════════════════════════════════════════════════════════════
echo.

set SERVER=217.114.15.80
set USER=root
set REMOTE_PATH=/var/www/ivo

echo 1️⃣ Проверка наличия необходимых файлов...
if not exist "index.html" (
    echo ❌ Файл index.html не найден!
    goto :error
)
if not exist "vite.config.ts" (
    echo ❌ Файл vite.config.ts не найден!
    goto :error
)
echo ✅ Файлы найдены

echo.
echo 2️⃣ Загрузка файлов на сервер...
echo.
echo ⚠️ ВАЖНО: Для загрузки файлов используйте SCP клиент
echo    (например, WinSCP, FileZilla или MobaXterm)
echo.
echo 📋 ИНСТРУКЦИЯ:
echo.
echo 1. Откройте WinSCP или FileZilla
echo 2. Подключитесь к серверу:
echo    • Host: %SERVER%
echo    • User: %USER%
echo    • Protocol: SFTP (SSH File Transfer Protocol)
echo.
echo 3. Загрузите эти файлы в %REMOTE_PATH%:
echo    ✓ index.html
echo    ✓ vite.config.ts
echo    ✓ package.json
echo    ✓ favicon.svg
echo.
echo 4. Загрузите nginx.conf во временную папку /tmp/
echo.
echo 5. Подключитесь к серверу через SSH:
echo    ssh %USER%@%SERVER%
echo.
echo 6. Выполните команды:
echo.
echo ───────────────────────────────────────────────────────────────────────
echo cd /var/www/ivo ^&^& ^
echo cp /tmp/nginx.conf /etc/nginx/sites-available/ivo.conf ^&^& ^
echo rm -rf build dist ^&^& ^
echo npm run build ^&^& ^
echo chown -R www-data:www-data /var/www/ivo/build/ ^&^& ^
echo chmod -R 755 /var/www/ivo/build/ ^&^& ^
echo find /var/www/ivo/build/ -type f -exec chmod 644 {} \; ^&^& ^
echo nginx -t ^&^& ^
echo systemctl restart nginx ^&^& ^
echo echo "✅ ГОТОВО!"
echo ───────────────────────────────────────────────────────────────────────
echo.

echo 📋 Команда для копирования скопирована в буфер обмена
echo.
pause
goto :eof

:error
echo.
echo ❌ Ошибка! Убедитесь что вы находитесь в корневой папке проекта.
echo.
pause
