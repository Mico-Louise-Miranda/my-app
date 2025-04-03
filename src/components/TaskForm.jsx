/**
 * TaskForm.jsx - Task Creation Form Component
 * 
 * This component provides a form for adding new tasks to the task list.
 * It includes a text input for the task description and a submit button.
 * 
 * Features:
 * - Controlled form input with React state
 * - Form validation (prevents empty submissions)
 * - Clean form reset after submission
 * - Responsive design that works on all screen sizes
 */

import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

/**
 * TaskForm Component
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onAddTask - Function to call when adding a new task
 * @returns {JSX.Element} A form for creating new tasks
 */
const TaskForm = ({ onAddTask }) => {
  // State for the form input
  const [taskDesc, setTaskDesc] = useState('');

  /**
   * Handle form submission
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form input
    if (taskDesc.trim() === '') return;
    
    // Call the parent component's handler with the new task description
    onAddTask(taskDesc);
    
    // Reset the form
    setTaskDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        {/* Task description input field */}
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="flex-1 py-3 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
          aria-label="Add task"
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

// PropTypes for type checking and documentation
TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired, // Required function to handle task addition
};

export default TaskForm; 