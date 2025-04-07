/**
 * TaskEditForm.jsx - Task Edit Component
 *
 * This component provides a modal form for editing an existing task's description.
 *
 * Features:
 * - Modal overlay for focused editing
 * - Pre-filled input with current task description
 * - Form validation to prevent empty submissions
 * - Close button and click-outside functionality to cancel
 * - Keyboard accessibility (Escape to close, Enter to submit)
 * - PropTypes validation for type checking
 */

import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaSave, FaTimes } from "react-icons/fa";

/**
 * TaskEditForm Component
 *
 * @param {Object} props - Component props
 * @param {number} props.taskId - ID of the task being edited
 * @param {string} props.currentDesc - Current description of the task
 * @param {Function} props.onSave - Function to call when saving changes
 * @param {Function} props.onCancel - Function to call when canceling edit
 * @returns {JSX.Element} A modal form for editing a task
 */
const TaskEditForm = ({ taskId, currentDesc, onSave, onCancel }) => {
  // State to track the edited description
  const [description, setDescription] = useState(currentDesc);

  // Reference to the input element for focus management
  const inputRef = useRef(null);

  // Focus the input field when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      // Select all text for easy editing
      inputRef.current.select();
    }

    // Add event listener for escape key to cancel
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onCancel]);

  /**
   * Handle form submission
   * @param {Event} e - The submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input is not empty
    const trimmedDesc = description.trim();
    if (!trimmedDesc) return;

    // Save changes and close the form
    onSave(taskId, trimmedDesc);
  };

  // Handler for clicks on the modal backdrop to close
  const handleBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop, not the form
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    // Modal backdrop with semi-transparent overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      {/* Modal content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Edit Task</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        {/* Edit form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="taskDescription"
              className="block text-gray-300 mb-2"
            >
              Task Description
            </label>
            <input
              ref={inputRef}
              id="taskDescription"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description"
            />
          </div>

          {/* Form action buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <FaSave /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// PropTypes for type checking and documentation
TaskEditForm.propTypes = {
  taskId: PropTypes.number.isRequired,
  currentDesc: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TaskEditForm;
