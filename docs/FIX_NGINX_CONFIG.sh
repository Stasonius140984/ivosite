#!/bin/bash

# ========================================
# Исправление конфигурации Nginx
# ========================================

echo "🔧 Исправление конфигурации Nginx для ИЭО..."
echo ""

# Создаём правильный конфигурационный файл
cat > /etc/nginx/sites-available/ivo << 'EOF'
server {
    listen 80;
    server_name иэо.рф www.иэо.рф xn--h1aana.xn--p1ai www.xn--h1aana.xn--p1ai 217.114.15.80;
    
    root /var/www/ivo/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

echo "✅ Конфигурационный файл создан: /etc/nginx/sites-available/ivo"

# Удаляем старые симлинки если есть
rm -f /etc/nginx/sites-enabled/ivo
rm -f /etc/nginx/sites-enabled/ieo.ru
rm -f /etc/nginx/sites-enabled/default

# Создаём симлинк
ln -s /etc/nginx/sites-available/ivo /etc/nginx/sites-enabled/

echo "✅ Симлинк создан: /etc/nginx/sites-enabled/ivo"

# Тестируем конфигурацию
echo ""
echo "🧪 Тестирование конфигурации..."
nginx -t

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Конфигурация корректна!"
    echo ""
    echo "🔄 Перезапуск Nginx..."
    systemctl restart nginx
    
    if [ $? -eq 0 ]; then
        echo "✅ Nginx успешно перезапущен!"
        echo ""
        echo "╔═══════════════════════════════════════════════════╗"
        echo "║  🎉 Готово!                                       ║"
        echo "╚═══════════════════════════════════════════════════╝"
        echo ""
        echo "Теперь откройте http://иэо.рф и нажмите Ctrl+Shift+R"
    else
        echo "❌ Ошибка при перезапуске Nginx!"
        systemctl status nginx
    fi
else
    echo ""
    echo "❌ Ошибка в конфигурации Nginx!"
    echo "Проверьте вывод выше и исправьте ошибки"
fi

echo ""
