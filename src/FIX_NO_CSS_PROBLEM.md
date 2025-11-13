# 🚨 ИСПРАВЛЕНИЕ: CSS НЕ ЗАГРУЖАЕТСЯ

## Проблема

Сайт открывается по адресу **иэо.рф**, но отображается **БЕЗ СТИЛЕЙ** - только чёрный текст на белом фоне.

**Причина:** CSS и JS файлы не загружаются (ошибки 404 в консоли браузера).

---

## ✅ РЕШЕНИЕ

### Шаг 1: Подключитесь к серверу

```bash
ssh root@217.114.15.80
```

---

### Шаг 2: Диагностика

```bash
# Запустите скрипт диагностики
cd /var/www/ivo
bash FIX_CSS_LOADING.sh
```

**ИЛИ вручную:**

```bash
# Проверьте, какая папка используется для сборки
cd /var/www/ivo
ls -lah

# Проверьте содержимое build
ls -lah build/
ls -lah build/assets/

# Посмотрите index.html
cat build/index.html | grep -E "(\.js|\.css)"

# Проверьте nginx конфиг
cat /etc/nginx/sites-available/ivo.conf
```

---

### Шаг 3: Исправление

#### Вариант A: Быстрое исправление (рекомендуется)

```bash
cd /var/www/ivo

# Пересборка проекта
npm run build

# Если собралось в dist/, копируем в build/
if [ -d "dist" ]; then
    rm -rf build
    cp -r dist build
fi

# Установка прав
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

# Обновление nginx конфига
cat > /etc/nginx/sites-available/ivo.conf << 'EOF'
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
EOF

# Проверка и перезапуск nginx
nginx -t
systemctl restart nginx

echo "✅ Готово!"
```

---

#### Вариант B: Если используется dist/ вместо build/

```bash
# Обновите vite.config.ts
cat > /var/www/ivo/vite.config.ts << 'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  base: '/',
});
EOF

# Пересборка
npm run build
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
systemctl restart nginx
```

---

### Шаг 4: Проверка

```bash
# Проверьте, что файлы на месте
ls -lah /var/www/ivo/build/
ls -lah /var/www/ivo/build/assets/

# Должны быть файлы типа:
# index.html
# assets/index-xxxxx.js
# assets/index-xxxxx.css
# assets/vendor-xxxxx.js

# Проверьте nginx
nginx -t
systemctl status nginx

# Проверьте логи
tail -f /var/log/nginx/ivo_error.log
```

---

### Шаг 5: Откройте в браузере

1. **Откройте:** http://иэо.рф
2. **Нажмите:** `Ctrl + Shift + Delete` → Очистить кеш
3. **Или:** `Ctrl + F5` (жесткая перезагрузка)
4. **Откройте консоль:** `F12` → вкладка Console
5. **Проверьте:** Нет ли ошибок 404

---

## 🔍 Типичные проблемы

### 1. Ошибка 404 на /assets/index-xxx.css

**Причина:** Неправильный путь в nginx или файлы не скопированы.

**Решение:**
```bash
# Проверьте путь в nginx
cat /etc/nginx/sites-available/ivo.conf | grep root

# Должно быть:
# root /var/www/ivo/build;

# Проверьте файлы
ls -lah /var/www/ivo/build/assets/
```

---

### 2. Nginx не видит файлы

**Причина:** Неправильные права доступа.

**Решение:**
```bash
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;
```

---

### 3. CSS всё ещё не загружается

**Причина:** Кеш браузера или nginx.

**Решение:**
```bash
# Очистите кеш nginx
systemctl restart nginx

# В браузере:
# Ctrl + Shift + Delete
# Выберите "Кеш" и "За всё время"
# Очистить
```

---

### 4. Файлы собираются в dist/, а nginx смотрит в build/

**Решение:**
```bash
# Вариант 1: Копировать
cp -r /var/www/ivo/dist/* /var/www/ivo/build/

# Вариант 2: Изменить nginx
sed -i 's|/var/www/ivo/build|/var/www/ivo/dist|g' /etc/nginx/sites-available/ivo.conf
nginx -t && systemctl restart nginx

# Вариант 3: Изменить vite.config (см. Вариант B выше)
```

---

## 📊 Проверка в браузере (F12)

### Network вкладка

Должны загружаться:
- ✅ `index.html` - 200 OK
- ✅ `/assets/index-xxxxx.js` - 200 OK
- ✅ `/assets/index-xxxxx.css` - 200 OK
- ✅ `/assets/vendor-xxxxx.js` - 200 OK
- ✅ `/favicon.svg` - 200 OK

Если есть 404:
- ❌ Проверьте путь в nginx `root`
- ❌ Проверьте наличие файлов в `/var/www/ivo/build/assets/`
- ❌ Проверьте права доступа

---

## 🚀 Быстрая команда (всё в одной строке)

Скопируйте и выполните на сервере:

```bash
cd /var/www/ivo && npm run build && rm -rf build && ([ -d "dist" ] && cp -r dist build || echo "build exists") && chown -R www-data:www-data /var/www/ivo/build/ && chmod -R 755 /var/www/ivo/build/ && find /var/www/ivo/build/ -type f -exec chmod 644 {} \; && nginx -t && systemctl restart nginx && echo "✅ Готово! Откройте http://иэо.рф и нажмите Ctrl+F5"
```

---

## ✅ Результат

После исправления:
- ✅ Сайт открывается: http://иэо.рф
- ✅ CSS загружается корректно
- ✅ Header синий с красной границей
- ✅ Триколор в hero секциях
- ✅ Все стили работают

---

## 📞 Если не помогло

Отправьте вывод команд:

```bash
# Структура
ls -lah /var/www/ivo/
ls -lah /var/www/ivo/build/
ls -lah /var/www/ivo/build/assets/

# Nginx
cat /etc/nginx/sites-available/ivo.conf
nginx -t

# Index.html
cat /var/www/ivo/build/index.html

# Логи
tail -30 /var/log/nginx/ivo_error.log
```

---

**Дата:** 9 ноября 2025  
**Проблема:** CSS не загружается  
**Статус:** 🔧 Инструкция к исправлению
