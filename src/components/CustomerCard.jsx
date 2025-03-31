import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomerCard = ({ id, name, email, company }) => {
  return (
    <Link to={`/customers/${id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{company}</p>
        <p className="text-gray-500 mt-1">{email}</p>
      </div>
    </Link>
  );
};

CustomerCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default CustomerCard; 