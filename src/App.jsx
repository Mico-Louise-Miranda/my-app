import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Details from './pages/Details';

const App = () => {
  return (
    <Router>
      <div className="flex w-full min-h-screen">
        <div className="fixed left-0 h-full z-10">
          <Sidebar />
        </div>
        <div className="w-full ml-64">
          <div className="min-h-screen bg-green-400">
            <div className="w-full h-full px-8 py-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/customers/:id" element={<Details />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
