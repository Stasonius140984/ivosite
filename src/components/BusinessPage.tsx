import { Shield, Settings, Layers, Building, Zap, Users, TrendingUp, CheckCircle, Sliders, Boxes, Network, School, Factory, Hospital, Puzzle, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';

export default function BusinessPage() {
  return (
    <div className="w-full">
      {/* Hero - Триколор */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white py-16 border-b-8 border-white">
        <div className="container mx-auto px-4 text-center">
          <Boxes className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-5xl mb-6">🌟 ЖИВОЙ ЩИТ</h1>
          <p className="text-2xl mb-4">Адаптивная Платформа Безопасности</p>
          <p className="text-xl max-w-3xl mx-auto opacity-90">Система, которая становится продолжением вашей организации</p>
        </div>
      </section>

      {/* Уникальность - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🎭 Уникальность в единстве: Одна платформа — бесконечные возможности</h2>
          
          <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <p className="text-xl text-center mb-6">
                Мы создали не просто продукт, а <strong className="text-blue-900">инструмент трансформации</strong>, который принимает форму ваших ценностей, процессов и философии безопасности.
              </p>
              <p className="text-lg text-center text-gray-700">
                Как вода заполняет сосуд, так наша система наполняет собой структуру вашей организации, становясь ее органичной частью.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Архитектура адаптации - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🏛️ Архитектура адаптации: Шесть уровней кастомизации</h2>

          <div className="space-y-6">
            {/* 1. Сценарный конструктор */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Puzzle className="w-8 h-8" />
                  1. Сценарный конструктор безопасности
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-white/10 p-4 rounded-lg mb-6">
                  <code className="text-lg">«Если [событие] → то [действие] + [уведомление] + [интеграция]»</code>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Визуальный редактор</strong> сценариев без программирования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Библиотека шаблонов</strong> для разных отраслей</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Глубокая кастомизация</strong> реакций и уведомлений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Тестирование сценариев</strong> в безопасной среде</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 2. Ролевой дизайнер */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  2. Ролевой дизайнер
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>Настройка <strong>иерархии ответственности</strong> под структуру организации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Гибкие права доступа</strong> — от рядового сотрудника до директора</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Профили компетенций</strong> для разных специалистов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Динамическое изменение ролей</strong> в реальном времени</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3. Интерфейсный хамелеон */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Sliders className="w-8 h-8" />
                  3. Интерфейсный хамелеон
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Брендирование</strong> под корпоративный стиль</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Адаптивная логика</strong> интерфейсов для разных отделов</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Персонализированные дашборды</strong> для каждой роли</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span><strong>Языковые пакеты</strong> и терминология организации</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отраслевые трансформации - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">🏢 Отраслевые трансформации: Система в действии</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Образование */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <School className="w-6 h-6" />
                  🎓 Образование
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2"><strong>Школа № 174</strong></p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="mb-2 bg-blue-700">Сценарии</Badge>
                    <ul className="space-y-1 ml-4">
                      <li>• Урок → тихая тревога учителя</li>
                      <li>• Перемена → усиленный мониторинг</li>
                      <li>• Эвакуация → голосовые инструкции</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-700">Роли</Badge>
                    <p className="ml-4">Учитель, Охранник, Директор, Медработник</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-red-700">Интеграции</Badge>
                    <p className="ml-4">Турникеты, Камеры, Система оповещения</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Промышленность */}
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Factory className="w-6 h-6" />
                  🏭 Промышленность
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2"><strong>Завод «Прогресс»</strong></p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="mb-2 bg-blue-700">Сценарии</Badge>
                    <ul className="space-y-1 ml-4">
                      <li>• Авария в цеху → блокировка участка</li>
                      <li>• Задымление → вызов МЧС</li>
                      <li>• Тревога КПП → охрана периметра</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-yellow-600">Зоны риска</Badge>
                    <p className="ml-4">Цех №5, Склад химреактивов, КПП</p>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-red-700">Специфика</Badge>
                    <p className="ml-4">Повышенная опасность, Сменная работа</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Медицина */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Hospital className="w-6 h-6" />
                  🏥 Медицина
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2"><strong>Клиника «Здоровье»</strong></p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <Badge className="mb-2 bg-blue-700">Особенности</Badge>
                    <ul className="space-y-1 ml-4">
                      <li>• Тревога в операционной → свой протокол</li>
                      <li>• Пациент с деменцией → геозоны</li>
                      <li>• ЧП в приемном покое → изоляция</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-700">Приоритеты</Badge>
                    <p className="ml-4">Безопасность пациентов, Конфиденциальность</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Конструктор реальности - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🎨 Конструктор реальности: Инструменты настройки</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Мастер адаптации */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-6 h-6" />
                  🔧 Мастер адаптации
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Пошаговый гид</strong> по настройке под организацию</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Диагностика потребностей</strong> в безопасности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Автогенерация рекомендаций</strong> по сценариям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Импорт существующих</strong> процессов и структур</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Панель трансформации */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Sliders className="w-6 h-6" />
                  🎛️ Панель трансформации
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-white/10 p-4 rounded-lg space-y-2 text-sm">
                  <p><strong>Организация:</strong> [Название]</p>
                  <p><strong>Отрасль:</strong> [Выбор из 50+ вариантов]</p>
                  <p><strong>Размер:</strong> [От 10 до 10 000+ сотрудников]</p>
                  <p><strong>Особенности:</strong> [Чек-лист рисков]</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-center">→ <strong>Сгенерировать конфигурацию</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Система пресетов */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-6 h-6" />
                  📊 Система пресетов
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Быстрый старт</strong> с отраслевыми шаблонами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Гибкая модификация</strong> готовых решений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Библиотека лучших практик</strong> безопасности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Сообщество конфигураций</strong> — обмен опытом</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Умная интеграция - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🌐 Умная интеграция: Система учится у вас</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Адаптивные подключения */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Network className="w-6 h-6" />
                  🔌 Адаптивные подключения
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Умные API</strong> — подстраиваются под ваши системы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Плагины для 1С</strong>, SAP, Oracle и других CRM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>ИИ-анализ существующих</strong> процессов безопасности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Автоматическая оптимизация</strong> workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Самообучающийся интеллект */}
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" />
                  🤖 Самообучающийся интеллект
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Анализ паттернов</strong> инцидентов в вашей организации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Прогноз рисков</strong> на основе вашей статистики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Персонализированные рекомендации</strong> по улучшению</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Эволюция системы</strong> вместе с ростом компании</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Масштабирование - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🏗️ Масштабирование роста: От кабинета до корпорации</h2>

          {/* Этапы трансформации */}
          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white mb-8">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-2xl">📈 Этапы трансформации</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">🏠</span>
                  <div>
                    <p className="mb-1"><strong>Старт: Кабинет</strong></p>
                    <p className="text-sm opacity-90">1 сценарий, 10 пользователей</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">🏢</span>
                  <div>
                    <p className="mb-1"><strong>Рост: Этаж</strong></p>
                    <p className="text-sm opacity-90">5 сценариев, 50 пользователей</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">🏛️</span>
                  <div>
                    <p className="mb-1"><strong>Развитие: Здание</strong></p>
                    <p className="text-sm opacity-90">20 сценариев, 200 пользователей</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <span className="text-3xl">🌆</span>
                  <div>
                    <p className="mb-1"><strong>Лидерство: Корпорация</strong></p>
                    <p className="text-sm opacity-90">100+ сценариев, 5000+ пользователей</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Беспрерывная эволюция */}
          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-2xl">🔄 Беспрерывная эволюция</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Модульное наращивание</strong> функционала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Плавная миграция</strong> с предыдущих систем</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Обратная связь от сотрудников</strong> для улучшений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span><strong>Регулярные обновления</strong> под меняющиеся потребности</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Преимущества - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">💫 Преимущества адаптивного подхода</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Для бизнеса */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  🎯 Для бизнеса
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Система растет вместе с компанией</strong> — не нужно менять платформу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Инвестиционная защищенность</strong> — один раз внедрили, потом используем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Быстрая окупаемость</strong> за счет точного соответствия потребностям</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Для сотрудников */}
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  👥 Для сотрудников
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Интуитивно понятный интерфейс</strong> — обучение за 15 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Учет специфики работы</strong> каждого подразделения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span><strong>Персональные настройки</strong> без потери контроля</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Для службы безопасности */}
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  🛡️ Для безопасности
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Точное соответствие</strong> регламентам организации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Гибкость в чрезвычайных ситуациях</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span><strong>Мощный аналитический инструмент</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl mb-8">🚀 Начните свой путь кастомизации</h2>
          
          <Alert className="bg-white/10 border-white/20 text-white mb-8">
            <Lightbulb className="h-6 w-6" />
            <AlertDescription className="text-xl">
              <p>Мы не предлагаем коробочное решение. Мы даем вам глину, из которой вы лепите идеальную систему безопасности для вашей уникальной организации.</p>
            </AlertDescription>
          </Alert>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-2xl">Всего за 3 шага к вашей персональной системе:</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/10 rounded-lg">
                  <div className="text-4xl mb-4">1️⃣</div>
                  <h4 className="mb-2"><strong>Диагностика</strong></h4>
                  <p className="text-sm">Изучаем ваши процессы и риски</p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg">
                  <div className="text-4xl mb-4">2️⃣</div>
                  <h4 className="mb-2"><strong>Проектирование</strong></h4>
                  <p className="text-sm">Создаем цифровой двойник безопасности</p>
                </div>
                <div className="p-6 bg-white/10 rounded-lg">
                  <div className="text-4xl mb-4">3️⃣</div>
                  <h4 className="mb-2"><strong>Запуск</strong></h4>
                  <p className="text-sm">Система оживает и начинает работать как ваше второе я</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-xl italic">
            <p>Создайте систему безопасности, которая дышит в ритме вашей организации, говорит на вашем языке и думает вашими категориями.</p>
            <p className="mt-4"><strong>Станьте следующим кейсом нашего успеха!</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}
