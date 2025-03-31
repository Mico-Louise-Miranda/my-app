import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const mockCustomers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', company: 'Tech Corp', role: 'CEO', phone: '(555) 123-4567', address: '123 Business St, Tech City' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', company: 'Design Co', role: 'Lead Designer', phone: '(555) 234-5678', address: '456 Creative Ave, Design Town' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', company: 'Marketing Inc', role: 'Marketing Director', phone: '(555) 345-6789', address: '789 Market Rd, Ad City' },
  { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', company: 'Dev Solutions', role: 'CTO', phone: '(555) 456-7890', address: '321 Code Lane, Dev Valley' },
];

const Details = () => {
  const { id } = useParams();
  const customer = mockCustomers.find(c => c.id === id);

  if (!customer) {
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold text-red-600">Customer not found</h1>
        <Link to="/customers" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">
          Back to Customers
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link to="/customers" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 mb-8">
        <FaArrowLeft /> Back to Customers
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8 w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{customer.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> {customer.email}</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> {customer.phone}</p>
            <p className="text-gray-600 mb-2"><strong>Address:</strong> {customer.address}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Company Information</h2>
            <p className="text-gray-600 mb-2"><strong>Company:</strong> {customer.company}</p>
            <p className="text-gray-600 mb-2"><strong>Role:</strong> {customer.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details; 