/**
 * TaskCard.jsx - Task Information Card Component
 *
 * This reusable component displays a task's information in a card format.
 * It's used in the Tasks page to display multiple task cards in a grid.
 * The card shows task description and completion status.
 *
 * Features:
 * - Visual representation of task completion status
 * - Toggle button to mark tasks as done/undone
 * - Visual hierarchy using different text colors
 * - Hover effect with shadow transition
 * - PropTypes validation for type checking
 */

import PropTypes from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";

/**
 * TaskCard Component
 *
 * @param {Object} props - Component props
 * @param {number} props.id - Unique identifier for the task
 * @param {string} props.desc - Task description
 * @param {boolean} props.done - Task completion status
 * @param {Function} props.onToggle - Function to call when toggling task status
 * @returns {JSX.Element} A card displaying task information with toggle functionality
 */
const TaskCard = ({ id, desc, done, onToggle }) => {
  return (
    // Card container with styling and hover effects
    <div
      className={`bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 ${
        done ? "border-green-500" : "border-yellow-500"
      }`}
    >
      {/* Task details with visual hierarchy using text colors */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p
            className={`text-lg font-medium ${
              done ? "text-gray-400 line-through" : "text-gray-200"
            }`}
          >
            {desc}
          </p>
          <p className="text-gray-500 mt-2 text-sm">Task #{id}</p>
        </div>

        {/* Task status toggle button */}
        <button
          onClick={() => onToggle(id)}
          className={`ml-4 p-2 rounded-full ${
            done
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
          aria-label={done ? "Mark as not done" : "Mark as done"}
        >
          {done ? <FaCheck /> : <FaTimes />}
        </button>
      </div>
    </div>
  );
};

// PropTypes for type checking and documentation
TaskCard.propTypes = {
  id: PropTypes.number.isRequired, // Required task ID
  desc: PropTypes.string.isRequired, // Required task description
  done: PropTypes.bool.isRequired, // Required task completion status
  onToggle: PropTypes.func.isRequired, // Required function to toggle task status
};

export default TaskCard;
