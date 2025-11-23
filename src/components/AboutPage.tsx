import { Heart, Shield, Smartphone, Users, Zap, Target, MapPin, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero - Триколор */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 text-white py-16 border-b-8 border-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl mb-6">О НАС</h1>
          <p className="text-2xl">От мечты об Эко-парке до цифрового щита нации</p>
        </div>
      </section>

      {/* История - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-3xl text-blue-900 flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                Наша история
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p>
                  Изначально нашим идеалом был живой, дышащий Эко-парк у берегов Байкала — место, где природа и технологии существуют в гармонии, создавая безопасное пространство для людей. Судьба распорядилась иначе, и земля, где должен был вырасти парк, сменила владельца. Но мы не отказались от своей главной цели — <strong className="text-blue-900">создания безопасности</strong>.
                </p>
                <p>
                  Мы просто перешли от защиты природы к защите самого ценного, что в ней есть — <strong className="text-red-800">человека</strong>.
                </p>
                <p>
                  Так, благодаря видению нашего генерального директора <strong className="text-blue-900">Станислава Чепурных</strong>, родился проект <strong className="text-red-800">ИЭО</strong> — <strong className="text-blue-900">Инфраструктура Экстренного Оповещения</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Проблема - Синий фон */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">Проблема, которую мы увидели</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Медленное реагирование
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Сигнал «тревога в здании» — и драгоценные минуты тратятся на поиски угрозы, а не на ее устранение.</p>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Разобщенность
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Охрана, сотрудники, экстренные службы действуют в информационном вакууме.</p>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Беспомощность
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p>Дедушки и бабушки на вахте, чье мужество достойно уважения, но не подкреплено реальными возможностями противостоять вооруженному нападению.</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="mt-12 bg-white/10 border-white/20 text-white">
            <Smartphone className="h-6 w-6" />
            <AlertDescription className="text-lg">
              <p>Мы осознали простую истину: <strong>мы используем свой смартфон как кирпич</strong> — для тяжести в кармане, игр и соцсетей, забыв, что это мощнейший инструмент для защиты жизни и здоровья.</p>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Решение - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12 text-red-800">Наше решение: Ваш телефон — ваш личный телохранитель</h2>
          
          <Card className="border-red-700 border-2 hover:shadow-xl transition-all mb-8">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-red-900 flex items-center gap-3">
                <Smartphone className="w-8 h-8" />
                Цифровой щит
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="mb-6">
                Мы превращаем обычный смартфон в <strong className="text-red-900">цифровой щит</strong>. ИЭО — это не просто приложение с кнопкой SOS. Это <strong className="text-blue-900">единая нервная система безопасности</strong>, которая связывает воедино каждого сотрудника, охранника, врача скорой помощи и силовика.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <h3 className="text-xl mb-4 text-blue-900">Как это меняет всё?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-2 text-gray-600"><strong>Раньше:</strong></p>
                    <p className="text-gray-700">Сотрудник в панике — охранник в неведении — помощь далеко.</p>
                  </div>
                  <div>
                    <p className="mb-2 text-red-800"><strong>Теперь:</strong></p>
                    <p><strong className="text-blue-900">Одно нажатие</strong> — и охрана видит точный кабинет и слышит, что происходит. <strong className="text-red-800">Три нажатия</strong> — и система сама объявляет общую тревогу, а Росгвардия видит на карте маршрут движения нападающих.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xl text-blue-900">Мы даем силу там, где раньше была уязвимость.</p>
                <p className="text-xl text-red-800">Мы даем знания там, где царила неразбериха.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Философия - Красный фон */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">Новая философия безопасности</h2>
          
          <Alert className="mb-12 bg-white/10 border-white/20 text-white">
            <Target className="h-8 w-8" />
            <AlertDescription className="text-xl">
              <p>Наша миссия — вернуть технологиям их истинное предназначение: <strong>служить и защищать</strong>.</p>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <p><strong>Врач</strong> на выезде знает, что его безопасность — под контролем.</p>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <p><strong>Сотрудник</strong> в офисе уверен, что его крик о помощи не останется без ответа.</p>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <p><strong>Пожилой охранник</strong> обладает силой целого отряда быстрого реагирования, просто имея в кармане смартфон.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-2xl space-y-4">
            <p>Это больше чем бизнес.</p>
            <p className="text-3xl"><strong>Это — социальная ответственность, воплощенная в коде.</strong></p>
          </div>
        </div>
      </section>

      {/* Призыв к действию - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-blue-700 border-2 hover:shadow-xl transition-all">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-3xl text-blue-900 text-center flex items-center justify-center gap-3">
                <Heart className="w-8 h-8" />
                Присоединяйтесь к нам
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-center mb-8">
                Давайте вместе превратим наши телефоны из инструмента развлечения в самый надежный щит для нас и наших близких.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Реквизиты - Синий фон */}
      <section className="py-16 bg-blue-900 text-white border-t-4 border-red-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl text-center mb-12">Реквизиты компании</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  ООО "НОВЫЕ РЕШЕНИЯ"
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p><strong>Генеральный Директор:</strong></p>
                  <p className="text-lg">Чепурных Станислав Олегович</p>
                  <div className="mt-4 space-y-1 text-sm">
                    <p><strong>ИНН:</strong> 3812161060</p>
                    <p><strong>ОГРН:</strong> 1243800006999</p>
                    <p><strong>КПП:</strong> 381201001</p>
                    <p><strong>ОКПО:</strong> 83471435</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white border-2 bg-white/10 backdrop-blur text-white">
              <CardHeader className="bg-white/5 border-b border-white/20">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>Юридический адрес:</strong></p>
                    <p>664013, Иркутская область, г. о. город Иркутск, г. Иркутск, пер. Архипова, д. 15</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Email:</strong></p>
                    <p><a href="mailto:ivo38@mail.ru" className="hover:underline">ivo38@mail.ru</a></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
