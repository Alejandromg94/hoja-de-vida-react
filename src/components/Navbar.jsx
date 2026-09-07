import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <div className="flex-shrink-0 flex items-center gap-2">
               <a href="#inicio" className="flex items-center gap-2 group">
<img
                    src="/alejo15.jpg"
                    alt="Alejandro Muñoz"
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-indigo-550 dark:border-indigo-400 shadow-md"
                  />
                 <span className="font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400">
                   Alejandro Muñoz
                 </span>
               </a>
           </div>

           {/* Desktop Nav Links */}
           <div className="hidden md:flex items-center space-x-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-200"
               >
                 {link.name}
               </a>
             ))}
             
             {/* Theme Toggle Button */}
             <button
               onClick={() => setDarkMode(!darkMode)}
               className="p-2 rounded-xl bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200"
               aria-label="Toggle Theme"
             >
               {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
             </button>
           </div>

           {/* Mobile Menu & Theme Toggle */}
           <div className="flex items-center gap-2 md:hidden">
             <button
               onClick={() => setDarkMode(!darkMode)}
               className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
               aria-label="Toggle Theme"
             >
               {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
             </button>
             
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
             >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           </div>
         </div>
       </div>

       {/* Mobile Menu Open */}
       {isOpen && (
         <div className="md:hidden animate-fade-in">
           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mx-4 rounded-2xl glass shadow-xl mt-2 border border-slate-200/50 dark:border-slate-800/50">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 onClick={() => setIsOpen(false)}
                 className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
               >
                 {link.name}
               </a>
             ))}
           </div>
         </div>
       )}
     </nav>
  );
};

export default Navbar;
