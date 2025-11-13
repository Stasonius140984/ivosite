# Сайт ИЭО - Инструкция по установке

## 🚀 Быстрая установка на сервер

### 1. На вашем компьютере (Windows)

```bash
# Установите зависимости
npm install

# Соберите проект
npm run build
```

### 2. Загрузка на сервер

```bash
# Загрузите собранные файлы
scp -r build/* root@217.114.15.80:/var/www/ivo/build/

# Загрузите nginx конфиг
scp nginx.conf root@217.114.15.80:/etc/nginx/sites-available/ivo.conf
```

### 3. На сервере выполните

```bash
# Создайте символическую ссылку на конфиг (если еще не создана)
ln -sf /etc/nginx/sites-available/ivo.conf /etc/nginx/sites-enabled/ivo.conf

# Удалите дефолтный конфиг если есть
rm -f /etc/nginx/sites-enabled/default

# Проверьте конфигурацию nginx
nginx -t

# Установите права
chmod -R 755 /var/www/ivo/build/

# Перезапустите nginx
systemctl restart nginx
```

### 4. Проверка

Откройте в браузере:
- http://217.114.15.80
- http://иэо.рф

Сайт должен отображаться с полным дизайном в цветах триколора! 🇷🇺

---

## 📁 Структура проекта

```
/
├── src/
│   ├── components/
│   │   └── Header.tsx          # Шапка сайта
│   ├── pages/
│   │   ├── Home.tsx            # Главная
│   │   ├── Citizens.tsx        # Граждане
│   │   ├── Employees.tsx       # Сотрудники
│   │   ├── Security.tsx        # Охрана
│   │   ├── PrivateSecurity.tsx # ЧОП/ГБР
│   │   ├── Rosgvardia.tsx      # Росгвардия
│   │   ├── Children.tsx        # Юный Щит
│   │   └── Business.tsx        # Живой Щит
│   ├── App.tsx                 # Главный компонент
│   ├── main.tsx                # Точка входа
│   └── index.css               # Стили
├── index.html
├── package.json
├── vite.config.ts
└── nginx.conf                  # Конфиг для сервера

```

## 🎨 Цвета триколора

- **Синий**: #0039A6 (ru-blue)
- **Красный**: #D52B1E (ru-red)
- **Белый**: #FFFFFF (ru-white)
- **Темно-синий**: #002868 (ru-dark)

## 🛠️ Локальная разработка

```bash
npm install
npm run dev
```

Откроется на http://localhost:5173
