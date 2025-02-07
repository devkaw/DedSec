import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Shield, UserPlus, Layout, BookOpen, Mail, Menu, X, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("logged") === "true";

  const navItems = [
    { icon: Shield, text: 'About Us', path: '/about' },
    { icon: UserPlus, text: 'Recruitment', path: '/recruitment' },
    { icon: Layout, text: 'Dashboard', path: '/dashboard', protected: true },
    { icon: BookOpen, text: 'Blog', path: '/blog' },
    { icon: Mail, text: 'Contact', path: '/contact' },
    { icon: LogIn, text: 'Login', path: '/login'}
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (event: React.MouseEvent, item: any) => {
    if (item.protected && !isLoggedIn) {
      event.preventDefault();
      setErrorMessage("⚠️ Você precisa estar logado para acessar o Dashboard!");
      setTimeout(() => setErrorMessage(''), 3000); // Oculta a mensagem após 3 segundos
    }
  };

  return (
    <nav className="bg-darker-bg/80 backdrop-blur-sm border-b border-neon-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-neon-green" />
            <span className="text-neon-green font-bold">DedSec</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-2 transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                }`}
                onClick={(e) => handleNavigation(e, item)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-neon-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-2 py-2 ${
                  isActive(item.path)
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                }`}
                onClick={(e) => {
                  handleNavigation(e, item);
                  setIsOpen(false);
                }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Exibir mensagem de erro */}
        {errorMessage && (
          <div className="text-center text-red-500 mt-2" style={{marginBottom : "2vh"}}>{errorMessage}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;