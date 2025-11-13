#!/bin/bash

# ========================================
# Автоматическая загрузка сборки на сервер
# ========================================

SERVER="217.114.15.80"
USER="root"
REMOTE_PATH="/var/www/ivo/build/"

echo ""
echo "╔═══════════════════════════════════════════════════╗"
echo "║   📤 Загрузка сборки на сервер                   ║"
echo "╚═══════════════════════════════════════════════════╝"
echo ""

# Проверка наличия папки build
if [ ! -d "build" ]; then
    echo "❌ Папка build/ не найдена!"
    echo "Сначала выполните: ./build-local.sh"
    exit 1
fi

echo "📦 Загрузка файлов на сервер..."
echo "Сервер: $SERVER"
echo "Путь: $REMOTE_PATH"
echo ""

# Удаление старой папки build на сервере
echo "🗑️  Удаление старой сборки на сервере..."
ssh $USER@$SERVER "rm -rf $REMOTE_PATH*"

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при удалении старых файлов!"
    exit 1
fi

# Загрузка новой сборки
echo "📤 Загрузка новых файлов..."
scp -r build/* $USER@$SERVER:$REMOTE_PATH

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при загрузке файлов!"
    exit 1
fi

echo "✅ Файлы загружены"
echo ""

# Установка прав доступа
echo "🔐 Установка прав доступа..."
ssh $USER@$SERVER "chown -R www-data:www-data $REMOTE_PATH && chmod -R 755 $REMOTE_PATH"

if [ $? -ne 0 ]; then
    echo "⚠️  Предупреждение: Не удалось установить права доступа"
    echo "Выполните вручную:"
    echo "ssh $USER@$SERVER"
    echo "chown -R www-data:www-data $REMOTE_PATH"
    echo "chmod -R 755 $REMOTE_PATH"
fi

# Перезапуск nginx
echo "🔄 Перезапуск nginx..."
ssh $USER@$SERVER "systemctl restart nginx"

if [ $? -ne 0 ]; then
    echo "⚠️  Предупреждение: Не удалось перезапустить nginx"
    echo "Выполните вручную: ssh $USER@$SERVER 'systemctl restart nginx'"
fi

echo ""
echo "╔═══════════════════════════════════════════════════╗"
echo "║   ✅ Деплой завершён!                            ║"
echo "╚═══════════════════════════════════════════════════╝"
echo ""
echo "🌐 Откройте сайт: http://иэо.рф"
echo "🔄 Очистите кеш: Ctrl+Shift+R"
echo ""
