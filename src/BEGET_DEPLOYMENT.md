# 🚀 Инструкция по деплою на Beget для домена иэо.рф

## 📋 Предварительные требования

- Аккаунт на Beget.com
- Зарегистрированный домен **иэо.рф** (кириллический домен)
- Доступ к панели управления Beget
- Node.js на локальном компьютере для сборки проекта

---

## 🛠️ Этап 1: Подготовка проекта к деплою

### 1.1 Создайте файл конфигурации Vite

Создайте файл `vite.config.ts` в корне проекта:

```typescript
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
    outDir: 'dist',
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
```

### 1.2 Создайте package.json (если его нет)

```json
{
  "name": "ieo-rf",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.540.0",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.6"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0",
    "typescript": "^5.5.3"
  }
}
```

### 1.3 Создайте index.html

Создайте файл `index.html` в корне проекта:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="ИЭО - Инфраструктура Экстренного Оповещения. Единая платформа национальной безопасности для граждан, бизнеса и силовых структур." />
    <meta name="keywords" content="ИЭО, безопасность, экстренное оповещение, Россия, национальная безопасность" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>ИЭО — Инфраструктура Экстренного Оповещения</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

### 1.4 Создайте main.tsx

Создайте файл `main.tsx` в корне проекта:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 1.5 Соберите проект

Выполните команды:

```bash
npm install
npm run build
```

После успешной сборки появится папка `dist` с готовым статическим сайтом.

---

## 📤 Этап 2: Загрузка на Beget

### 2.1 Подключение к Beget через FTP/SFTP

**Способ 1: Через файловый менеджер Beget**
1. Войдите в панель управления на https://beget.com
2. Перейдите в раздел "Файловый менеджер"
3. Найдите папку вашего домена (например, `иэо.рф/public_html`)

**Способ 2: Через FTP-клиент (FileZilla)**
1. Скачайте FileZilla: https://filezilla-project.org/
2. Подключитесь с данными из панели Beget:
   - Хост: `ft*.beget.tech` (смотрите в панели)
   - Порт: `21` (FTP) или `22` (SFTP)
   - Логин: ваш логин Beget
   - Пароль: ваш пароль Beget

### 2.2 Загрузка файлов

1. Откройте папку `dist` на вашем компьютере
2. Загрузите **всё содержимое** папки `dist` в папку `public_html` вашего домена
   - Файл `index.html`
   - Папку `assets`
   - Все остальные файлы

**⚠️ ВАЖНО**: Загружайте содержимое папки `dist`, а не саму папку!

---

## ⚙️ Этап 3: Настройка .htaccess для React Router

Создайте файл `.htaccess` в папке `public_html` со следующим содержимым:

```apache
# Включение mod_rewrite
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Если файл или директория существует, используем их
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Перенаправляем все запросы на index.html
  RewriteRule . /index.html [L]
</IfModule>

# Кеширование статических файлов
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Сжатие GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>

# Безопасность
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Кодировка UTF-8
AddDefaultCharset UTF-8
```

---

## 🌐 Этап 4: Настройка кириллического домена

### 4.1 IDN конвертация

Кириллический домен **иэо.рф** нужно конвертировать в Punycode:
- **иэо.рф** → **xn--d1a4b.xn--p1ai**

### 4.2 Настройка в панели Beget

1. Войдите в панель управления Beget
2. Перейдите в "Сайты и домены"
3. Добавьте домен в формате Punycode: `xn--d1a4b.xn--p1ai`
4. Привяжите домен к папке с вашим сайтом

### 4.3 Проверка DNS

Убедитесь, что DNS-записи настроены правильно:
```
A-запись: xn--d1a4b.xn--p1ai → IP-адрес сервера Beget
CNAME: www → xn--d1a4b.xn--p1ai
```

---

## 🔒 Этап 5: Установка SSL-сертификата

### 5.1 Бесплатный SSL от Let's Encrypt

1. В панели Beget перейдите в "SSL-сертификаты"
2. Выберите домен **иэо.рф**
3. Нажмите "Установить бесплатный SSL"
4. Дождитесь активации (обычно 5-15 минут)

### 5.2 Принудительное перенаправление на HTTPS

Добавьте в начало `.htaccess`:

```apache
# Редирект на HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Редирект с www на без www (или наоборот)
RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

---

## 🧪 Этап 6: Проверка работы сайта

### 6.1 Проверьте доступность

Откройте в браузере:
- https://иэо.рф
- https://www.иэо.рф
- https://xn--d1a4b.xn--p1ai

### 6.2 Проверьте навигацию

1. Перейдите на главную страницу
2. Кликните на "Категории" → выберите категорию
3. Перейдите в "Для бизнеса"
4. Проверьте "О нас"
5. Обновите страницу (F5) - должна остаться та же страница

### 6.3 Проверьте на мобильных

Откройте сайт на телефоне и проверьте адаптивность.

---

## 🔄 Этап 7: Обновление сайта

### Для обновления сайта:

1. Внесите изменения в код
2. Соберите проект: `npm run build`
3. Загрузите новые файлы из `dist` на сервер (заменив старые)
4. Очистите кеш браузера (Ctrl+F5)

### Автоматизация через Git (опционально)

Beget поддерживает Git-деплой:
1. В панели Beget создайте Git-репозиторий
2. Настройте автоматический деплой при push
3. Добавьте скрипт сборки в `.beget.yml`

---

## ⚡ Оптимизация производительности

### Дополнительные настройки в .htaccess:

```apache
# Предзагрузка ресурсов
<FilesMatch "\.(html)$">
  Header set Link "</assets/index.css>; rel=preload; as=style"
  Header add Link "</assets/index.js>; rel=preload; as=script"
</FilesMatch>

# Отключение ETags (для лучшего кеширования)
Header unset ETag
FileETag None
```

---

## 🐛 Устранение проблем

### Проблема: Белый экран

**Решение:**
1. Проверьте консоль браузера (F12)
2. Убедитесь, что в `vite.config.ts` установлен `base: '/'`
3. Проверьте пути к файлам в `index.html`

### Проблема: 404 при обновлении страницы

**Решение:**
1. Проверьте наличие `.htaccess`
2. Убедитесь, что `mod_rewrite` включен на сервере
3. Проверьте права доступа к `.htaccess` (644)

### Проблема: Стили не применяются

**Решение:**
1. Очистите кеш браузера (Ctrl+Shift+Delete)
2. Проверьте пути к CSS файлам в консоли браузера
3. Убедитесь, что файлы загружены в правильную папку

### Проблема: Долгая загрузка

**Решение:**
1. Включите сжатие GZIP (см. .htaccess выше)
2. Оптимизируйте изображения
3. Используйте CDN для статических ресурсов

---

## 📞 Поддержка Beget

- Документация: https://beget.com/ru/kb
- Тех. поддержка: https://beget.com/ru/support
- Телефон: 8 800 700-06-08

---

## ✅ Чек-лист деплоя

- [ ] Собран production build (`npm run build`)
- [ ] Загружено содержимое папки `dist` в `public_html`
- [ ] Создан файл `.htaccess` с правилами роутинга
- [ ] Настроен домен **иэо.рф** (Punycode)
- [ ] Установлен SSL-сертификат
- [ ] Настроен редирект на HTTPS
- [ ] Протестирована навигация по сайту
- [ ] Проверена работа на мобильных устройствах
- [ ] Проверена скорость загрузки

---

## 🎉 Готово!

Ваш сайт теперь доступен по адресу **https://иэо.рф**

Для технической поддержки обращайтесь в службу поддержки Beget.
