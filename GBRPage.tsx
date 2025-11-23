import { Map, Radio, Shield, Zap, Clock, Users, Eye, HeadphonesIcon, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export default function GBRPage() {
  return (
    <div className="w-full">
      {/* Hero - Триколор */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white py-16 border-b-8 border-white">
        <div className="container mx-auto px-4 text-center">
          <Zap className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl mb-6">СИСТЕМА ВЗАИМОДЕЙСТВИЯ ГБР С ИЭО</h1>
          <p className="text-2xl">Группа Быстрого Реагирования</p>
          <p className="text-xl mt-4 opacity-90">Точность, скорость и безопасность в экстренных ситуациях</p>
        </div>
      </section>

      {/* Algorithm - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">🎯 АЛГОРИТМ РАБОТЫ ПРИ ПОЛУЧЕНИИ ТРЕВОГИ</h2>
          
          <div className="space-y-6">
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">1. ПОЛУЧЕНИЕ ВЫЗОВА</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Radio className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                    <p><strong>Тихий вызов</strong> от охраны объекта</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                    <p><strong>Автоматическое оповещение</strong> при активации тревожной кнопки</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Map className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                    <p><strong>Координаты и план объекта</strong> поступают сразу</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-900">2. ИНФОРМАЦИЯ ДЛЯ ГБР ПРИ ВЫЕЗДЕ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-4">
                  <div>
                    <p className="mb-2">📍 АДРЕС И КООРДИНАТЫ:</p>
                    <div className="ml-6 space-y-1 text-gray-300">
                      <p>- Точный адрес объекта</p>
                      <p>- Координаты для навигатора</p>
                      <p>- Рекомендуемые маршруты подъезда</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">🏢 ПЛАН ОБЪЕКТА:</p>
                    <div className="ml-6 space-y-1 text-gray-300">
                      <p>- Поэтажные планы</p>
                      <p>- Расположение входов/выходов</p>
                      <p>- Места размещения охраны</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2">⚠️ ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ:</p>
                    <div className="ml-6 space-y-1 text-gray-300">
                      <p>- Тип тревоги (тревожная кнопка)</p>
                      <p>- Количество людей на объекте</p>
                      <p>- Особенности объекта (опасные зоны, склады и т.д.)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scenarios - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🔴 СЦЕНАРИИ РАБОТЫ ГБР</h2>
          
          <div className="space-y-8">
            {/* Scenario 1 */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">СЦЕНАРИЙ 1: ТРЕВОЖНАЯ КНОПКА (ТИХИЙ ВЫЗОВ)</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4">ПОЛУЧАЕМАЯ ИНФОРМАЦИЯ:</h3>
                    <ul className="space-y-2">
                      <li>✓ Координаты охраны, активировавшей кнопку</li>
                      <li>✓ Текущая обстановка на объекте</li>
                      <li>✓ Данные с камер наблюдения</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4">ДЕЙСТВИЯ ГБР:</h3>
                    <div className="space-y-2">
                      <p><strong>1. СКРЫТОЕ ПРИБЫТИЕ</strong> → Без сигналов, тихий подъезд</p>
                      <p><strong>2. ВЗАИМОДЕЙСТВИЕ</strong> → Связь с охраной для уточнения обстановки</p>
                      <p><strong>3. ЗАХВАТ КОНТРОЛЯ</strong> → Поэтапный контро��ь объекта</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 2 */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">СЦЕНАРИЙ 2: ОБЩАЯ ТРЕВОГА (АВТОМАТИЧЕСКАЯ)</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4">ПОЛУЧАЕМАЯ ИНФОРМАЦИЯ:</h3>
                    <ul className="space-y-2">
                      <li>✓ Карта с маршрутом движения нападающих</li>
                      <li>✓ Реальное время обновления позиций</li>
                      <li>✓ Прогноз следующих целей атаки</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4">ДЕЙСТВИЯ ГБР:</h3>
                    <div className="space-y-2">
                      <p><strong>1. БЛОКИРОВКА</strong> → Перекрытие путей отхода нападающих</p>
                      <p><strong>2. ВСТРЕЧНАЯ АТАКА</strong> → Встреча нападающих по прогнозируемому маршруту</p>
                      <p><strong>3. СПАСЕНИЕ</strong> → Приоритетная эвакуация сотрудников из зон риска</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interface - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">📱 ИНТЕРФЕЙС ГБР В ПРИЛОЖЕНИИ ИЭО</h2>
          
          <div className="space-y-6">
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-900">ГЛАВНЫЙ ЭКРАН:</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg">
                    <h3 className="mb-4">[ КАРТА ОБЪЕКТА В РЕАЛЬНОМ ВРЕМЕНИ ]</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Тепловая карта активности</li>
                      <li>• Маршрут движения нападающих (красная линия)</li>
                      <li>• Позиции сотрудников (зеленые точки)</li>
                      <li>• Рекомендуемые пути вмешательства</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg">
                    <h3 className="mb-4">[ ИНФОРМАЦИОННАЯ ПАНЕЛЬ ]</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Таймер с момента активации тревоги</li>
                      <li>• Количество сотрудников на объекте</li>
                      <li>• Количество нападающих (если известно)</li>
                      <li>• Уровень угрозы (1-5)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">ФУНКЦИИ ДЛЯ ГБР:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="flex items-center gap-2 mb-3">
                      <HeadphonesIcon className="w-5 h-5 text-red-700" />
                      🎤 АУДИОКОНТРОЛЬ:
                    </h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Прослушка кабинетов в реальном времени</li>
                      <li>• Голосовая связь с охраной объекта</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 mb-3">
                      <Radio className="w-5 h-5 text-red-700" />
                      📡 ДАННЫЕ В РЕАЛЬНОМ ВРЕМЕНИ:
                    </h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Новые SOS-сигналы сразу на карте</li>
                      <li>• Автоматическое обновление маршрута угрозы</li>
                      <li>• Прогноз движения нападающих</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-red-700" />
                      📞 СВЯЗЬ И КООРДИНАЦИЯ:
                    </h3>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Прямая связь с Росгвардией</li>
                      <li>• Координация с другими группами ГБР</li>
                      <li>• Голосовые команды для охраны объекта</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">⚡ ПРЕИМУЩЕСТВА ДЛЯ ГБР</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  ОПЕРАТИВНОСТЬ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Сокращение времени реагирования</strong> на 40-60%</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Map className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Точное целеуказание</strong> без дополнительной разведки</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Автоматическое планирование</strong> операции</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  ЭФФЕКТИВНОСТЬ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Понимание обстановки</strong> до прибытия на объект</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Map className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Прогнозирование действий</strong> нападающих</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Radio className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Координация с другими службами</strong> в реальном времени</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  БЕЗОПАСНОСТЬ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Минимизация рисков</strong> для сотрудников и заложников</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Точечное вмешательство</strong> в нужной зоне</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-5 h-5 mt-1 flex-shrink-0" />
                    <p><strong>Контроль за развитием ситуации</strong> 24/7</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🎯 ИНСТРУКЦИЯ ДЛЯ ГБР</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">ПРИ ПОЛУЧЕНИИ ВЫЗОВА:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-2">
                  <p>1. ПОДТВЕРДИТЕ ВЫЗОВ → Нажмите "Принято в работу"</p>
                  <p>2. ИЗУЧИТЕ ИНФОРМАЦИЮ → План объекта, карта угроз</p>
                  <p>3. СПЛАНИРУЙТЕ ОПЕРАЦИЮ → Используйте рекомендации системы</p>
                  <p>4. ДЕЙСТВУЙТЕ → Следуйте по проложенному маршруту</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900">ВО ВРЕМЯ ОПЕРАЦИИ:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gray-900 text-white p-4 rounded-lg font-mono text-sm space-y-2">
                  <p>1. СЛЕДИТЕ ЗА ОБНОВЛЕНИЯМИ → Новые SOS на карте</p>
                  <p>2. КОРРЕКТИРУЙТЕ МАРШРУТ → По данным системы</p>
                  <p>3. ИСПОЛЬЗУЙТЕ ПРОСЛУШКУ → Для оценки обстановки</p>
                  <p>4. КООРДИНИРУЙТЕ ДЕЙСТВИЯ → С другими группами</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results - Синий фон */}
      <section className="py-16 bg-blue-900 text-white border-t-4 border-red-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">📊 РЕЗУЛЬТАТЫ ВНЕДРЕНИЯ</h2>
          
          <Alert className="bg-white/10 border-white/20 text-white mb-8">
            <CheckCircle className="h-6 w-6" />
            <AlertDescription>
              <p className="text-xl">ПО ДАННЫМ ТЕСТОВЫХ ВНЕДРЕНИЙ:</p>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <p className="mb-2">✅ Время реакции</p>
              <p className="text-sm">сокращено с 5-7 до 2-3 минут</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Map className="w-12 h-12 mx-auto mb-4" />
              <p className="mb-2">✅ Точность попадания</p>
              <p className="text-sm">в зону угрозы: 98%</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <p className="mb-2">✅ Эффективность операций</p>
              <p className="text-sm">повышена на 65%</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <p className="mb-2">✅ Риски для заложников</p>
              <p className="text-sm">снижены на 80%</p>
            </div>
          </div>

          <div className="text-center text-2xl">
            <p>ГБР с ИЭО — это точность, скорость и безопасность в экстренных ситуациях!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
