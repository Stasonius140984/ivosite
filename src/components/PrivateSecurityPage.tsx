import { Map, BarChart3, Radio, Shield, Users, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function PrivateSecurityPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-6">СИСТЕМА УПРАВЛЕНИЯ</h1>
          <p className="text-2xl">Координация и управление в кризисных ситуациях</p>
          <p className="text-xl mt-4 opacity-90">Для частных охранных предприятий и групп быстрого реагирования</p>
        </div>
      </section>

      {/* Crisis Center */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">ЦЕНТР КРИЗИСНОГО РЕАГИРОВАНИЯ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-6 h-6 text-blue-600" />
                  Единая карта
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">Единая карта всех охраняемых объектов</p>
                <ul className="space-y-2 text-sm">
                  <li>• Визуализация всех объектов на карте города</li>
                  <li>• Статусы безопасности в реальном времени</li>
                  <li>• Активные инциденты и тревоги</li>
                  <li>• Зоны повышенного риска</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  Группы реагирования
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">Статусы всех групп быстрого реагирования</p>
                <ul className="space-y-2 text-sm">
                  <li>• Готовность к выезду</li>
                  <li>• Текущие задачи и маршруты</li>
                  <li>• Время прибытия до объектов</li>
                  <li>• Нагрузка на группы</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-300">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Автоматизация
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">Автоматическое распределение задач</p>
                <ul className="space-y-2 text-sm">
                  <li>• Выбор ближайшей свободной группы</li>
                  <li>• Оптимизация маршрутов</li>
                  <li>• Эскалация при массовых тревогах</li>
                  <li>• Перераспределение ресурсов</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">ИНСТРУМЕНТЫ АНАЛИТИКИ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  Статистика инцидентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Статистика инцидентов в реальном времени:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Количество тревог по объектам</li>
                  <li>• Типы инцидентов</li>
                  <li>• Время реагирования</li>
                  <li>• Эффективность разрешения</li>
                  <li>• Тренды и динамика</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="w-6 h-6 text-blue-600" />
                  Прогнозирование угроз
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Система предиктивной аналитики:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Выявление паттернов угроз</li>
                  <li>• Предсказание возможных инцидентов</li>
                  <li>• Рекомендации по усилению охраны</li>
                  <li>• Оптимизация распределения сил</li>
                  <li>• Анализ внешних факторов</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Оценка эффективности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Оценка эффективности охраны:</p>
                <ul className="space-y-2 text-sm">
                  <li>• KPI отдельных групп</li>
                  <li>• Время реакции на тревоги</li>
                  <li>• Качество разрешения инцидентов</li>
                  <li>• Удовлетворенность клиентов</li>
                  <li>• Рейтинг сотрудников</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">ПРОТОКОЛЫ ВЗАИМОДЕЙСТВИЯ</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2 text-red-900">Автоматическое оповещение Росгвардии</h3>
                    <p className="mb-3">При массовых инцидентах и угрозах национальной безопасности</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Критерии автоматической эскалации</li>
                      <li>• Передача данных в реальном времени</li>
                      <li>• Координация совместных действий</li>
                      <li>• Отчетность по результатам</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Building className="w-12 h-12 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2 text-orange-900">Координация с МЧС</h3>
                    <p className="mb-3">При пожарах и чрезвычайных ситуациях</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Автоматическое определение типа ЧС</li>
                      <li>• Передача планов эвакуации</li>
                      <li>• Информация о количестве людей на объекте</li>
                      <li>• Содействие спасательным операциям</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Radio className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2 text-blue-900">Взаимодействие с МВД</h3>
                    <p className="mb-3">При угрозах терроризма и преступлениях</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Классификация угроз</li>
                      <li>• Фиксация доказательств</li>
                      <li>• Обеспечение безопасности до прибытия полиции</li>
                      <li>• Содействие в расследовании</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">ВОЗМОЖНОСТИ ПАНЕЛИ УПРАВЛЕНИЯ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Мониторинг 24/7</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li>✓ Непрерывное наблюдение за всеми объектами</li>
                  <li>✓ Мгновенные уведомления о тревогах</li>
                  <li>✓ Видеотрансляции с объектов</li>
                  <li>✓ Контроль статуса оборудования</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Управление персоналом</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li>✓ Расписание смен</li>
                  <li>✓ Геолокация сотрудников</li>
                  <li>✓ Рабочие задания и отчеты</li>
                  <li>✓ Оценка производительности</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Работа с клиентами</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li>✓ База данных объектов</li>
                  <li>✓ Договоры и SLA</li>
                  <li>✓ Автоматические отчеты</li>
                  <li>✓ Личные кабинеты клиентов</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle>Финансовый учет</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li>✓ Учет расходов на объекты</li>
                  <li>✓ Тарификация услуг</li>
                  <li>✓ Формирование счетов</li>
                  <li>✓ Финансовая аналитика</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl mb-6">ПРОФЕССИОНАЛЬНОЕ УПРАВЛЕНИЕ БЕЗОПАСНОСТЬЮ</h2>
          <p className="text-xl mb-4">ИЭО - это ваш надежный партнер в обеспечении безопасности клиентов</p>
          <p className="opacity-90">Координируйте действия, анализируйте эффективность, развивайте бизнес</p>
        </div>
      </section>
    </div>
  );
}
