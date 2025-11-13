import { Shield, ChevronDown } from 'lucide-react';
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
    <header className="bg-gradient-to-r from-[#0055CC] via-[#0055CC] to-[#0055CC] text-white shadow-lg sticky top-0 z-50 border-b-4 border-[#E4181C]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-10 h-10" />
            <div>
              <div className="tracking-wider">ИЭО</div>
              <div className="text-xs opacity-90">Инфраструктура Экстренного Оповещения</div>
            </div>
          </button>
          
          <nav className="hidden md:flex gap-2 items-center">
            <Button 
              variant={currentPage === 'home' ? 'secondary' : 'ghost'}
              onClick={() => onNavigate('home')}
              className="text-white hover:bg-white/20"
            >
              Главная
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isUserCategoryActive ? 'secondary' : 'ghost'}
                  className="text-white hover:bg-white/20"
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
              Для бизнеса
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
    </header>
  );
}
