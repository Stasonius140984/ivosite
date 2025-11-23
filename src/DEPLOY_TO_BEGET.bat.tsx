@echo off
REM Скрипт для деплоя на Beget сервер 217.114.15.80 (Windows)
REM Использование: DEPLOY_TO_BEGET.bat

SET SERVER=root@217.114.15.80
SET REMOTE_PATH=/var/www/ivo

echo 🚀 Начинаем деплой на Beget сервер...

REM 1. Собираем проект локально
echo 📦 Сборка проекта...
call npm run build

if errorlevel 1 (
    echo ❌ Ошибка сборки проекта!
    exit /b 1
)

echo ✅ Проект собран успешно!

REM 2. Создаем резервную копию на сервере
echo 💾 Создание резервной копии на сервере...
ssh %SERVER% "cp -r %REMOTE_PATH%/build %REMOTE_PATH%/build.backup.$(date +%%Y%%m%%d_%%H%%M%%S) 2>/dev/null || true"

REM 3. Загружаем build на сервер
echo 📤 Загрузка build на сервер...
scp -r build\* %SERVER%:%REMOTE_PATH%/build/

if errorlevel 1 (
    echo ❌ Ошибка загрузки файлов!
    exit /b 1
)

REM 4. Копируем favicon
echo 📄 Копирование favicon...
scp favicon.svg %SERVER%:%REMOTE_PATH%/build/favicon.svg

REM 5. Устанавливаем правильные права
echo 🔐 Установка прав доступа...
ssh %SERVER% "chown -R www-data:www-data %REMOTE_PATH%/build && chmod -R 755 %REMOTE_PATH%/build"

REM 6. Перезагружаем nginx
echo 🔄 Перезагрузка nginx...
ssh %SERVER% "systemctl reload nginx"

if errorlevel 1 (
    echo ⚠️ Не удалось перезагрузить nginx, но файлы загружены
) else (
    echo ✅ Nginx перезагружен успешно!
)

echo.
echo 🎉 ДЕПЛОЙ ЗАВЕРШЁН!
echo 🌐 Сайт доступен по адресу: http://иэо.рф
echo 🌐 Или по IP: http://217.114.15.80

pause
