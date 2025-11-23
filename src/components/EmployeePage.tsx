import { AlertCircle, MapPin, Shield, Radio, Bell, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export default function EmployeePage() {
  return (
    <div className="w-full">
      {/* Hero - Флаг РФ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0039A6]"></div>
          <div className="flex-1 bg-[#D52B1E]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border-4 border-[#0039A6] max-w-4xl mx-auto">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#0039A6]" />
            <h1 className="text-5xl mb-6 text-[#0039A6]">СИСТЕМА БЕЗОПАСНОСТИ С АВТОМАТИЧЕСКОЙ ЭСКАЛАЦИЕЙ</h1>
            <p className="text-2xl text-[#D52B1E]">Ваша безопасность - наш приоритет</p>
          </div>
        </div>
      </section>

      {/* Status Section - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-[#0039A6] border-2 hover:shadow-xl transition-all">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-3xl text-blue-900 flex items-center gap-3">
                🟢 СТАТУС "НА РАБОТЕ"
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <p>Сотрудник отмечается в приложении при начале работы</p>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <p>Система отслеживает его местоположение на объекте</p>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <p>Возможность отправки личной тревоги в любой момент</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Personal Alarm - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-3xl flex items-center gap-3">
                🔴 ЛИЧНАЯ ТРЕВОГА (ШТАТНЫЙ РЕЖИМ)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="mb-6">ПРИ НОРМАЛЬНОЙ РАБОТЕ ОХРАНЫ:</p>
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-4">
                <div>
                  <p className="mb-2">1. СОТРУДНИК → Нажимает SOS в приложении</p>
                </div>
                <div>
                  <p className="mb-2">2. СИСТЕМА → Отправляет сигнал охране:</p>
                  <div className="ml-6 space-y-1 text-gray-300">
                    <p>- ФИО сотрудника</p>
                    <p>- Точный кабинет/этаж</p>
                    <p>- Автоматическая активация прослушки</p>
                  </div>
                </div>
                <div>
                  <p>3. ОХРАНА → Немедленно реагирует на вызов</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Mode - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-3xl text-red-900 flex items-center gap-3">
                ⚫ АВАРИЙНЫЙ РЕЖИМ (ЛИКВИДАЦИЯ ОХРАНЫ)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="mb-6">КОГДА ОХРАНА НЕ ОТВЕЧАЕТ:</p>
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-4">
                <div>
                  <p className="mb-2">1. 3 ЛИЧНЫХ ТРЕВОГИ → Активация общего режима</p>
                </div>
                <div>
                  <p className="mb-2">2. СИСТЕМА АВТОМАТИЧЕСКИ:</p>
                  <div className="ml-6 space-y-1 text-gray-300">
                    <p>✓ Рассылает сообщение всем сотрудникам:</p>
                    <p className="ml-4">"Нападение на объект! Заприте двери!"</p>
                    <p>✓ Вызывает Росгвардию и ГБР</p>
                    <p>✓ Начинает запись координат всех последующих тревог</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Route Building - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">🎯 ПОСТРОЕНИЕ МАРШРУТА НАПАДАЮЩИХ</h2>
          
          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white mb-8">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-2xl">ПРИ ПОСТУПЛЕНИИ ДОПОЛНИТЕЛЬНЫХ SOS:</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm space-y-4">
                <div>
                  <p className="mb-2">1. КАЖДЫЙ НОВЫЙ SOS → Отмечается на карте объекта</p>
                </div>
                <div>
                  <p className="mb-2">2. СИСТЕМА АНАЛИЗИРУЕТ:</p>
                  <div className="ml-6 space-y-1 text-gray-300">
                    <p>- Последовательность тревог</p>
                    <p>- Направление движения</p>
                    <p>- Скорость перемещения</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2">3. РОСГВАРДИЯ ПОЛУЧАЕТ:</p>
                  <div className="ml-6 space-y-1 text-gray-300">
                    <p>- Карту с маршрутом нападающих</p>
                    <p>- Прогноз следующих целей</p>
                    <p>- Реальное время обновления</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
            <CardHeader className="bg-white/5 border-b border-white/20">
              <CardTitle className="text-xl flex items-center gap-2">
                <ArrowRight className="w-6 h-6" />
                ПРИМЕР РАБОТЫ СИСТЕМЫ:
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm space-y-2">
                <p>15:00:01 - SOS кабинет 101 (начало нападения)</p>
                <p>15:00:34 - SOS кабинет 205 (движение на 2 этаж)</p>
                <p className="text-red-400">15:01:12 - SOS кабинет 210 → АКТИВАЦИЯ ОБЩЕЙ ТРЕВОГИ</p>
                <p>15:01:45 - SOS кабинет 215 → маршрут построен</p>
                <p>15:02:20 - SOS переговорная 3 → уточнение направления</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">🆘 СООБЩЕНИЯ ДЛЯ СОТРУДНИКОВ</h2>
          
          <Alert className="border-red-500 bg-red-50 p-8">
            <Bell className="h-8 w-8 text-red-600" />
            <AlertDescription>
              <div className="text-center">
                <p className="text-2xl mb-6 text-red-900">⚡ ЭКСТРЕННОЕ ОПОВЕЩЕНИЕ ⚡</p>
                <p className="text-xl mb-6">На объекте совершено нападение!</p>
                <p className="mb-4">НЕМЕДЛЕННО:</p>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <p>✓ Заприте дверь кабинета</p>
                  <p>✓ Отойдите от окон</p>
                  <p>✓ Не выходите в коридор</p>
                  <p>✓ Ожидайте инструкций</p>
                </div>
                <p className="mt-6">Оставайтесь на связи!</p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Advantages - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">🎯 ПРЕИМУЩЕСТВА СИСТЕМЫ</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  ДЛЯ ОХРАНЫ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Автоматическое дублирование при нейтрализации</li>
                  <li>• Точечное реагирование на угрозы</li>
                  <li>• Координация со спецслужбами</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  ДЛЯ СОТРУДНИКОВ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Простая активация помощи</li>
                  <li>• Автоматическая защита при уничтожении охраны</li>
                  <li>• Четкие инструкции в кризисной ситуации</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Radio className="w-6 h-6" />
                  ДЛЯ РОСГВАРДИИ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>• Точные данные о перемещении нападающих</li>
                  <li>• Экономия времени на разведку</li>
                  <li>• Повышение эффективности спецоперации</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Instructions - Синий фон */}
      <section className="py-16 bg-blue-900 text-white border-t-4 border-red-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <Shield className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl mb-6">ПОМНИТЕ: ВАША БЕЗОПАСНОСТЬ - ЭТО ПРИОРИТЕТ</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl mb-4">✓ В обычной ситуации:</h3>
              <p>Нажмите SOS - охрана придет немедленно</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl mb-4">✓ При нападении:</h3>
              <p>Система автоматически защитит всех и вызовет помощь</p>
            </div>
          </div>
          
          <Alert className="mt-8 bg-white/10 border-white/20 text-white">
            <AlertCircle className="h-6 w-6" />
            <AlertDescription className="text-lg">
              <p>Доверяйте технологии. Следуйте инструкциям. Помогайте другим.</p>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
}
