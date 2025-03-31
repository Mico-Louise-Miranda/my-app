import { Link } from 'react-router-dom';
import { FaHome, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-black text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">CRM System</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaHome className="text-xl" /> Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/customers" 
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaUsers className="text-xl" /> Customers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
