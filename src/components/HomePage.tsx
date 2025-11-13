import { Shield, Users, Building, Radio, Map, Zap, Network, Lock, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface HomePageProps {
  onNavigate: (page: 'home' | 'citizens' | 'employee' | 'security' | 'private-security' | 'gbr' | 'rosgvardiya') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section - Флаг РФ */}
      <section className="relative py-20 overflow-hidden">
        {/* Триколор фон - горизонтальные полосы */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0055CC]"></div>
          <div className="flex-1 bg-[#E4181C]"></div>
        </div>
        
        {/* Контент поверх триколора */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-2xl border-8 border-[#0055CC] max-w-5xl mx-auto">
            <Shield className="w-24 h-24 mx-auto mb-6 text-[#0055CC]" />
            <h1 className="text-5xl md:text-6xl mb-6 text-[#0055CC]">
              ИЭО - Инфраструктура Экстренного Оповещения
            </h1>
            <p className="text-2xl mb-8 text-[#E4181C]">
              Единая система безопасности для бизнеса и государства
            </p>
            <p className="text-xl max-w-3xl mx-auto text-gray-700">
              Технологии, которые превращают каждого гражданина в активного защитника Отечества
            </p>
          </div>
        </div>
      </section>

      {/* About Company - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-center mb-8 text-[#0055CC]">
              ООО "НОВЫЕ РЕШЕНИЯ"
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-[#0055CC] border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Building className="w-12 h-12 text-[#0055CC] mb-4" />
                  <p>Российская IT-компания, специализирующаяся на разработке систем национальной безопасности</p>
                </CardContent>
              </Card>
              <Card className="border-[#E4181C] border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-[#E4181C] mb-4" />
                  <p>Основана в 2024 году с целью создания технологического щита страны</p>
                </CardContent>
              </Card>
              <Card className="border-[#0055CC] border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-2 text-blue-600 mb-4">
                    <div className="w-4 h-8 bg-white border-2 border-gray-400"></div>
                    <div className="w-4 h-8 bg-[#0055CC]"></div>
                    <div className="w-4 h-8 bg-[#E4181C]"></div>
                  </div>
                  <p>100% отечественная разработка - полное импортозамещение</p>
                </CardContent>
              </Card>
              <Card className="border-[#E4181C] border-2 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Lock className="w-12 h-12 text-[#0055CC] mb-4" />
                  <p>Соответствие требованиям ФСТЭК, ФСБ, Роскомнадзора</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* IEO Features - Светло-синий фон */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 text-[#0055CC]">ИЭО - ЭТО:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg border-2 border-[#0055CC] hover:shadow-xl transition-all">
              <Users className="w-16 h-16 mx-auto mb-4 text-[#0055CC]" />
              <p className="text-gray-800">✓ Единая платформа для граждан, бизнеса и силовых структур</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-[#E4181C] hover:shadow-xl transition-all">
              <Zap className="w-16 h-16 mx-auto mb-4 text-[#E4181C]" />
              <p className="text-gray-800">✓ Мгновенное реагирование на угрозы любой сложности</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-[#0055CC] hover:shadow-xl transition-all">
              <Radio className="w-16 h-16 mx-auto mb-4 text-[#0055CC]" />
              <p className="text-gray-800">✓ Работа в условиях кибератак и РЭБ-подавления</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-[#E4181C] hover:shadow-xl transition-all">
              <Shield className="w-16 h-16 mx-auto mb-4 text-[#E4181C]" />
              <p className="text-gray-800">✓ Краудсорсинговая система защиты границ</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Capabilities - Белый фон */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 text-[#E4181C]">Возможности системы</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-[#0055CC] border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Map className="w-16 h-16 text-[#0055CC] mb-6" />
                <h3 className="text-2xl mb-4 text-[#0055CC]">Карта безопасности в реальном времени</h3>
                <ul className="space-y-2">
                  <li>• Визуализация угроз и инцидентов</li>
                  <li>• Heat-карта распространения опасности</li>
                  <li>• Трек движения нарушителей</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-[#E4181C] border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Zap className="w-16 h-16 text-[#E4181C] mb-6" />
                <h3 className="text-2xl mb-4 text-[#E4181C]">Автоматическая эскалация</h3>
                <ul className="space-y-2">
                  <li>• 3 личные тревоги → общая тревога объекта</li>
                  <li>• Умные сценарии реагирования</li>
                  <li>• Координация всех служб</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-[#0055CC] border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <Network className="w-16 h-16 text-[#0055CC] mb-6" />
                <h3 className="text-2xl mb-4 text-[#0055CC]">Устойчивость к внешним воздействиям</h3>
                <ul className="space-y-2">
                  <li>• Mesh-сети при отключении интернета</li>
                  <li>• Спутниковая и радиосвязь</li>
                  <li>• Российская криптография</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Category Buttons - Светло-красный фон */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12 text-[#E4181C]">Выберите вашу роль</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <button
              onClick={() => onNavigate('citizens')}
              className="bg-white hover:bg-blue-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#0055CC] hover:border-[#E4181C]"
            >
              <Users className="w-12 h-12 text-[#0055CC] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#0055CC]">ГРАЖДАНЕ</h3>
              <p className="text-gray-700">Станьте защитником Отечества</p>
            </button>
            
            <button
              onClick={() => onNavigate('employee')}
              className="bg-white hover:bg-blue-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#0055CC] hover:border-[#E4181C]"
            >
              <Briefcase className="w-12 h-12 text-[#0055CC] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#0055CC]">СОТРУДНИК</h3>
              <p className="text-gray-700">Ваша безопасность - наш приоритет</p>
            </button>
            
            <button
              onClick={() => onNavigate('security')}
              className="bg-white hover:bg-blue-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#0055CC] hover:border-[#E4181C]"
            >
              <Radio className="w-12 h-12 text-[#0055CC] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#0055CC]">ОХРАНА</h3>
              <p className="text-gray-700">Инструменты для мгновенного реагирования</p>
            </button>
            
            <button
              onClick={() => onNavigate('private-security')}
              className="bg-white hover:bg-blue-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#0055CC] hover:border-[#E4181C]"
            >
              <Building className="w-12 h-12 text-[#0055CC] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#0055CC]">ЧОП</h3>
              <p className="text-gray-700">Координация и управление в кризисных ситуациях</p>
            </button>
            
            <button
              onClick={() => onNavigate('gbr')}
              className="bg-white hover:bg-red-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#E4181C] hover:border-[#0055CC]"
            >
              <Zap className="w-12 h-12 text-[#E4181C] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#E4181C]">ГБР</h3>
              <p className="text-gray-700">Быстрое реагирование на угрозы</p>
            </button>
            
            <button
              onClick={() => onNavigate('rosgvardiya')}
              className="bg-white hover:bg-red-50 p-8 rounded-lg shadow-xl transition-all hover:scale-105 text-left group border-2 border-[#E4181C] hover:border-[#0055CC]"
            >
              <Shield className="w-12 h-12 text-[#E4181C] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-2 text-[#E4181C]">РОСГВАРДИЯ</h3>
              <p className="text-gray-700">Стратегическая платформа национальной безопасности</p>
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Синий фон */}
      <footer className="bg-blue-900 text-white py-8 border-t-4 border-red-700">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-6 bg-white"></div>
            <div className="w-3 h-6 bg-blue-600"></div>
            <div className="w-3 h-6 bg-red-600"></div>
          </div>
          <p className="opacity-90">© 2024 ООО "НОВЫЕ РЕШЕНИЯ" - Технологический щит страны</p>
          <p className="text-sm opacity-70 mt-2">Все права защищены. Защищенная система национальной безопасности</p>
        </div>
      </footer>
    </div>
  );
}
