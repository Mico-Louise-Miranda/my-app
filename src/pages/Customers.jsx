import CustomerCard from '../components/CustomerCard';

const mockCustomers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', company: 'Tech Corp' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', company: 'Design Co' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com', company: 'Marketing Inc' },
  { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', company: 'Dev Solutions' },
];

const Customers = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Customers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {mockCustomers.map((customer) => (
          <CustomerCard key={customer.id} {...customer} />
        ))}
      </div>
    </div>
  );
};

export default Customers; 