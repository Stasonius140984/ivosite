#!/bin/bash

# ========================================
# Скрипт сборки и подготовки к деплою
# ИЭО - Инфраструктура Экстренного Оповещения
# ========================================

echo "🚀 Начинаем сборку проекта ИЭО..."
echo ""

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "Установите Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js версия: $(node -v)"
echo "✅ npm версия: $(npm -v)"
echo ""

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при установке зависимостей!"
    exit 1
fi

echo "✅ Зависимости установлены"
echo ""

# Сборка проекта
echo "🔨 Сборка production версии..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке проекта!"
    exit 1
fi

echo ""
echo "✅ Проект успешно собран!"
echo ""

# Проверка результата
if [ -d "dist" ]; then
    echo "📁 Содержимое папки dist/:"
    ls -lh dist/
    echo ""
    
    if [ -d "dist/assets" ]; then
        echo "📁 Содержимое папки dist/assets/:"
        ls -lh dist/assets/
        echo ""
    fi
    
    echo "✅ Все файлы готовы к загрузке!"
    echo ""
    echo "📤 Следующие шаги:"
    echo "1. Откройте панель управления Beget: https://beget.com"
    echo "2. Перейдите в 'Файловый менеджер'"
    echo "3. Откройте папку: иэо.рф/public_html/"
    echo "4. Удалите старую папку assets/"
    echo "5. Загрузите ВСЁ содержимое папки dist/:"
    echo "   - index.html"
    echo "   - favicon.svg"
    echo "   - папку assets/"
    echo "6. Убедитесь, что .htaccess на месте"
    echo "7. Откройте сайт: https://иэо.рф"
    echo "8. Очистите кеш браузера (Ctrl+Shift+R)"
    echo ""
    echo "🎉 Готово!"
else
    echo "❌ Папка dist/ не найдена!"
    echo "Проверьте логи сборки выше"
    exit 1
fi
