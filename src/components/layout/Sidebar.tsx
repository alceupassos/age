import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserRound, 
  FileText, 
  ShieldCheck, 
  QrCode,
  Pill,
  Calendar,
  Heart,
  BarChart3,
  MessageCircleQuestion,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Key,
  FlaskConical,
  TerminalSquare,
  Dna // Added Dna icon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavItem {
  nameKey: string; 
  path: string;
  icon: JSX.Element;
  isLiteral?: boolean; 
  isNew?: boolean; // Flag for special styling if needed
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const [navItems] = useState<NavItem[]>([
    { nameKey: 'nav.dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { nameKey: 'nav.profile', path: '/profile', icon: <UserRound size={20} /> },
    { nameKey: 'nav.records', path: '/records', icon: <FileText size={20} /> },
    { nameKey: 'nav.medications', path: '/medications', icon: <Pill size={20} /> },
    { nameKey: 'nav.appointments', path: '/appointments', icon: <Calendar size={20} /> },
    { nameKey: 'nav.metrics', path: '/metrics', icon: <BarChart3 size={20} /> },
    { nameKey: 'nav.labexams', path: '/labexams', icon: <FlaskConical size={20} /> },
    { nameKey: 'Dados Genéticos', path: '/genetic-data', icon: <Dna size={20} className="text-purple-500"/>, isLiteral: true, isNew: true }, // New Genetic Data item
    { nameKey: 'nav.access', path: '/access', icon: <ShieldCheck size={20} /> },
    { nameKey: 'nav.emergency', path: '/emergency', icon: <QrCode size={20} /> },
  ]);
  
  const supportItems: NavItem[] = [
    { nameKey: 'nav.help', path: '/help', icon: <HelpCircle size={20} /> },
    { nameKey: 'nav.support', path: '/support', icon: <MessageCircleQuestion size={20} /> },
    { nameKey: 'nav.manage', path: '/manage-access', icon: <Key size={20} /> },
    { nameKey: 'Técnica', path: '/technical-details', icon: <TerminalSquare size={20} />, isLiteral: true },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 md:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 h-screen pt-20 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "md:w-64 w-[250px]"
        )}
      >
        {/* Toggle button */}
        <button 
          onClick={toggleSidebar}
          className="absolute -right-8 top-24 bg-white dark:bg-gray-900 p-1.5 rounded-r border-y border-r border-gray-200 dark:border-gray-800 hidden md:flex"
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
        
        <div className="h-full flex flex-col px-3 overflow-y-auto">
          <div className="space-y-1 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg group transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  item.isNew && location.pathname !== item.path ? "text-purple-600 dark:text-purple-400" : "" // Special color for new item if not active
                )}
              >
                <span className={cn(
                  "inline-flex items-center justify-center mr-3",
                  location.pathname === item.path
                    ? "text-primary" // Active icon color
                    : item.isNew ? "text-purple-500" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" // New item icon color or default
                )}>
                  {item.icon}
                </span>
                <span className={cn("truncate", item.isNew && location.pathname !== item.path ? "font-semibold" : "")}>
                  {item.isLiteral ? item.nameKey : t(item.nameKey)}
                </span>
                
                {location.pathname === item.path && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="mt-4 px-3">
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-center text-primary">
                <Heart size={18} className="mr-2" />
                <h3 className="text-sm font-medium">Status de Saúde</h3>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-medical h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <span className="ml-2 text-xs font-medium">87%</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Atualizado: Hoje, 9:45
              </div>
            </div>
          </div>
          
          <div className="mt-auto pb-6 pt-4 space-y-1">
            {supportItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg group transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <span className={cn(
                  "inline-flex items-center justify-center mr-3",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                )}>
                  {item.icon}
                </span>
                <span className="truncate">{item.isLiteral ? item.nameKey : t(item.nameKey)}</span>
              </Link>
            ))}
            
            <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="inline-flex items-center justify-center mr-3 text-gray-500 dark:text-gray-400">
                <LogOut size={20} />
              </span>
              <span className="truncate">{t('nav.logout')}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
