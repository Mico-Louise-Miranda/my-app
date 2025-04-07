import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmployeeCard = ({ id, name, email, company }) => {
  return (
    <Link to={`/employees/${id}`} className="block">
      <div className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-300">{name}</h3>
        <p className="text-gray-400 mt-2">{company}</p>
        <p className="text-gray-500 mt-1">{email}</p>
      </div>
    </Link>
  );
};

EmployeeCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default EmployeeCard;
