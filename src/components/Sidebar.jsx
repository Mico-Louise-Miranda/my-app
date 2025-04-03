/**
 * Sidebar.jsx - Navigation Component
 *
 * This component renders the main navigation sidebar of the application.
 * It provides links to different sections of the application using React Router's Link component.
 *
 * Features:
 * - Fixed width sidebar with dark styling
 * - Navigation links with icons from react-icons
 * - Hover effects for better user experience
 * - Consistent spacing and styling throughout
 */

import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaTasks } from "react-icons/fa";

/**
 * Sidebar Component
 *
 * Renders the application's main navigation sidebar with links to different pages
 * @returns {JSX.Element} The sidebar navigation component
 */
const Sidebar = () => {
  return (
    // Main sidebar container with fixed width and full height
    <div className="w-64 h-full bg-green-500 text-gray-900 font-bold ">
      <div className="p-6">
        {/* Application title/logo */}
        <h1 className="text-2xl font-bold mb-8">CRM System</h1>
        <nav>
          <ul className="space-y-4">
            {/* Dashboard navigation link */}
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaHome className="text-xl" /> Dashboard
              </Link>
            </li>
            {/* Customers navigation link */}
            <li>
              <Link
                to="/customers"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaUsers className="text-xl" /> Customers
              </Link>
            </li>
            {/* Task Manager navigation link */}
            <li>
              <Link
                to="/tasks"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaTasks className="text-xl" /> Task Manager
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
