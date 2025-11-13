# 🔗 Быстрые ссылки

## 🌐 Ваш сайт

### Работает СЕЙЧАС:
```
http://217.114.15.80
```

### Будет работать после настройки DNS:
```
https://иэо.рф
https://xn--d1a4b.xn--p1ai
```

---

## 🖥️ Сервер

### SSH доступ:
```bash
ssh root@217.114.15.80
```

### Путь к файлам:
```
/var/www/ivo/build/
```

---

## 📝 Важные команды

### Перезапуск nginx:
```bash
systemctl restart nginx
```

### Проверка статуса:
```bash
systemctl status nginx
```

### Просмотр логов:
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Пересборка проекта:
```bash
cd /var/www/ivo
npm run build
```

---

## 🔒 SSL (после настройки DNS)

### Получение сертификата:
```bash
certbot --nginx -d xn--d1a4b.xn--p1ai
```

### Обновление сертификата:
```bash
certbot renew
```

### Проверка сертификата:
```bash
certbot certificates
```

---

## 🧪 Проверка DNS

### Windows:
```bash
nslookup xn--d1a4b.xn--p1ai
ping xn--d1a4b.xn--p1ai
```

### Linux/Mac:
```bash
dig xn--d1a4b.xn--p1ai
host xn--d1a4b.xn--p1ai
```

### Онлайн:
- https://www.whatsmydns.net/
- https://dnschecker.org/

---

## 📞 Контакты

### Сервер:
- **IP:** 217.114.15.80
- **Хостинг:** Собственный VPS

### Email для SSL:
- stas.che84@mail.ru

---

## 📚 Документация

| Файл | Что там |
|------|---------|
| **SUCCESS.md** | ✅ Статус запуска |
| **DNS_SETUP.md** | 🌐 Настройка DNS |
| **SERVER_SETUP.md** | 🖥️ Настройка сервера |
| **COLOR_SYSTEM_EXPLANATION.md** | 🎨 Система цветов |

---

**Закладка для браузера:** http://217.114.15.80
