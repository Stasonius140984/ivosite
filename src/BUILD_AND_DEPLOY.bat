@echo off
chcp 65001 >nul
REM ========================================
REM Скрипт сборки и подготовки к деплою
REM ИЭО - Инфраструктура Экстренного Оповещения
REM ========================================

echo.
echo 🚀 Начинаем сборку проекта ИЭО...
echo.

REM Проверка наличия Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js не установлен!
    echo Установите Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js установлен
node -v
echo ✅ npm версия:
npm -v
echo.

REM Установка зависимостей
echo 📦 Установка зависимостей...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Ошибка при установке зависимостей!
    pause
    exit /b 1
)

echo ✅ Зависимости установлены
echo.

REM Сборка проекта
echo 🔨 Сборка production версии...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Ошибка при сборке проекта!
    pause
    exit /b 1
)

echo.
echo ✅ Проект успешно собран!
echo.

REM Проверка результата
if exist "dist\" (
    echo 📁 Содержимое папки dist\:
    dir dist\ /B
    echo.
    
    if exist "dist\assets\" (
        echo 📁 Содержимое папки dist\assets\:
        dir dist\assets\ /B
        echo.
    )
    
    echo ✅ Все файлы готовы к загрузке!
    echo.
    echo 📤 Следующие шаги:
    echo 1. Откройте панель управления Beget: https://beget.com
    echo 2. Перейдите в 'Файловый менеджер'
    echo 3. Откройте папку: иэо.рф\public_html\
    echo 4. Удалите старую папку assets\
    echo 5. Загрузите ВСЁ содержимое папки dist\:
    echo    - index.html
    echo    - favicon.svg
    echo    - папку assets\
    echo 6. Убедитесь, что .htaccess на месте
    echo 7. Откройте сайт: https://иэо.рф
    echo 8. Очистите кеш браузера ^(Ctrl+Shift+R^)
    echo.
    echo 🎉 Готово!
) else (
    echo ❌ Папка dist\ не найдена!
    echo Проверьте логи сборки выше
    pause
    exit /b 1
)

echo.
pause
