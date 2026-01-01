import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { TrendingUp, DollarSign, Package, Upload } from 'lucide-react';

const stats = [
  { label: 'Total Sales', value: '1,234', icon: Package, color: 'from-blue-500 to-cyan-500' },
  { label: 'Monthly Revenue', value: '$12,450', icon: DollarSign, color: 'from-[#FC2490] to-[#F494D8]' },
  { label: 'Top Selling Code', value: 'Matrix Pack', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  { label: 'Total Uploads', value: '48', icon: Upload, color: 'from-green-500 to-emerald-500' },
];

const recentSales = [
  { product: 'Calculus Integration Animation', price: '$29', date: '2 hours ago' },
  { product: 'Pythagorean Theorem Proof', price: '$19', date: '5 hours ago' },
  { product: 'Matrix Transformation Pack', price: '$39', date: '1 day ago' },
  { product: 'Trigonometric Functions', price: '$24', date: '2 days ago' },
];

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black pt-16">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Overview</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Recent Sales</h2>
              <div className="space-y-4">
                {recentSales.map((sale, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                    <div>
                      <div className="text-white text-sm">{sale.product}</div>
                      <div className="text-gray-400 text-xs">{sale.date}</div>
                    </div>
                    <div className="text-[#FC2490] font-semibold">{sale.price}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-[#FC2490]/30 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link to="/dashboard/create">
                  <button className="w-full py-3 bg-gradient-to-r from-[#FC2490] to-[#F494D8] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#FC2490]/50 transition-shadow">
                    Create New Post
                  </button>
                </Link>
                <button className="w-full py-3 bg-gray-800 border border-[#FC2490]/30 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  View Analytics
                </button>
                <button className="w-full py-3 bg-gray-800 border border-[#FC2490]/30 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  Manage Products
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}