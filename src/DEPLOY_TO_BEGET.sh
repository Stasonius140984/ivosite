#!/bin/bash

# Скрипт для деплоя на Beget сервер 217.114.15.80
# Использование: bash DEPLOY_TO_BEGET.sh

SERVER="root@217.114.15.80"
REMOTE_PATH="/var/www/ivo"

echo "🚀 Начинаем деплой на Beget сервер..."

# 1. Собираем проект локально
echo "📦 Сборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки проекта!"
    exit 1
fi

echo "✅ Проект собран успешно!"

# 2. Создаем резервную копию на сервере
echo "💾 Создание резервной копии на сервере..."
ssh $SERVER "cp -r $REMOTE_PATH/build $REMOTE_PATH/build.backup.$(date +%Y%m%d_%H%M%S) 2>/dev/null || true"

# 3. Загружаем build на сервер
echo "📤 Загрузка build на сервер..."
scp -r build/* $SERVER:$REMOTE_PATH/build/

if [ $? -ne 0 ]; then
    echo "❌ Ошибка загрузки файлов!"
    exit 1
fi

# 4. Копируем favicon
echo "📄 Копирование favicon..."
scp favicon.svg $SERVER:$REMOTE_PATH/build/favicon.svg

# 5. Устанавливаем правильные права
echo "🔐 Установка прав доступа..."
ssh $SERVER "chown -R www-data:www-data $REMOTE_PATH/build && chmod -R 755 $REMOTE_PATH/build"

# 6. Перезагружаем nginx
echo "🔄 Перезагрузка nginx..."
ssh $SERVER "systemctl reload nginx"

if [ $? -ne 0 ]; then
    echo "⚠️ Не удалось перезагрузить nginx, но файлы загружены"
else
    echo "✅ Nginx перезагружен успешно!"
fi

echo ""
echo "🎉 ДЕПЛОЙ ЗАВЕРШЁН!"
echo "🌐 Сайт доступен по адресу: http://иэо.рф"
echo "🌐 Или по IP: http://217.114.15.80"
