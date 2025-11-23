#!/bin/bash

# ПОЛНАЯ ЗАГРУЗКА ПРОЕКТА НА СЕРВЕР 217.114.15.80
# Запускается ПРЯМО из Figma Make!

SERVER="root@217.114.15.80"
REMOTE_PATH="/var/www/ivo"

echo "🚀 ЗАГРУЗКА ВСЕХ ФАЙЛОВ НА СЕРВЕР..."

# Создаем временную папку для сборки
mkdir -p /tmp/ivo-deploy
cd /tmp/ivo-deploy

# Копируем все нужные файлы
echo "📦 Копирование файлов..."
cp -r /src ./
cp -r /components ./
cp -r /styles ./
cp -r /public ./
cp /package.json ./
cp /tsconfig.json ./
cp /tsconfig.node.json ./
cp /vite.config.ts ./
cp /tailwind.config.js ./
cp /postcss.config.js ./
cp /index.html ./
cp /favicon.svg ./public/

# Архивируем
echo "🗜️ Создание архива..."
tar -czf project.tar.gz *

# Загружаем на сервер
echo "📤 Загрузка на сервер..."
scp project.tar.gz $SERVER:/tmp/

# Распаковываем и устанавливаем на сервере
echo "📦 Распаковка на сервере..."
ssh $SERVER << 'EOF'
cd /var/www/ivo
rm -rf src components styles public package.json tsconfig.* vite.config.ts tailwind.config.js postcss.config.js index.html
tar -xzf /tmp/project.tar.gz -C /var/www/ivo/
rm /tmp/project.tar.gz

# Устанавливаем зависимости
echo "📥 Установка зависимостей..."
npm install

# Собираем проект
echo "🔨 Сборка проекта..."
npm run build

# Устанавливаем права
echo "🔐 Установка прав..."
chown -R www-data:www-data /var/www/ivo
chmod -R 755 /var/www/ivo

# Перезагружаем nginx
echo "🔄 Перезагрузка nginx..."
systemctl reload nginx

echo "✅ ГОТОВО!"
EOF

# Очищаем временные файлы
rm -rf /tmp/ivo-deploy

echo ""
echo "🎉 ПРОЕКТ УСПЕШНО ЗАГРУЖЕН И СОБРАН НА СЕРВЕРЕ!"
echo "🌐 Сайт: http://иэо.рф или http://217.114.15.80"
