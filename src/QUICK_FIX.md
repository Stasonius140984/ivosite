# 🚨 БЫСТРОЕ ИСПРАВЛЕНИЕ - CSS НЕ ЗАГРУЖАЕТСЯ

## Проблема
Сайт **иэо.рф** открывается, но без стилей (чёрный текст на белом).

---

## ⚡ БЫСТРОЕ РЕШЕНИЕ

### На СЕРВЕРЕ выполните:

```bash
ssh root@217.114.15.80
```

**Затем скопируйте и вставьте ВСЁ:**

```bash
cd /var/www/ivo && \
npm run build && \
chown -R www-data:www-data /var/www/ivo/build/ && \
chmod -R 755 /var/www/ivo/build/ && \
find /var/www/ivo/build/ -type f -exec chmod 644 {} \; && \
systemctl restart nginx && \
echo "" && \
echo "✅ ГОТОВО!" && \
echo "🌐 Откройте: http://иэо.рф" && \
echo "🔄 Нажмите: Ctrl + F5 (жёсткая перезагрузка)"
```

---

## 🔍 Проверка

1. Откройте: **http://иэо.рф**
2. Нажмите: **Ctrl + F5** (или Ctrl + Shift + R)
3. Проверьте:
   - ✅ Header синий с красной границей
   - ✅ Триколор в hero секции
   - ✅ Белые карточки с цветными границами

---

## ❌ Если не помогло

### Проверьте файлы на сервере:

```bash
# Должны быть файлы:
ls -lah /var/www/ivo/build/
ls -lah /var/www/ivo/build/assets/

# Должны быть:
# index.html
# assets/index-xxxxx.css
# assets/index-xxxxx.js
# assets/vendor-xxxxx.js
```

### Проверьте nginx:

```bash
# Должен быть путь: root /var/www/ivo/build;
cat /etc/nginx/sites-available/ivo.conf | grep root

# Проверка конфига
nginx -t

# Перезапуск
systemctl restart nginx
```

### Проверьте в браузере (F12):

Откройте **Console** и **Network** вкладки.

**Должно быть:**
- ✅ `/assets/index-xxxxx.css` - 200 OK
- ✅ `/assets/index-xxxxx.js` - 200 OK

**Если 404:**
- Файлы не на месте или nginx неправильно настроен

---

## 📋 Полная инструкция

Смотрите: **FIX_NO_CSS_PROBLEM.md**

---

**Дата:** 9 ноября 2025  
**Проблема:** CSS не загружается  
**Решение:** Пересборка + права + nginx
