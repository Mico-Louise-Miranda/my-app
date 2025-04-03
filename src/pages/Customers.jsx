import CustomerCard from "../components/CustomerCard";

const mockCustomers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    company: "Tech Corp",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane@example.com",
    company: "Design Co",
  },
  {
    id: "3",
    name: "Mike Tyson",
    email: "mike@example.com",
    company: "Marketing Inc",
  },
  { id: "4", name: "Lebron James", email: "lbj@example.com", company: "NBA" },
];

const Customers = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white mb-8">Customers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {mockCustomers.map((customer) => (
          <CustomerCard key={customer.id} {...customer} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
