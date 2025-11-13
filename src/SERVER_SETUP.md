# 🖥️ Настройка сервера - Следующие шаги

## ✅ Что уже сделано:

```bash
✓ Файлы загружены на сервер: /var/www/ivo/
✓ Зависимости установлены: npm install
✓ Проект собран: npm run build
✓ Файлы в папке: /var/www/ivo/build/
```

---

## 🔧 ЧТО ДЕЛАТЬ СЕЙЧАС (на сервере):

### Шаг 1: Проверьте структуру файлов

```bash
# Вы уже на сервере, выполните:
ls -la /var/www/ivo/build/

# Должно быть:
# build/
# ├── index.html
# └── assets/
#     ├── index-B5saN5aj.css
#     └── index-D6rlBuv0.js
```

---

### Шаг 2: Установите правильные права доступа

```bash
# Смените владельца на www-data (пользователь веб-сервера)
chown -R www-data:www-data /var/www/ivo/build/

# Установите права
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;
```

---

### Шаг 3: Проверьте, какой веб-сервер установлен

```bash
# Проверьте nginx
systemctl status nginx

# ИЛИ проверьте Apache
systemctl status apache2
```

---

## 🌐 Настройка веб-сервера

### ВАРИАНТ А: Если используется NGINX

#### 1. Создайте конфигурацию для сайта:

```bash
nano /etc/nginx/sites-available/ivo
```

#### 2. Добавьте конфигурацию:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    # Домен
    server_name xn--d1a4b.xn--p1ai иэо.рф 217.114.15.80;
    
    # Путь к файлам
    root /var/www/ivo/build;
    index index.html;
    
    # Кодировка для кириллицы
    charset utf-8;
    
    # GZIP сжатие
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кеширование статики
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Безопасность
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 3. Активируйте конфигурацию:

```bash
# Создайте символическую ссылку
ln -s /etc/nginx/sites-available/ivo /etc/nginx/sites-enabled/

# Проверьте конфигурацию
nginx -t

# Если всё OK, перезапустите nginx
systemctl restart nginx
```

---

### ВАРИАНТ Б: Если используется Apache

#### 1. Создайте конфигурацию:

```bash
nano /etc/apache2/sites-available/ivo.conf
```

#### 2. Добавьте конфигурацию:

```apache
<VirtualHost *:80>
    ServerName xn--d1a4b.xn--p1ai
    ServerAlias иэо.рф 217.114.15.80
    
    DocumentRoot /var/www/ivo/build
    
    <Directory /var/www/ivo/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Для React Router (SPA)
        RewriteEngine On
        RewriteBase /
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
    
    # GZIP сжатие
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>
    
    # Кеширование
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
    
    # Безопасность
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
    
    ErrorLog ${APACHE_LOG_DIR}/ivo_error.log
    CustomLog ${APACHE_LOG_DIR}/ivo_access.log combined
</VirtualHost>
```

#### 3. Активируйте модули и сайт:

```bash
# Включите необходимые модули
a2enmod rewrite
a2enmod headers
a2enmod expires
a2enmod deflate

# Активируйте сайт
a2ensite ivo.conf

# Проверьте конфигурацию
apache2ctl configtest

# Если всё OK, перезапустите Apache
systemctl restart apache2
```

---

## 🔒 Настройка SSL (HTTPS)

### После базовой настройки установите SSL:

```bash
# Установите Certbot
apt update
apt install certbot python3-certbot-nginx  # Для nginx
# ИЛИ
apt install certbot python3-certbot-apache  # Для Apache

# Получите SSL сертификат для кириллического домена
certbot --nginx -d xn--d1a4b.xn--p1ai
# ИЛИ
certbot --apache -d xn--d1a4b.xn--p1ai

# Certbot автоматически настроит редирект HTTP → HTTPS
```

---

## 🧪 Проверка

### 1. Проверьте по IP:

```bash
curl -I http://217.114.15.80
```

Должен вернуть `200 OK` и HTML

### 2. Откройте в браузере:

```
http://217.114.15.80
```

Должен отобразиться сайт с цветами!

### 3. После настройки домена:

```
http://иэо.рф
# ИЛИ
http://xn--d1a4b.xn--p1ai
```

---

## 📋 Финальный чек-лист:

На сервере выполните:

```bash
# 1. Права доступа
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

# 2. Проверьте файлы
ls -la /var/www/ivo/build/
ls -la /var/www/ivo/build/assets/

# 3. Создайте конфигурацию nginx или Apache (см. выше)

# 4. Перезапустите веб-сервер
systemctl restart nginx
# ИЛИ
systemctl restart apache2

# 5. Проверьте статус
systemctl status nginx
# ИЛИ
systemctl status apache2

# 6. Откройте в браузере
echo "Откройте: http://217.114.15.80"
```

---

## 🆘 Диагностика проблем

### Сайт не открывается?

```bash
# Проверьте, слушает ли сервер порт 80
netstat -tlnp | grep :80

# Проверьте логи nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# ИЛИ логи Apache
tail -f /var/log/apache2/error.log
tail -f /var/log/apache2/access.log

# Проверьте firewall
ufw status
# Если нужно, разрешите порты:
ufw allow 80/tcp
ufw allow 443/tcp
```

### Сайт открывается, но без стилей?

```bash
# Проверьте права доступа
ls -la /var/www/ivo/build/assets/

# Проверьте, что CSS файл существует
cat /var/www/ivo/build/assets/index-B5saN5aj.css | head -20
```

---

## 🎯 Следующие команды (СЕЙЧАС):

```bash
# Вы уже на сервере, выполните по порядку:

# 1. Права доступа
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

# 2. Проверьте веб-сервер
systemctl status nginx || systemctl status apache2

# 3. В зависимости от результата создайте конфигурацию (см. ВАРИАНТ А или Б выше)
```

---

**Статус:** ✅ Файлы собраны, готовы к публикации  
**Следующее действие:** Настроить веб-сервер (nginx или Apache)
