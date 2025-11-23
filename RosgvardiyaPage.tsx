import { Shield, Map, Radio, Users, TrendingUp, Eye, Lock, Zap, AlertTriangle, Network, CheckCircle, Activity, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export default function RosgvardiyaPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-5xl mb-6">СТРАТЕГИЧЕСКАЯ ПЛАТФОРМА УПРАВЛЕНИЯ СИЛОВЫМИ ОПЕРАЦИЯМИ</h1>
          <p className="text-2xl">ИЭО для Росгвардии - превосходство в управлении силовыми операциями любого масштаба</p>
        </div>
      </section>

      {/* Command Center */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-900">🎯 ЦЕНТР УПРАВЛЕНИЯ ОПЕРАЦИЯМИ</h2>
          
          <div className="space-y-6">
            <Card className="border-red-300">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">РЕАЛЬНОЕ ВРЕМЯ</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 flex items-center gap-2">
                      <Map className="w-6 h-6 text-red-600" />
                      📡 МОНИТОРИНГ ВСЕХ ОБЪЕКТОВ:
                    </h3>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• Единая карта всех подключенных объектов</li>
                      <li>• Статус безопасности каждого объекта</li>
                      <li>• Тепловая карта инцидентов по регионам</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      🚨 СИСТЕМА ЭСКАЛАЦИИ:
                    </h3>
                    <ul className="space-y-2 ml-6 text-sm">
                      <li>• Автоматическое оповещение при массовых инцидентах</li>
                      <li>• Интеграция с системами "Безопасный город"</li>
                      <li>• Координация с МВД, МЧС, ФСБ</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intervention Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-900">⚡ СЦЕНАРИИ ВМЕШАТЕЛЬСТВА РОСГВАРДИИ</h2>
          
          <div className="space-y-8">
            {/* Scenario 1 */}
            <Card className="border-l-4 border-l-red-600">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-900">СЦЕНАРИЙ 1: МАССОВОЕ НАПАДЕНИЕ НА ОБЪЕКТ</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4">ПОЛУЧАЕМАЯ ИНФОРМАЦИЯ:</h3>
                    <ul className="space-y-2">
                      <li>✓ Карта движения нападающих в реальном времени</li>
                      <li>✓ Количество и расположение заложников</li>
                      <li>✓ Тактика и вооружение нападающих</li>
                      <li>✓ План объекта с отметками угроз</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4">ДЕЙСТВИЯ РОСГВАРДИИ:</h3>
                    <div className="space-y-2">
                      <p><strong>1. АВТОМАТИЧЕСКОЕ РАЗВЕРТЫВАНИЕ</strong> → Ближайших подразделений</p>
                      <p><strong>2. БЛОКИРОВКА ОБЪЕКТА</strong> → Полное оцепление</p>
                      <p><strong>3. КООРДИНАЦИЯ ШТУРМА</strong> → На основе данных системы</p>
                      <p><strong>4. СПАСАТЕЛЬНАЯ ОПЕРАЦИЯ</strong> → Приоритетные цели по данным ИЭО</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 2 */}
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl text-orange-900">СЦЕНАРИЙ 2: ТЕРРОРИСТИЧЕСКАЯ УГРОЗА</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4">ДАННЫЕ ОТ СИСТЕМЫ:</h3>
                    <ul className="space-y-2">
                      <li>✓ Запись переговоров через прослушку</li>
                      <li>✓ Идентификация голосов нападающих</li>
                      <li>✓ Анализ поведения и намерений</li>
                      <li>✓ Прогноз развития ситуации</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4">ПЛАН ДЕЙСТВИЙ:</h3>
                    <div className="space-y-2">
                      <p><strong>1. ПСИХОЛОГИЧЕСКИЙ АНАЛИЗ</strong> → На основе записей</p>
                      <p><strong>2. ПЕРЕГОВОРНЫЙ ПРОЦЕСС</strong> → С использованием данных системы</p>
                      <p><strong>3. СИЛОВОЕ ВМЕШАТЕЛЬСТВО</strong> → В оптимальный момент</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 3 */}
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-2xl text-purple-900">СЦЕНАРИЙ 3: ГРАЖДАНСКИЕ ВОЛНЕНИЯ</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-4">ИНФОРМАЦИОННАЯ ПОДДЕРЖКА:</h3>
                    <ul className="space-y-2">
                      <li>✓ Тепловая карта скоплений людей</li>
                      <li>✓ Маршруты перемещения групп</li>
                      <li>✓ Выявление организаторов</li>
                      <li>✓ Прогноз развития событий</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4">УПРАВЛЕНИЕ СИЛАМИ:</h3>
                    <div className="space-y-2">
                      <p><strong>1. ПРЕВЕНТИВНЫЕ ДЕЙСТВИЯ</strong> → На основе прогноза</p>
                      <p><strong>2. ТОЧЕЧНОЕ ВМЕШАТЕЛЬСТВО</strong> → В ключевых точках</p>
                      <p><strong>3. БЛОКИРОВКА МАРШРУТОВ</strong> → По данным системы</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics System */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">📊 СИСТЕМА АНАЛИТИКИ И ПРОГНОЗИРОВАНИЯ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">ПРЕДИКТИВНАЯ АНАЛИТИКА</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-600" />
                      🔍 ВЫЯВЛЕНИЕ ПАТТЕРНОВ:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Анализ тактики нападающих</li>
                      <li>• Прогноз следующих целей</li>
                      <li>• Выявление уязвимых объектов</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      📈 СТАТИСТИЧЕСКИЕ ДАННЫЕ:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Частота инцидентов по регионам</li>
                      <li>• Эффективность реагирования</li>
                      <li>• Рекомендации по усилению безопасности</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900">ИНТЕЛЛЕКТУАЛЬНЫЕ ФУНКЦИИ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-green-600" />
                      🤖 AI-АНАЛИТИКА:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Автоматическая оценка уровня угрозы</li>
                      <li>• Рекомендации по задействованию сил</li>
                      <li>• Прогноз эскалации конфликта</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <Map className="w-5 h-5 text-green-600" />
                      🗺️ ГЕОПРОСТРАНСТВЕННЫЙ АНАЛИЗ:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Анализ угроз в территориальном разрезе</li>
                      <li>• Выявление опасных тенденций</li>
                      <li>• Планирование профилактических мероприятий</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Critical Infrastructure */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-900">🛡️ СИСТЕМА ЗАЩИТЫ КРИТИЧЕСКОЙ ИНФРАСТРУКТУРЫ</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-red-300">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900">МОНИТОРИНГ ОБЪЕКТОВ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="mb-2">🏭 ПРОМЫШЛЕННЫЕ ОБЪЕКТЫ:</h3>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• АЭС, ГЭС, ТЭЦ</li>
                      <li>• Химические производства</li>
                      <li>• Критическая транспортная инфраструктура</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2">🏛️ ГОСУДАРСТВЕННЫЕ ОБЪЕКТЫ:</h3>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Органы власти</li>
                      <li>• Силовые структуры</li>
                      <li>• Стратегические предприятия</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-300">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-xl text-orange-900">ПРОТОКОЛЫ РЕАГИРОВАНИЯ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div>
                  <h3 className="mb-3">🚨 АВАРИЙНЫЕ СЦЕНАРИИ:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <p>Автоматическое развертывание резерва</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Network className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <p>Координация всех силовых структур</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <p>Управление эвакуацией и блокировкой</p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interagency Cooperation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🌐 МЕЖВЕДОМСТВЕННОЕ ВЗАИМОДЕЙСТВИЕ</h2>
          
          <Card className="border-blue-300 mb-6">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-900">ИНТЕГРАЦИЯ С СИСТЕМАМИ</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 flex items-center gap-2">
                    <Network className="w-6 h-6 text-blue-600" />
                    🔗 ЕДИНОЕ ИНФОРМАЦИОННОЕ ПРОСТРАНСТВО:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 ml-6">
                    <ul className="space-y-2 text-sm">
                      <li>• МВД: данные о преступных группах</li>
                      <li>• ФСБ: разведывательная информация</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• МЧС: оперативная обстановка</li>
                      <li>• Минобороны: взаимодействие с ВС РФ</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 flex items-center gap-2">
                    <Radio className="w-6 h-6 text-blue-600" />
                    📞 СИСТЕМА КОМАНДНОЙ СВЯЗИ:
                  </h3>
                  <ul className="space-y-2 ml-6 text-sm">
                    <li>• Защищенные каналы связи</li>
                    <li>• Видеоконференции в реальном времени</li>
                    <li>• Совместное планирование операций</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">⚙️ ТЕХНОЛОГИЧЕСКИЕ ВОЗМОЖНОСТИ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">ИНСТРУМЕНТЫ УПРАВЛЕНИЯ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      🎮 ЦЕНТР УПРАВЛЕНИЯ ОПЕРАЦИЯМИ:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Единая карта всех инцидентов</li>
                      <li>• Управление силами и средствами</li>
                      <li>• Мониторинг выполнения задач</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2">
                      <Radio className="w-5 h-5 text-blue-600" />
                      📡 СИСТЕМА СВЯЗИ И НАВИГАЦИИ:
                    </h3>
                    <ul className="space-y-1 ml-6 text-sm">
                      <li>• Работа в условиях РЭБ</li>
                      <li>• Спутниковая навигация (ГЛОНАСС)</li>
                      <li>• Резервные каналы связи</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900">БЕЗОПАСНОСТЬ ДАННЫХ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div>
                  <h3 className="mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    🔒 ЗАЩИТА ИНФОРМАЦИИ:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p>Российская криптография</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p>Многоуровневая аутентификация</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <p>Соответствие требованиям ФСТЭК/ФСБ</p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">📈 РЕЗУЛЬТАТЫ ВНЕДРЕНИЯ</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-300">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-900">ОПЕРАТИВНАЯ ЭФФЕКТИВНОСТЬ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>Сокращение времени принятия решений на 70%</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>Повышение точности силового воздействия на 85%</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>Снижение рисков для мирных граждан на 90%</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p>Ускорение координации между ведомствами в 3 раза</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900">СТРАТЕГИЧЕСКИЕ ПРЕИМУЩЕСТВА</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Создание единого контура безопасности страны</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Упреждающее выявление угроз национальной безопасности</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Повышение эффективности силовых структур</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p>Технологическое превосходство над противником</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-900">🎯 ИНСТРУКЦИЯ ДЛЯ ОПЕРАТИВНЫХ СОТРУДНИКОВ РОСГВАРДИИ</h2>
          
          <Card className="border-red-300">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-red-900">РАБОТА С СИСТЕМОЙ</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-3">
                <p>1. МОНИТОРИНГ → Ежедневный контроль объектов на карте</p>
                <p>2. РЕАГИРОВАНИЕ → Немедленное реагирование на инциденты</p>
                <p>3. КООРДИНАЦИЯ → Взаимодействие с другими ведомствами</p>
                <p>4. АНАЛИЗ → Использование аналитики для профилактики</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-24 h-24 mx-auto mb-6" />
          <Alert className="bg-white/10 border-white/20 text-white">
            <Target className="h-8 w-8" />
            <AlertDescription>
              <p className="text-2xl mb-4">ИЭО для Росгвардии</p>
              <p className="text-xl">Стратегический инструмент обеспечения национальной безопасности, обеспечивающий превосходство в управлении силовыми операциями любого масштаба.</p>
            </AlertDescription>
          </Alert>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <p>Защита страны</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <p>Точность операций</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <p>Скорость реагирования</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
