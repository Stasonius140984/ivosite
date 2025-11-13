import { Shield, Eye, Map, AlertTriangle, Heart, Award, Smartphone, CheckCircle, HelpCircle, Baby } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';

interface CitizensPageProps {
  onNavigate?: (page: 'children') => void;
}

export default function CitizensPage({ onNavigate }: CitizensPageProps) {
  return (
    <div className="w-full">
      {/* Hero - Флаг РФ */}
      <section className="relative py-16 overflow-hidden">
        {/* Триколор фон */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0055CC]"></div>
          <div className="flex-1 bg-[#E4181C]"></div>
        </div>
        
        {/* Контент */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border-4 border-[#0055CC] max-w-4xl mx-auto">
            <Shield className="w-20 h-20 mx-auto mb-6 text-[#0055CC]" />
            <h1 className="text-5xl mb-6 text-[#0055CC]">КАЖДЫЙ ГРАЖДАНИН - ЗАЩИТНИК ОТЕЧЕСТВА</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-700">Ваша роль в национальной безопасности</p>
            
            {/* Кнопка для детей */}
            {onNavigate && (
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('children')}
                  className="bg-white hover:bg-blue-50 text-[#0055CC] px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105 inline-flex items-center gap-3 border-2 border-[#E4181C]"
                >
                  <Baby className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xl">ДЛЯ ДЕТЕЙ</div>
                    <div className="text-sm opacity-80">Система «Юный Щит» — защита каждого ребенка</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Role Section - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Eye className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="mb-2 text-blue-900">✅ Активный наблюдатель</h3>
                <p className="text-sm">Сообщайте о подозрительных объектах и ситуациях</p>
              </CardContent>
            </Card>
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Map className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h3 className="mb-2 text-red-900">✅ Участник краудсорсинга</h3>
                <p className="text-sm">Ваши данные помогают выявлять угрозы</p>
              </CardContent>
            </Card>
            <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <h3 className="mb-2 text-blue-900">✅ Защитник границ</h3>
                <p className="text-sm">Приграничные жители становятся "цифровым частоколом"</p>
              </CardContent>
            </Card>
            <Card className="border-red-700 border-2 hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h3 className="mb-2 text-red-900">✅ Помощник в ЧС</h3>
                <p className="text-sm">Участвуйте в спасательных операциях через приложение</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">ИНСТРУКЦИЯ ДЛЯ ГРАЖДАН</h2>
          
          <div className="space-y-8">
            {/* Everyday Security */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">1. ПОВСЕДНЕВНАЯ БЕЗОПАСНОСТЬ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">При обнаружении угрозы:</p>
                <ol className="space-y-2 ml-6 list-decimal">
                  <li>Откройте приложение "Единый Контур"</li>
                  <li>Нажмите кнопку "Сообщить об угрозе"</li>
                  <li>Выберите тип угрозы:
                    <ul className="ml-6 mt-2 space-y-1 list-disc">
                      <li>Подозрительный предмет</li>
                      <li>Опасные лица</li>
                      <li>Нарушение общественного порядка</li>
                      <li>Происшествие на дороге</li>
                    </ul>
                  </li>
                  <li>Сделайте фото/видео (если безопасно)</li>
                  <li>Отправьте отчет</li>
                </ol>
                <Alert className="mt-4 border-red-300 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900">
                    Важно: Не подвергайте себя опасности! Сначала безопасность, потом отчет.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Border Territories */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">2. ПРИГРАНИЧНЫЕ ТЕРРИТОРИИ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">Для жителей пограничных зон:</p>
                <ul className="space-y-2 ml-6 list-disc mb-4">
                  <li>Автоматическая фиксация нарушений границы</li>
                  <li>Работа в режиме "Цифрового часового"</li>
                  <li>Особые протоколы при отключении связи</li>
                  <li>Взаимодействие с Пограничной службой ФСБ</li>
                </ul>
                <p className="mt-4 mb-2">Что сообщать:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Перемещение военной техники</li>
                  <li>Подозрительные группы людей</li>
                  <li>Неопознанные летательные аппараты</li>
                  <li>Нарушение пограничного режима</li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Situations */}
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">3. ЧРЕЗВЫЧАЙНЫЕ СИТУАЦИИ</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">Правила поведения:</p>
                <ul className="space-y-2 ml-6 list-disc mb-4">
                  <li>Следуйте инструкциям в приложении</li>
                  <li>Не распространяйте непроверенную информацию</li>
                  <li>Помогайте тем, кто в беде</li>
                  <li>Координируйте действия с МЧС</li>
                </ul>
                <p className="mt-4 mb-2">Функции помощи:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Кнопка "Нужна помощь" - для запроса спасателей</li>
                  <li>Кнопка "Могу помочь" - для волонтеров</li>
                  <li>Карта безопасных зон и путей эвакуации</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">ТЕХНОЛОГИЧЕСКИЕ ВОЗМОЖНОСТИ ДЛЯ ГРАЖДАН</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-700" />
                  Mesh-сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Работа без интернета через соседние устройства</li>
                  <li>• Автоматическое создание сетей в кризисных ситуациях</li>
                  <li>• Передача сигналов бедствия при подавлении связи</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-red-700" />
                  Система репутации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Повышение уровня доверия к вашим отчетам</li>
                  <li>• Статус "Надежный наблюдатель"</li>
                  <li>• Доступ к расширенным функциям</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-700" />
                  Геймификация безопасности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Система баллов за полезные отчеты</li>
                  <li>• Рейтинги активных граждан</li>
                  <li>• Общественное признание</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rights and Responsibilities - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">ПРАВА И ОБЯЗАННОСТИ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">Ваши права:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Конфиденциальность персональных данных</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Защита от преследования за добросовестные сообщения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Доступ к информации об угрозах в вашем районе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Юридическая поддержка при необходимости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="text-2xl">Ваши обязанности:</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Сообщать только проверенную информацию</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Не создавать панику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Соблюдать законы РФ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>Помогать согражданам в беде</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl mb-8">КАК НАЧАТЬ?</h2>
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8">
              <Smartphone className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl mb-6">Установите приложение "Единый Контур":</h3>
              <ol className="text-left space-y-3 max-w-2xl mx-auto mb-6">
                <li>1. Скачайте из App Store/Google Play</li>
                <li>2. Пройдите верификацию личности</li>
                <li>3. Изучите инструкции для вашего региона</li>
                <li>4. Начните с тестового режима</li>
              </ol>
              <div className="mt-8 p-4 bg-white/10 rounded">
                <p className="mb-2">Требования:</p>
                <ul className="text-sm space-y-1">
                  <li>• Российское гражданство</li>
                  <li>• Возраст от 18 лет</li>
                  <li>• Отсутствие судимости</li>
                  <li>• Готовность следовать инструкциям</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Cases - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-blue-900">ПРИМЕРЫ УСПЕШНОГО УЧАСТИЯ</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-900">Реальный кейс №1</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm">Житель приграничного села заметил группу нарушителей. Через приложение отправил фото и координаты. Наряд задержал диверсантов за 12 минут.</p>
              </CardContent>
            </Card>
            <Card className="border-red-700 border-2">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-900">Реальный кейс №2</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm">Водитель на трассе увидел аварию с пострадавшими. Через кнопку "Нужна помощь" вызвал спасателей и скорая приехала на 8 минут быстрее.</p>
              </CardContent>
            </Card>
            <Card className="border-blue-700 border-2">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-900">Реальный кейс №3</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm">При массовом отключении связи в городе Mesh-сеть позволила координировать действия спасателей и волонтеров.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl text-center mb-12">ВОПРОС-ОТВЕТ</h2>
          <div className="space-y-4">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Q: Насколько конфиденциальны мои данные?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>A: Все данные защищены российской криптографией и хранятся на серверах в РФ. Доступ только у уполномоченных служб.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Q: Могут ли меня привлечь к ответственности за ложный вызов?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>A: Только в случае злонамеренного срабатывания. Система учитывает человеческий фактор.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardHeader className="border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Q: Что даёт участие в программе?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>A: Безопасность вашей семьи, уважение сограждан, возможность реально помогать стране.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-red-900 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">ПРИСОЕДИНЯЙТЕСЬ К НАЦИОНАЛЬНОМУ ДВИЖЕНИЮ БЕЗОПАСНОСТИ!</h2>
          <p className="text-xl mb-8">Вместе мы создаем:</p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="p-4 bg-white/10 rounded">
              <p>Непроницаемую защиту границ</p>
            </div>
            <div className="p-4 bg-white/10 rounded">
              <p>Быстрое реагирование на угрозы</p>
            </div>
            <div className="p-4 bg-white/10 rounded">
              <p>Единое общество безопасности</p>
            </div>
            <div className="p-4 bg-white/10 rounded">
              <p>Сильную и защищенную Россию</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" disabled>
            В стадии разработки
          </Button>
        </div>
      </section>
    </div>
  );
}
