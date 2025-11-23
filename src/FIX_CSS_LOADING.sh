#!/bin/bash

# Скрипт для диагностики и исправления проблемы с CSS
# Запустите на СЕРВЕРЕ: ssh root@217.114.15.80

echo "🔍 Диагностика проблемы с CSS на сайте ИЭО"
echo "=============================================="
echo ""

# Проверяем текущую директорию
echo "📂 Проверка структуры проекта:"
cd /var/www/ivo
ls -lah

echo ""
echo "📦 Проверка build директории:"
if [ -d "build" ]; then
    ls -lah build/
    echo ""
    echo "📁 Содержимое build/assets/:"
    ls -lah build/assets/ 2>/dev/null || echo "❌ Папка build/assets/ не найдена!"
elif [ -d "dist" ]; then
    ls -lah dist/
    echo ""
    echo "📁 Содержимое dist/assets/:"
    ls -lah dist/assets/ 2>/dev/null || echo "❌ Папка dist/assets/ не найдена!"
else
    echo "❌ Папка build или dist не найдена!"
fi

echo ""
echo "📄 Проверка index.html:"
if [ -f "build/index.html" ]; then
    cat build/index.html
elif [ -f "dist/index.html" ]; then
    cat dist/index.html
else
    echo "❌ index.html не найден!"
fi

echo ""
echo "🌐 Проверка nginx конфигурации:"
cat /etc/nginx/sites-available/ivo.conf

echo ""
echo "🔧 Проверка прав доступа:"
ls -lah /var/www/ivo/build/ 2>/dev/null || ls -lah /var/www/ivo/dist/ 2>/dev/null

echo ""
echo "=============================================="
echo "🛠️ ИСПРАВЛЕНИЕ"
echo "=============================================="

# Пересборка проекта
echo ""
echo "1️⃣ Пересборка проекта..."
cd /var/www/ivo
npm run build

# Проверяем, какая папка создалась
if [ -d "dist" ]; then
    BUILD_DIR="dist"
    echo "✅ Собрано в dist/"
elif [ -d "build" ]; then
    BUILD_DIR="build"
    echo "✅ Собрано в build/"
else
    echo "❌ Ошибка сборки!"
    exit 1
fi

# Копируем в правильное место
echo ""
echo "2️⃣ Копирование файлов..."
rm -rf /var/www/ivo/build
cp -r /var/www/ivo/$BUILD_DIR /var/www/ivo/build

# Установка прав
echo ""
echo "3️⃣ Установка прав доступа..."
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

# Проверка nginx конфига
echo ""
echo "4️⃣ Проверка nginx..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Конфигурация nginx корректна"
    systemctl restart nginx
    echo "✅ Nginx перезапущен"
else
    echo "❌ Ошибка в конфигурации nginx!"
    exit 1
fi

echo ""
echo "=============================================="
echo "✅ ИСПРАВЛЕНИЕ ЗАВЕРШЕНО"
echo "=============================================="
echo ""
echo "🌐 Откройте в браузере: http://иэо.рф"
echo "🔄 Нажмите Ctrl + F5 для жесткой перезагрузки"
echo ""
echo "📋 Проверьте в консоли браузера (F12) наличие ошибок 404"
echo ""
