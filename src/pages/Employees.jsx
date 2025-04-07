import EmployeeCard from "../components/EmployeeCard";

const mockEmployees = [
  {
    id: "1",
    name: "Joey Gabiana",
    email: "joey@example.com",
    company: "NVSU",
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

const Employees = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-white mb-8">Employees</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {mockEmployees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>
    </div>
  );
};

export default Employees;
