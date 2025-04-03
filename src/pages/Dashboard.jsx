import { FaUsers, FaChartLine, FaCalendar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaUsers className="text-3xl text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300">
                Total Customers
              </h3>
              <p className="text-2xl font-bold text-blue-600">150</p>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaChartLine className="text-3xl text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300">Growth</h3>
              <p className="text-2xl font-bold text-green-600">+12%</p>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaCalendar className="text-3xl text-purple-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300">
                Active Plans
              </h3>
              <p className="text-2xl font-bold text-purple-600">85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
