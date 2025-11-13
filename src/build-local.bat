@echo off
chcp 65001 >nul
echo.
echo ╔═══════════════════════════════════════════════════╗
echo ║   🚀 Локальная сборка проекта ИЭО                ║
echo ╚═══════════════════════════════════════════════════╝
echo.

REM Проверка наличия Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js не установлен!
    echo Установите Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js версия:
node -v
echo ✅ npm версия:
npm -v
echo.

REM Установка зависимостей
echo 📦 Установка зависимостей...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Ошибка при установке зависимостей!
    pause
    exit /b 1
)
echo ✅ Зависимости установлены
echo.

REM Удаление старой сборки
if exist "build" (
    echo 🗑️  Удаление старой сборки...
    rmdir /s /q build
)

REM Сборка проекта
echo 🔨 Сборка production версии...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Ошибка при сборке проекта!
    pause
    exit /b 1
)

echo.
echo ╔═══════════════════════════════════════════════════╗
echo ║   ✅ Проект успешно собран!                      ║
echo ╚═══════════════════════════════════════════════════╝
echo.

REM Проверка результата
if exist "build" (
    echo 📁 Содержимое папки build/:
    dir /b build
    echo.
    
    if exist "build\assets" (
        echo 📁 Содержимое папки build/assets/:
        dir /b build\assets
        echo.
    )
    
    echo ╔═══════════════════════════════════════════════════╗
    echo ║   📤 Следующие шаги:                             ║
    echo ╚═══════════════════════════════════════════════════╝
    echo.
    echo ВАРИАНТ 1: Загрузка через WinSCP/FileZilla
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo 1. Откройте WinSCP или FileZilla
    echo 2. Подключитесь к серверу: 217.114.15.80
    echo 3. Перейдите в папку: /var/www/ivo/
    echo 4. УДАЛИТЕ старую папку build/
    echo 5. Загрузите НОВУЮ папку build/ целиком
    echo 6. Установите права через SSH:
    echo    ssh root@217.114.15.80
    echo    chown -R www-data:www-data /var/www/ivo/build/
    echo    chmod -R 755 /var/www/ivo/build/
    echo    systemctl restart nginx
    echo.
    echo ВАРИАНТ 2: Быстрая загрузка через SCP
    echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    echo scp -r build/* root@217.114.15.80:/var/www/ivo/build/
    echo.
    echo После загрузки откройте http://иэо.рф
    echo и нажмите Ctrl+Shift+R для очистки кеша
    echo.
    echo ╔═══════════════════════════════════════════════════╗
    echo ║   🎉 Готово к загрузке!                          ║
    echo ╚═══════════════════════════════════════════════════╝
) else (
    echo ❌ Папка build/ не найдена!
    echo Проверьте логи сборки выше
)

echo.
pause
