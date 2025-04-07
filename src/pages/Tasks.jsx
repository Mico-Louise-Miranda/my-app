/**
 * Tasks.jsx - Task Manager Page
 *
 * This component displays a list of all tasks and provides functionality
 * to add, edit, delete, and toggle tasks.
 *
 * Features:
 * - Task creation form
 * - Task editing with modal form
 * - Task deletion with confirmation
 * - Task status toggling
 * - Search functionality
 * - Responsive grid layout for task cards
 * - Visual indicators for task status
 */

import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import TaskEditForm from "../components/TaskEditForm";
import { FaSearch, FaExclamationTriangle } from "react-icons/fa";

/**
 * Mock task data
 * In a real application, this would typically come from an API or Redux store
 * Each task has an id (number), desc (string), and done (boolean) status
 */
const mockTasks = [
  { id: 1, desc: "Call new customer leads", done: false },
  { id: 2, desc: "Prepare quarterly sales report", done: true },
  { id: 3, desc: "Update client database", done: false },
  { id: 4, desc: "Schedule team meeting", done: false },
  { id: 5, desc: "Review marketing materials", done: true },
  { id: 6, desc: "Follow up with potential clients", done: false },
];

/**
 * Tasks Component
 *
 * Renders a task management page with task creation form and task cards
 * Provides full CRUD functionality for tasks
 * @returns {JSX.Element} The tasks page
 */
const Tasks = () => {
  // State for tasks
  const [tasks, setTasks] = useState(mockTasks);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State for task being edited
  const [editingTask, setEditingTask] = useState(null);

  // State for delete confirmation
  const [deletingTask, setDeletingTask] = useState(null);

  /**
   * Add a new task to the task list
   * @param {string} description - The task description
   */
  const handleAddTask = (description) => {
    // Generate a new ID by finding the maximum current ID and adding 1
    const newId = Math.max(0, ...tasks.map((task) => task.id)) + 1;

    // Create a new task object
    const newTask = {
      id: newId,
      desc: description,
      done: false,
    };

    // Add the new task to the beginning of the tasks array
    setTasks([newTask, ...tasks]);
  };

  /**
   * Toggle the completion status of a task
   * @param {number} id - The ID of the task to toggle
   */
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  /**
   * Set up a task for editing
   * @param {number} id - The ID of the task to edit
   * @param {string} description - The current description of the task
   */
  const handleEditStart = (id, description) => {
    setEditingTask({ id, desc: description });
  };

  /**
   * Save changes to an edited task
   * @param {number} id - The ID of the task to save
   * @param {string} newDescription - The updated task description
   */
  const handleEditSave = (id, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, desc: newDescription } : task
      )
    );
    setEditingTask(null);
  };

  /**
   * Cancel the current edit operation
   */
  const handleEditCancel = () => {
    setEditingTask(null);
  };

  /**
   * Set up a task for deletion (show confirmation)
   * @param {number} id - The ID of the task to delete
   */
  const handleDeleteStart = (id) => {
    setDeletingTask(id);
  };

  /**
   * Confirm and perform task deletion
   */
  const handleDeleteConfirm = () => {
    if (deletingTask) {
      setTasks(tasks.filter((task) => task.id !== deletingTask));
      setDeletingTask(null);
    }
  };

  /**
   * Cancel the current delete operation
   */
  const handleDeleteCancel = () => {
    setDeletingTask(null);
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-white mb-8">Tasks</h1>

      {/* Task creation form */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Search input */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full py-3 px-4 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Task cards grid - responsive layout with breakpoints for different screen sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredTasks.length > 0 ? (
          // Map over each task in the array to create a TaskCard component
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              desc={task.desc}
              done={task.done}
              onToggle={handleToggleTask}
              onDelete={handleDeleteStart}
              onEdit={handleEditStart}
            />
          ))
        ) : (
          // Display a message when no tasks match the search criteria
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              {searchTerm
                ? "No tasks match your search."
                : "No tasks yet. Add one above!"}
            </p>
          </div>
        )}
      </div>

      {/* Edit task modal - shown only when editing a task */}
      {editingTask && (
        <TaskEditForm
          taskId={editingTask.id}
          currentDesc={editingTask.desc}
          onSave={handleEditSave}
          onCancel={handleEditCancel}
        />
      )}

      {/* Delete confirmation modal - shown only when deleting a task */}
      {deletingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center gap-3 text-red-500 mb-4">
              <FaExclamationTriangle className="text-2xl" />
              <h2 className="text-xl font-bold">Delete Task</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
