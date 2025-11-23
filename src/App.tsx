import { useState } from 'react';
import HomePage from './components/HomePage';
import CitizensPage from './components/CitizensPage';
import EmployeePage from './components/EmployeePage';
import SecurityPage from './components/SecurityPage';
import PrivateSecurityPage from './components/PrivateSecurityPage';
import GBRPage from './components/GBRPage';
import RosgvardiyaPage from './components/RosgvardiyaPage';
import AboutPage from './components/AboutPage';
import ChildrenPage from './components/ChildrenPage';
import BusinessPage from './components/BusinessPage';
import Header from './components/Header';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'citizens' | 'employee' | 'security' | 'private-security' | 'gbr' | 'rosgvardiya' | 'about' | 'children' | 'business'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'citizens':
        return <CitizensPage onNavigate={setCurrentPage} />;
      case 'employee':
        return <EmployeePage />;
      case 'security':
        return <SecurityPage />;
      case 'private-security':
        return <PrivateSecurityPage />;
      case 'gbr':
        return <GBRPage />;
      case 'rosgvardiya':
        return <RosgvardiyaPage />;
      case 'about':
        return <AboutPage />;
      case 'children':
        return <ChildrenPage />;
      case 'business':
        return <BusinessPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
