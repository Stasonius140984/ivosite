import { Shield, Heart, Users, MapPin, Smartphone, Award, Baby, Navigation, AlertCircle, CheckCircle, Camera, Radio, Lock, Zap, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';

export default function ChildrenPage() {
  return (
    <div className="w-full">
      {/* Hero - Триколор */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white py-16 border-b-8 border-white">
        <div className="container mx-auto px-4 text-center">
          <Baby className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-5xl mb-6">🛡️ ЮНЫЙ ЩИТ</h1>
          <p className="text-2xl mb-4">Защита каждого ребенка</p>
          <p className="text-xl max-w-3xl mx-auto opacity-90">Цифровой ангел-хранитель для ваших детей</p>
        </div>
      </section>

      {/* Сердце системы - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🌟 Сердце системы — забота о детях</h2>
          
          <Card className="border-red-700 border-2 hover:shadow-xl transition-all mb-12">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-red-900 flex items-center gap-3">
                <Heart className="w-8 h-8" />
                Специальный модуль «Юный Щит»
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg mb-6">Это не просто технология, а цифровой ангел-хранитель для каждого ребенка.</p>
            </CardContent>
          </Card>

          {/* Семейное окружение */}
          <h3 className="text-3xl mb-8 text-blue-900">👨‍👩‍👧‍👦 Семейное окружение</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Shield className="w-6 h-6" />
                  Родительский щит
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Мгновенное оповещение родителей при активации тревоги</p>
              </CardContent>
            </Card>

            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <Users className="w-6 h-6" />
                  Соседская защита
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Все пользователи системы в радиусе 500 метров становятся добровольными помощниками</p>
              </CardContent>
            </Card>

            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <MapPin className="w-6 h-6" />
                  Сеть заботы
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Автоматическое создание безопасного периметра вокруг ребенка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Сценарии защиты - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🚨 Сценарии защиты для детей</h2>

          <div className="space-y-6">
            {/* Путь в школу */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Navigation className="w-8 h-8" />
                  🎒 «Путь в школу»
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Контроль безопасного маршрута</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Уведомление родителей о прибытии в школу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Тревога при отклонении от маршрута</span>
                  </li>
                </ul>
                <Alert className="mt-4 bg-red-50 border-red-300">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900">
                    <strong>Ситуация:</strong> Ребенок не дошел до школы — система автоматически оповещает родителей и добровольцев поблизости
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Заблудился - ОСНОВНОЙ РЕЖИМ */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-yellow-600/20 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MapPin className="w-8 h-8" />
                  🚌 «Заблудился» — ОСНОВНОЙ РЕЖИМ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-4">Возможности режима:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🎯</span>
                        <span><strong>Кнопка «Помогите найти меня»</strong> — главный элемент интерфейса</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">📍</span>
                        <span>Мгновенная передача точных координат с точностью до 3 метров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">👕</span>
                        <span>Автоматическая отправка фото ребенка и описания одежды</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🗣️</span>
                        <span>Голосовая связь с родителями и защитниками</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">🎨</span>
                        <span>Цветные метки на карте для быстрой ориентации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-2xl">📸</span>
                        <span>Автоматическая фото-фиксация окружения</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Экстренное сопровождение */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  🏃 «Экстренное сопровождение»
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Режим активируется при движении в незнакомом районе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Автоматический поиск сопровождающих среди добровольцев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Построение безопасного маршрута до дома/школы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Непрерывный мониторинг движения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Сообщество защитников - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">🤝 Сообщество защитников</h2>
          
          <Card className="border-blue-700 border-2 hover:shadow-xl transition-all mb-8">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-900 flex items-center gap-3">
                <Users className="w-8 h-8" />
                🌍 Каждый гражданин — защитник
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg mb-6">Когда активируется детская тревога, в радиусе 500 метров происходит:</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Для граждан-защитников */}
            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900">📱 Для граждан-защитников:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="p-3 bg-red-50 rounded">
                    <strong>«Ребенку нужна помощь в 150 метрах от вас»</strong> — тихое уведомление
                  </li>
                  <li className="p-3 bg-blue-50 rounded">
                    <strong>«Подойдите, успокойте, оставайтесь на связи»</strong> — четкая инструкция
                  </li>
                  <li className="p-3 bg-yellow-50 rounded">
                    <strong>«Не подвергайте себя опасности»</strong> — правило безопасности
                  </li>
                  <li className="p-3 bg-green-50 rounded">
                    <strong>Точный маршрут на карте</strong> — интеллектуальная навигация
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Система мотивации */}
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">🏅 Система мотивации защитников:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                    <span><strong>«Герой района»</strong> — значки и рейтинги</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Благодарности от родителей</strong> — обратная связь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Виртуальные награды</strong> за реальную помощь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span><strong>Чувство общности и значимости</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Родительский контроль - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">👪 Родительский контроль нового поколения</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Интеллектуальный мониторинг */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-xl">📊 Интеллектуальный мониторинг 24/7</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Умные геозоны:</strong> Школа, спортивная секция, двор, библиотека</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Прогнозирование рисков:</strong> AI анализирует маршруты и время</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Круг доверия:</strong> Бабушки, дедушки, проверенные друзья</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Авто-статусы:</strong> «В школе», «На прогулке», «В пути»</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Экстренные сценарии */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-xl">🛡️ Экстренные сценарии помощи</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-white/10 p-4 rounded">
                  <h4 className="mb-3">«Детский SOS» — мгновенный отклик системы:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Точные координаты + свежее фото</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Оповещение 15 ближайших защитников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Экстренный групповой звонок родителям</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Запись окружающей обстановки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Автоматический сбор доказательств</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Интерфейс для детей - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🎨 Интерфейс, который понимают дети</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Приложение Мой Ангел */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Smartphone className="w-6 h-6" />
                  📱 Приложение «Мой Ангел»
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-500">
                    <p className="flex items-center gap-2">
                      <span className="text-2xl">🟢</span>
                      <strong>Зеленая кнопка</strong> «Всё в порядке» — ежедневное подтверждение
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-500">
                    <p className="flex items-center gap-2">
                      <span className="text-2xl">🟡</span>
                      <strong>Желтая кнопка</strong> «Нужна компания» — призыв сопровождающих
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border-2 border-red-500">
                    <p className="flex items-center gap-2">
                      <span className="text-2xl">🔴</span>
                      <strong>Красная кнопка</strong> «ПОМОГИТЕ!» — экстренный вызов
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="flex items-center gap-2">
                      <span className="text-2xl">🎵</span>
                      <span>Голосовые подсказки: «Нажми зеленую кнопку, когда дойдешь до школы»</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Визуальная система статусов */}
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  🎭 Визуальная система статусов
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-2xl">✅</span>
                      <span><strong>«Щит активен»</strong> — ребенок под защитой сообщества</span>
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-2xl">⚠️</span>
                      <span><strong>«Ищем компанию»</strong> — нужны сопровождающие</span>
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="flex items-start gap-2">
                      <span className="text-2xl">🚨</span>
                      <span><strong>«SOS! Требуется помощь!»</strong> — экстренная ситуация</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Безопасный район - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🏘️ Безопасный район — умный район</h2>

          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white mb-8">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-2xl flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                🗺️ Интерактивная карта безопасности
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Живая карта</strong> защитников в реальном времени</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Безопасные островки:</strong> Магазины, аптеки, кафе-партнеры</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Школы и детские площадки</strong> под усиленной защитой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Маршруты патрулей</strong> добровольцев</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Умные уведомления */}
          <h3 className="text-2xl mb-6">🤖 Умные уведомления для всех</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Alert className="bg-green-50 border-green-300">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-900">
                «Анна, Петя благополучно дошел до школы. В радиусе 200 метров находятся 8 защитников»
              </AlertDescription>
            </Alert>

            <Alert className="bg-red-50 border-red-300">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-900">
                «Внимание! Саше нужна помощь у центрального парка. Ближайшие защитники — отзовитесь!»
              </AlertDescription>
            </Alert>

            <Alert className="bg-yellow-50 border-yellow-300">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-900">
                «Миша активировал кнопку "Нужна компания" на пути из школы. Кто может составить компанию?»
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Преимущества - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">🎯 Преимущества системы</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Для родителей */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">💝 Для родителей:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Мгновенная реакция</strong> сообщества на любую опасность</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Круглосуточное спокойствие</strong> за ребенка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Живое сообщество</strong> поддержки вокруг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Технологии</strong> как продолжение родительской заботы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Для детей */}
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900">🌟 Для детей:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Чувство защищенности</strong> в любом месте района</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Простота</strong> — одна кнопка для помощи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Уверенность,</strong> что вокруг есть люди, готовые помочь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Понимание</strong> правил безопасности в игровой форме</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Для граждан-защитников */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">🏅 Для граждан-защитников:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Реальная возможность</strong> помочь ребенку</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Чувство общности</strong> и взаимовыручки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Простое участие</strong> — установил приложение и уже в строю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Гордость</strong> за безопасный район</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Технологии заботы - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🚀 Технологии заботы</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Zap className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Умные алгоритмы</h4>
                    <p>Предсказывают потенциально опасные ситуации</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Camera className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Компьютерное зрение</h4>
                    <p>Помогает идентифицировать ребенка на камерах района</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Radio className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Голосовой AI</h4>
                    <p>Успокаивает ребенка до прихода помощи</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2">Российское шифрование</h4>
                    <p>Защита персональных данных детей</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Философия - Синий фон */}
      <section className="py-16 bg-blue-900 text-white border-t-4 border-red-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <blockquote className="text-2xl mb-8 italic">
            «Юный Щит» — это новая философия детской безопасности, где технологии объединяют людей. Где каждый гражданин становится тем самым взрослым, к которому ребенок может обратиться за помощью. Где район становится большой дружной семьей.
          </blockquote>
          
          <div className="mt-12 p-8 bg-white/10 rounded-lg border-2 border-white/20">
            <p className="text-xl mb-4">
              <strong>Присоединяйтесь к сообществу защитников!</strong>
            </p>
            <p className="text-lg">
              Установите приложение — возможно, именно вы станете тем героем, который вернет улыбку испуганному ребенку.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
