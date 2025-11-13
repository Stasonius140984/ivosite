#!/bin/bash

# Скрипт для обновления дизайна на сервере
# Запустите на СЕРВЕРЕ (ssh root@217.114.15.80)

echo "🇷🇺 Обновление дизайна сайта ИЭО - Стиль российского флага"
echo "============================================================"
echo ""

# Переходим в директорию проекта
cd /var/www/ivo

echo "📦 Текущая версия файлов:"
ls -lah

echo ""
echo "🔨 Пересборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта!"
    exit 1
fi

echo ""
echo "🔐 Установка прав доступа..."
chown -R www-data:www-data /var/www/ivo/build/
chmod -R 755 /var/www/ivo/build/
find /var/www/ivo/build/ -type f -exec chmod 644 {} \;

echo ""
echo "🔄 Перезапуск nginx..."
systemctl restart nginx

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при перезапуске nginx!"
    systemctl status nginx
    exit 1
fi

echo ""
echo "✅ Обновление завершено!"
echo ""
echo "🌐 Проверка сайта..."
curl -I http://217.114.15.80

echo ""
echo "============================================================"
echo "🎉 Готово! Откройте в браузере: http://217.114.15.80"
echo ""
echo "🎨 Новый дизайн:"
echo "  ⚪ Белый - основной фон"
echo "  🔵 Синий #0039A6 - header и акценты"
echo "  🔴 Красный #D52B1E - важные элементы"
echo ""
echo "📋 Не забудьте очистить кеш браузера: Ctrl + F5"
echo "============================================================"
