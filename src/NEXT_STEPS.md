# 🎯 СЛЕДУЮЩИЕ ШАГИ

## ✅ Текущий статус

**САЙТ РАБОТАЕТ:** http://217.114.15.80 ← Откройте в браузере!

**Проблема:** Домен `иэо.рф` не настроен в DNS

---

## 🔧 ШАГ 1: Исправьте nginx (на сервере СЕЙЧАС)

Вы уже на сервере, скопируйте и выполните:

```bash
cat > /etc/nginx/sites-available/ivo << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name xn--d1a4b.xn--p1ai www.xn--d1a4b.xn--p1ai 217.114.15.80;
    
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

nginx -t
systemctl restart nginx
```

**Готово!** Теперь nginx настроен правильно.

---

## 🌐 ШАГ 2: Настройте DNS домена

### Где зарегистрирован домен `иэо.рф`?

Узнайте командой (на сервере):
```bash
whois xn--d1a4b.xn--p1ai | grep -i registrar
```

**Популярные регистраторы:**
- REG.RU → https://www.reg.ru
- Beget → https://beget.com
- NIC.RU → https://nic.ru
- Timeweb → https://timeweb.com

### DNS записи для добавления:

| Тип | Имя | Значение | TTL |
|-----|-----|----------|-----|
| **A** | @ | **217.114.15.80** | 3600 |
| **A** | www | **217.114.15.80** | 3600 |

### Как добавить (общая инструкция):

1. **Войдите** в панель управления регистратора
2. **Найдите** раздел "DNS записи" или "Управление DNS"
3. **Добавьте** две A-записи (см. таблицу выше)
4. **Сохраните** изменения
5. **Подождите** 1-2 часа (распространение DNS)

---

## ⏰ ШАГ 3: Подождите распространения DNS

После добавления DNS записей подождите **1-2 часа**.

### Проверка (на вашем компьютере):

```bash
# Windows
nslookup xn--d1a4b.xn--p1ai

# Должен вернуть:
# Address: 217.114.15.80
```

### Онлайн проверка:
- https://www.whatsmydns.net/
- Введите: `xn--d1a4b.xn--p1ai`
- Тип: **A**
- Ожидаемый результат: `217.114.15.80`

---

## 🔒 ШАГ 4: Установите SSL (после DNS)

### Когда DNS заработает (через 1-2 часа):

```bash
# Подключитесь к серверу
ssh root@217.114.15.80

# Установите SSL
certbot --nginx -d xn--d1a4b.xn--p1ai -d www.xn--d1a4b.xn--p1ai

# Certbot автоматически:
# 1. Получит сертификат от Let's Encrypt
# 2. Настроит HTTPS
# 3. Включит редирект HTTP → HTTPS
```

---

## 🎉 РЕЗУЛЬТАТ

### СЕЙЧАС (работает):
✅ http://217.114.15.80

### ПОСЛЕ настройки DNS (через 1-2 часа):
✅ http://иэо.рф  
✅ http://xn--d1a4b.xn--p1ai

### ПОСЛЕ установки SSL:
✅ https://иэо.рф 🔒  
✅ https://xn--d1a4b.xn--p1ai 🔒  
✅ Автоматический редирект HTTP → HTTPS

---

## 📝 Краткая памятка

1. ✅ **СЕЙЧАС:** Сайт работает по IP
2. 🔧 **СЕЙЧАС:** Исправьте nginx (команды выше)
3. 🌐 **Сегодня:** Настройте DNS в панели регистратора
4. ⏰ **Через 1-2 часа:** Проверьте DNS
5. 🔒 **После DNS:** Установите SSL

---

## 🆘 Если нужна помощь

### Не знаете, где домен?
```bash
whois xn--d1a4b.xn--p1ai
```

### Сайт по IP не открывается?
```bash
systemctl status nginx
curl -I http://217.114.15.80
```

### Техподдержка регистраторов:
- **REG.RU:** 8 800 250-00-00
- **Beget:** 8 800 700-06-08
- **NIC.RU:** 8 800 333-61-70

---

**Следующее действие:** Исправьте nginx (команды в ШАГ 1) 🚀
