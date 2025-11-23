#!/bin/bash

# ========================================
# Быстрая настройка сервера для ИЭО
# Выполните этот скрипт на сервере
# ========================================

echo "🚀 Настройка сервера для ИЭО..."
echo ""

# Шаг 1: Права доступа
echo "📂 Установка прав доступа..."
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;
echo "✅ Права установлены"
echo ""

# Шаг 2: Проверка веб-сервера
echo "🔍 Проверка веб-сервера..."
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx активен"
    WEBSERVER="nginx"
elif systemctl is-active --quiet apache2; then
    echo "✅ Apache активен"
    WEBSERVER="apache2"
else
    echo "❌ Веб-сервер не найден!"
    echo "Установите nginx или apache2"
    exit 1
fi
echo ""

# Шаг 3: Создание конфигурации
if [ "$WEBSERVER" = "nginx" ]; then
    echo "📝 Создание конфигурации для Nginx..."
    
    cat > /etc/nginx/sites-available/ivo << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name xn--d1a4b.xn--p1ai иэо.рф 217.114.15.80;
    
    root /var/www/ivo/build;
    index index.html;
    
    charset utf-8;
    
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF
    
    # Активация
    ln -sf /etc/nginx/sites-available/ivo /etc/nginx/sites-enabled/
    
    # Проверка
    nginx -t
    if [ $? -eq 0 ]; then
        systemctl restart nginx
        echo "✅ Nginx настроен и перезапущен"
    else
        echo "❌ Ошибка в конфигурации Nginx"
        exit 1
    fi
    
elif [ "$WEBSERVER" = "apache2" ]; then
    echo "📝 Создание конфигурации для Apache..."
    
    cat > /etc/apache2/sites-available/ivo.conf << 'EOF'
<VirtualHost *:80>
    ServerName xn--d1a4b.xn--p1ai
    ServerAlias иэо.рф 217.114.15.80
    
    DocumentRoot /var/www/ivo/build
    
    <Directory /var/www/ivo/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>
    
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/gif "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType image/svg+xml "access plus 1 year"
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
    </IfModule>
    
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    
    ErrorLog ${APACHE_LOG_DIR}/ivo_error.log
    CustomLog ${APACHE_LOG_DIR}/ivo_access.log combined
</VirtualHost>
EOF
    
    # Активация модулей
    a2enmod rewrite headers expires deflate
    
    # Активация сайта
    a2ensite ivo.conf
    
    # Проверка
    apache2ctl configtest
    if [ $? -eq 0 ]; then
        systemctl restart apache2
        echo "✅ Apache настроен и перезапущен"
    else
        echo "❌ Ошибка в конфигурации Apache"
        exit 1
    fi
fi

echo ""
echo "🎉 Настройка завершена!"
echo ""
echo "📊 Информация:"
echo "  Веб-сервер: $WEBSERVER"
echo "  Путь к файлам: /var/www/ivo/build/"
echo "  Порт: 80"
echo ""
echo "🌐 Откройте в браузере:"
echo "  http://217.114.15.80"
echo ""
echo "🔒 Для установки SSL выполните:"
echo "  apt update"
echo "  apt install certbot python3-certbot-$WEBSERVER"
echo "  certbot --$WEBSERVER -d xn--d1a4b.xn--p1ai"
echo ""
