#!/bin/bash

echo "🚨 ИСПРАВЛЕНИЕ ОШИБКИ 404 - CSS НЕ НАЙДЕН"
echo "=========================================="
echo ""

# Переходим в директорию проекта
cd /var/www/ivo || { echo "❌ Папка /var/www/ivo не найдена!"; exit 1; }

echo "1️⃣ Проверка текущего состояния..."
echo ""
echo "📁 Структура проекта:"
ls -lah | head -20

echo ""
echo "2️⃣ Удаление старых сборок..."
rm -rf build dist

echo ""
echo "3️⃣ Пересборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке!"
    exit 1
fi

echo ""
echo "4️⃣ Проверка результата сборки..."
if [ -d "build" ]; then
    echo "✅ Папка build/ создана"
    ls -lah build/
    echo ""
    echo "📁 Содержимое build/assets/:"
    ls -lah build/assets/ 2>/dev/null || echo "⚠️ Папка assets/ пуста или не создана"
else
    echo "❌ Папка build/ НЕ создана! Проверьте vite.config.ts"
    echo "Проверяем vite.config.ts:"
    cat vite.config.ts | grep -A 10 "build:"
    exit 1
fi

echo ""
echo "5️⃣ Установка прав доступа..."
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

echo ""
echo "6️⃣ Обновление nginx конфигурации..."
cat > /etc/nginx/sites-available/ivo.conf << 'NGINX_EOF'
server {
    listen 80;
    server_name иэо.рф xn--e1afg.xn--p1ai www.иэо.рф www.xn--e1afg.xn--p1ai 217.114.15.80;
    
    root /var/www/ivo/build;
    index index.html;
    
    access_log /var/log/nginx/ivo_access.log;
    error_log /var/log/nginx/ivo_error.log;
    
    charset utf-8;
    
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache";
    }
    
    location = /favicon.svg {
        access_log off;
        log_not_found off;
    }
    
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
NGINX_EOF

echo "✅ Nginx конфиг обновлён"

echo ""
echo "7️⃣ Проверка конфигурации nginx..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Конфигурация nginx корректна"
else
    echo "❌ Ошибка в конфигурации nginx!"
    exit 1
fi

echo ""
echo "8️⃣ Перезапуск nginx..."
systemctl restart nginx

if [ $? -eq 0 ]; then
    echo "✅ Nginx перезапущен"
else
    echo "❌ Ошибка при перезапуске nginx!"
    systemctl status nginx
    exit 1
fi

echo ""
echo "=========================================="
echo "✅ ИСПРАВЛЕНИЕ ЗАВЕРШЕНО!"
echo "=========================================="
echo ""
echo "📋 Финальная проверка:"
echo ""
echo "Файлы на месте:"
ls -lah /var/www/ivo/build/ | head -5
echo ""
echo "Assets:"
ls -lah /var/www/ivo/build/assets/ | head -5
echo ""
echo "Nginx конфиг:"
cat /etc/nginx/sites-available/ivo.conf | grep "root"
echo ""
echo "=========================================="
echo "🌐 ОТКРОЙТЕ В БРАУЗЕРЕ:"
echo "   http://иэо.рф"
echo ""
echo "🔄 НАЖМИТЕ:"
echo "   Ctrl + Shift + Delete → Очистить кеш"
echo "   ИЛИ"
echo "   Ctrl + F5 (жёсткая перезагрузка)"
echo ""
echo "🔍 ПРОВЕРЬТЕ (F12 → Network):"
echo "   ✓ /assets/index-xxx.css → 200 OK"
echo "   ✓ /assets/index-xxx.js → 200 OK"
echo "=========================================="
