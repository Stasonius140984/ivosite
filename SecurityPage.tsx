import { Radio, Volume2, Bell, Flame, Shield, HeadphonesIcon, Lock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export default function SecurityPage() {
  return (
    <div className="w-full">
      {/* Hero - Флаг РФ (белый → синий → красный) */}
      <section className="relative py-16 overflow-hidden">
        {/* Триколор фон */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0039A6]"></div>
          <div className="flex-1 bg-[#D52B1E]"></div>
        </div>
        
        {/* Контент поверх триколора */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border-4 border-[#0039A6]">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#0039A6]" />
            <h1 className="text-5xl mb-6 text-[#0039A6]">ЧЕТКИЕ СЦЕНАРИИ ДЕЙСТВИЙ ДЛЯ ОХРАНЫ</h1>
            <p className="text-2xl text-[#D52B1E]">Инструменты для мгновенного реагирования</p>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {/* Scenario 1: Personal SOS */}
            <Card className="border-l-4 border-l-red-600">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-3xl text-red-900 flex items-center gap-3">
                  🔴 1. ЛИЧНАЯ ТРЕВОГА (SOS) ОТ СОТРУДНИКА
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">ЧТО ПРОИСХОДИТ:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <HeadphonesIcon className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>Сигнал из конкретного кабинета с автоматической активацией прослушки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Radio className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>На устройстве охраны: номер кабинета, этаж, ФИО сотрудника</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Volume2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>Запись аудио с места события начинается автоматически</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                  <p className="mb-4">ВАШИ ДЕЙСТВИЯ:</p>
                  <div className="space-y-2 ml-4">
                    <p>1. МГНОВЕННО → Слушайте аудиопоток с кабинета</p>
                    <p>2. ЗА 15 СЕКУНД → Направьте охрану к кабинету</p>
                    <p>3. ОЦЕНИТЕ СИТУАЦИЮ → По аудио определите тип угрозы</p>
                    <p>4. РЕАГИРУЙТЕ → Без шума, без предупреждений</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 2: Alarm Button */}
            <Card className="border-l-4 border-l-orange-600">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-3xl text-orange-900 flex items-center gap-3">
                  🚨 2. ТРЕВОЖНАЯ КНОПКА (ВЫЗОВ ГБР)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">ЧТО ПРОИСХОДИТ:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span>Только вызов Группы Быстрого Реагирования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Bell className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0 line-through" />
                      <span>Без оповещения сотрудников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Radio className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0 line-through" />
                      <span>Без вызова пожарных или Росгвардии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Volume2 className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0 line-through" />
                      <span>Тихий режим - никто не знает о тревоге</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                  <p className="mb-4">ВАШИ ДЕЙСТВИЯ:</p>
                  <div className="space-y-2 ml-4">
                    <p>1. НАЖАТИЕ КНОПКИ → Автоматический вызов ГБР</p>
                    <p>2. ПОДГОТОВКА → Занять позиции для встречи ГБР</p>
                    <p>3. НАБЛЮДЕНИЕ → Следить за обстановкой без паники</p>
                    <p>4. ВСТРЕЧА → Встретить ГБР и передать обстановку</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 3: General Alarm */}
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-3xl text-purple-900 flex items-center gap-3">
                  ⚠️ 3. ОБЩАЯ ТРЕВОГА (ТЕРРОРИСТЫ)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">КОГДА АКТИВИРУЕТСЯ:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span>Обнаружение вооруженных лиц на объекте</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span>Прямая угроза жизни людей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span>Нападение террористов</span>
                    </li>
                  </ul>
                </div>

                <Alert className="mb-6 border-purple-300 bg-purple-50">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <AlertDescription>
                    <p className="mb-3">ЧТО ПРОИСХОДИТ АВТОМАТИЧЕСКИ:</p>
                    <ul className="space-y-1 ml-4">
                      <li>✓ Блокировка всех выходов</li>
                      <li>✓ Вызов Росгвардии и спецподразделений</li>
                      <li>✓ Голосовое оповещение: "Заприте двери! Не выходите!"</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                  <p className="mb-4">ВАШИ ДЕЙСТВИЯ:</p>
                  <div className="space-y-2 ml-4">
                    <p>1. БЛОКИРОВКА → Закрыть все входы/выходы</p>
                    <p>2. ОПОВЕЩЕНИЕ → Активировать систему голосовых сообщений</p>
                    <p>3. КООРДИНАЦИЯ → Передавать данные о террористах Росгвардии</p>
                    <p>4. ЭВАКУАЦИЯ → Только по указанию спецслужб</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scenario 4: Fire Alarm */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-3xl text-red-900 flex items-center gap-3">
                  🔥 4. ПОЖАРНАЯ ТРЕВОГА
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl mb-4">ЧТО ПРОИСХОДИТ:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Bell className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>Автоматическое оповещение всех сотрудников</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Flame className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>Автоматический вызов пожарной службы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Volume2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span>Голосовые инструкции по эвакуации</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm">
                  <p className="mb-4">ВАШИ ДЕЙСТВИЯ:</p>
                  <div className="space-y-2 ml-4">
                    <p>1. ПОДТВЕРЖДЕНИЕ → Проверить датчики и камеры</p>
                    <p>2. ЭВАКУАЦИЯ → Запустить протокол эвакуации</p>
                    <p>3. ВСТРЕЧА → Подготовить встречу пожарных</p>
                    <p>4. КОНТРОЛЬ → Следить за полной эвакуацией</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-[#0039A6]">БЫСТРАЯ СПРАВКА</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="text-center border-red-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🔴</div>
                <h3 className="mb-2">SOS</h3>
                <p className="text-sm text-gray-600">Прослушка + Быстрое реагирование</p>
              </CardContent>
            </Card>
            <Card className="text-center border-orange-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="mb-2">Тревожная кнопка</h3>
                <p className="text-sm text-gray-600">Тихий вызов ГБР</p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">⚠️</div>
                <h3 className="mb-2">Общая тревога</h3>
                <p className="text-sm text-gray-600">Блокировка + Росгвардия</p>
              </CardContent>
            </Card>
            <Card className="text-center border-red-500">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="mb-2">Пожар</h3>
                <p className="text-sm text-gray-600">Эвакуация + МЧС</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important - Триколор футер */}
      <section className="relative py-16 overflow-hidden">
        {/* Триколор фон */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0039A6]"></div>
          <div className="flex-1 bg-[#D52B1E]"></div>
        </div>
        
        {/* Контент */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border-4 border-[#D52B1E]">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#0039A6]" />
            <h2 className="text-3xl mb-6 text-[#0039A6]">ВАША ПРОФЕССИОНАЛЬНАЯ ОТВЕТСТВЕННОСТЬ</h2>
            <p className="text-xl mb-4 text-gray-800">Быстрая и правильная реакция охраны - основа безопасности объекта</p>
            <p className="text-[#D52B1E]">Каждая секунда на счету. Каждое действие должно быть точным.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
