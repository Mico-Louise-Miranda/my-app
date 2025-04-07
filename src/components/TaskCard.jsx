/**
 * TaskCard.jsx - Task Display Component
 *
 * This component displays a single task's information and provides functionality
 * to toggle its completion status, edit its description, and delete it.
 *
 * Features:
 * - Visual representation of task completion status
 * - Toggle button for marking tasks as done/undone
 * - Edit button to modify task description
 * - Delete button to remove the task
 * - Hover effects for better user experience
 * - PropTypes validation for type checking
 */

import PropTypes from "prop-types";
import { FaCheck, FaTrash, FaPencilAlt } from "react-icons/fa";

/**
 * TaskCard Component
 *
 * @param {Object} props - Component props
 * @param {number} props.id - Unique identifier for the task
 * @param {string} props.desc - Task description
 * @param {boolean} props.done - Whether the task is completed
 * @param {Function} props.onToggle - Function to toggle task completion status
 * @param {Function} props.onDelete - Function to delete the task
 * @param {Function} props.onEdit - Function to edit the task
 * @returns {JSX.Element} A card displaying task information with action buttons
 */
const TaskCard = ({ id, desc, done, onToggle, onDelete, onEdit }) => {
  return (
    <div
      className={`bg-black p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg border-l-4 ${
        done ? "border-green-500" : "border-yellow-500"
      }`}
    >
      {/* Task description with styling based on completion status */}
      <div className="flex justify-between mb-4">
        <h3
          className={`text-lg font-semibold ${
            done ? "text-gray-500 line-through" : "text-gray-300"
          }`}
        >
          {desc}
        </h3>
      </div>

      {/* Task status indicator */}
      <p
        className={`text-sm ${
          done ? "text-green-500" : "text-yellow-500"
        } mb-4`}
      >
        {done ? "Completed" : "Pending"}
      </p>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4">
        {/* Toggle task status button */}
        <button
          onClick={() => onToggle(id)}
          className={`flex items-center justify-center w-9 h-9 rounded-md text-white ${
            done
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-green-700 hover:bg-green-600"
          }`}
          aria-label={done ? "Mark as undone" : "Mark as done"}
        >
          <FaCheck className={done ? "opacity-50" : "opacity-100"} />
        </button>

        {/* Edit task button */}
        <button
          onClick={() => onEdit(id, desc)}
          className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-700 hover:bg-blue-600 text-white"
          aria-label="Edit task"
        >
          <FaPencilAlt />
        </button>

        {/* Delete task button */}
        <button
          onClick={() => onDelete(id)}
          className="flex items-center justify-center w-9 h-9 rounded-md bg-red-700 hover:bg-red-600 text-white"
          aria-label="Delete task"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

// PropTypes for type checking and documentation
TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskCard;
