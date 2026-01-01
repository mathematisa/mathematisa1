import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Play, Code, DollarSign, Settings } from 'lucide-react';

export function DashboardSidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: Play, label: 'Animations', path: '/dashboard/animations' },
    { icon: Code, label: 'Code Products', path: '/dashboard/products' },
    { icon: DollarSign, label: 'Earnings', path: '/dashboard/earnings' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-black border-r border-[#FC2490]/30 min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#FC2490] to-[#F494D8] bg-clip-text text-transparent">
          Creator Dashboard
        </h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white'
                  : 'text-gray-400 hover:bg-[#FC2490]/10 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
