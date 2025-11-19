import { Shield, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'citizens' | 'employee' | 'security' | 'private-security' | 'gbr' | 'rosgvardiya' | 'about' | 'business') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const userCategories = [
    { id: 'citizens', label: 'Граждане' },
    { id: 'employee', label: 'Сотрудник' },
    { id: 'security', label: 'Охрана' },
    { id: 'gbr', label: 'ГБР' },
    { id: 'rosgvardiya', label: 'Росгвардия' },
  ] as const;

  const isUserCategoryActive = userCategories.some(cat => cat.id === currentPage);

  return (
    <header className="bg-[#0055CC] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Левая часть - логотип и название */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-8 h-8" />
            <div className="text-left">
              <div className="text-lg font-bold">ИЭО</div>
              <div className="text-xs opacity-90">Инфраструктура Экстренного Оповещения</div>
            </div>
          </button>
          
          {/* Правая часть - поисковая строка и меню */}
          <div className="flex items-center gap-4">
            {/* Поисковая строка */}
            <div className="relative hidden md:block">
              <input 
                type="text"
                placeholder="Поиск..."
                className="bg-white text-black px-4 py-2 pr-10 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Навигационное меню */}
            <nav className="flex gap-2 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={isUserCategoryActive ? 'secondary' : 'ghost'}
                    className="text-white hover:bg-white/20 bg-transparent border border-white/30"
                  >
                    Категории
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0055CC] border-white/20 text-white">
                  {userCategories.map(category => (
                    <DropdownMenuItem 
                      key={category.id}
                      onClick={() => onNavigate(category.id as any)}
                      className="cursor-pointer hover:bg-white/20 focus:bg-white/20"
                    >
                      {category.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant={currentPage === 'business' ? 'secondary' : 'ghost'}
                onClick={() => onNavigate('business')}
                className="text-white hover:bg-white/20"
              >
                Для Бизнеса
              </Button>
              <Button 
                variant={currentPage === 'about' ? 'secondary' : 'ghost'}
                onClick={() => onNavigate('about')}
                className="text-white hover:bg-white/20"
              >
                О нас
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
