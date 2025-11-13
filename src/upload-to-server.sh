#!/bin/bash

# Скрипт для загрузки обновлённых файлов на сервер
# Запустите ЛОКАЛЬНО на вашем компьютере

SERVER="217.114.15.80"
USER="root"
REMOTE_PATH="/var/www/ivo"

echo "🚀 Загрузка обновлённых файлов на сервер $SERVER"
echo "=================================================="

# Проверка подключения
echo ""
echo "1️⃣ Проверка подключения к серверу..."
if ! ssh -o ConnectTimeout=5 $USER@$SERVER "echo 'OK'"; then
    echo "❌ Не удалось подключиться к серверу!"
    echo "Проверьте SSH доступ: ssh $USER@$SERVER"
    exit 1
fi
echo "✅ Подключение установлено"

# Загрузка обновлённых файлов
echo ""
echo "2️⃣ Загрузка обновлённых файлов..."

# index.html
echo "   → index.html"
scp index.html $USER@$SERVER:$REMOTE_PATH/

# vite.config.ts
echo "   → vite.config.ts"
scp vite.config.ts $USER@$SERVER:$REMOTE_PATH/

# package.json
echo "   → package.json"
scp package.json $USER@$SERVER:$REMOTE_PATH/

# favicon.svg
echo "   → favicon.svg"
scp favicon.svg $USER@$SERVER:$REMOTE_PATH/

# nginx.conf
echo "   → nginx.conf"
scp nginx.conf $USER@$SERVER:/tmp/

echo ""
echo "✅ Файлы загружены"

# Выполнение команд на сервере
echo ""
echo "3️⃣ Выполнение команд на сервере..."

ssh $USER@$SERVER << 'ENDSSH'
cd /var/www/ivo

echo "   → Копирование nginx конфига..."
cp /tmp/nginx.conf /etc/nginx/sites-available/ivo.conf

echo "   → Удаление старых сборок..."
rm -rf build dist

echo "   → Пересборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке!"
    exit 1
fi

echo "   → Установка прав доступа..."
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

echo "   → Проверка nginx..."
nginx -t

if [ $? -ne 0 ]; then
    echo "❌ Ошибка в конфигурации nginx!"
    exit 1
fi

echo "   → Перезапуск nginx..."
systemctl restart nginx

echo ""
echo "✅ Деплой завершён успешно!"
echo ""
echo "Файлы на месте:"
ls -lah /var/www/ivo/build/assets/ | head -5
ENDSSH

echo ""
echo "=================================================="
echo "✅✅✅ ВСЁ ГОТОВО! ✅✅✅"
echo "=================================================="
echo ""
echo "🌐 Откройте в браузере: http://иэо.рф"
echo "🔄 Нажмите: Ctrl + F5 (жёсткая перезагрузка)"
echo ""
echo "🔍 Проверьте (F12 → Network):"
echo "   ✓ CSS файлы → 200 OK"
echo "   ✓ JS файлы → 200 OK"
echo "   ✓ favicon.svg → 200 OK"
echo ""
