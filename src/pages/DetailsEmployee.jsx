import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const mockEmployees = [
  {
    id: "1",
    name: "Joey Gabiana",
    email: "john@example.com",
    company: "NVSU",
    role: "CEO",
    phone: "09090909090",
    address: "123 Business St, Tech City",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    company: "Design Co",
    role: "Lead Designer",
    phone: "09999999999",
    address: "456 Creative Ave, Design Town",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    company: "Marketing Inc",
    role: "Marketing Director",
    phone: "09123456789",
    address: "789 Market Rd, Ad City",
  },
  {
    id: "4",
    name: "Lebron James",
    email: "lbj@example.com",
    company: "NBA",
    role: "NBA player",
    phone: "09090909090",
    address: "321 Code Lane, Dev Valley",
  },
];

const DetailsEmployee = () => {
  const { id } = useParams();
  const employee = mockEmployees.find((e) => e.id === id);

  if (!employee) {
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold text-red-600">Employee not found</h1>
        <Link
          to="/employees"
          className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
        >
          Back to Employees
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Link
        to="/employees"
        className="flex items-center gap-2 text-blue-500 text-lg font-semibold hover:text-blue-700 mb-8"
      >
        <FaArrowLeft /> Back to Employees
      </Link>

      <div className="bg-black rounded-lg shadow-md p-8 w-full border-2 border-gray-900">
        <h1 className="text-3xl font-bold text-gray-400 mb-8">
          {employee.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-500 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-500 mb-2">
              <strong>Email:</strong> {employee.email}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Phone:</strong> {employee.phone}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Address:</strong> {employee.address}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-500 mb-4">
              Company Information
            </h2>
            <p className="text-gray-500 mb-2">
              <strong>Company:</strong> {employee.company}
            </p>
            <p className="text-gray-500 mb-2">
              <strong>Role:</strong> {employee.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEmployee;
