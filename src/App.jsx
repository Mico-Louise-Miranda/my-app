/**
 * App.jsx - Main Application Component
 *
 * This component serves as the main shell for the application, handling:
 * 1. Routing configuration using React Router
 * 2. Overall page layout with a fixed sidebar and content area
 * 3. Route definitions for all pages in the application
 *
 * The component creates a two-column layout with:
 * - A fixed sidebar on the left for navigation
 * - A content area that adjusts based on the current route
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Details from "./pages/Details";
import Tasks from "./pages/Tasks";
import Employees from "./pages/Employees";
import DetailsEmployee from "./pages/DetailsEmployee";

/**
 * App Component
 *
 * Sets up the router and defines the application layout and routes
 * @returns {JSX.Element} The application shell with routing
 */
const App = () => {
  return (
    <Router>
      {/* Main container with flex layout */}
      <div className="flex w-full min-h-screen">
        {/* Fixed sidebar container positioned on the left */}
        <div className="fixed left-0 h-full z-10">
          <Sidebar />
        </div>
        {/* Main content area with margin to accommodate the sidebar */}
        <div className="w-full ml-64">
          <div className="min-h-screen bg-gray-900">
            <div className="w-full h-full px-8 py-6">
              {/* Route definitions that map URLs to specific components */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/:id" element={<Details />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/:id" element={<DetailsEmployee />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
