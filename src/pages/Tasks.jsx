/**
 * Tasks.jsx - Task Manager Page
 *
 * This component displays a list of all tasks and provides functionality
 * to add new tasks and toggle their completion status.
 *
 * Features:
 * - Task creation form
 * - Responsive grid layout for task cards
 * - State management for tasks (add, toggle status)
 * - Task filtering capability
 * - Visual indicators for task status
 */

import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { FaSearch } from "react-icons/fa";

/**
 * Mock task data
 * In a real application, this would typically come from an API or Redux store
 * Each task has an id (number), desc (string), and done (boolean) status
 */
const mockTasks = [
  { id: 1, desc: "Hello, Mico Miranda", done: false },
  { id: 2, desc: "Pay the bills", done: true },
  { id: 3, desc: "Update the database", done: false },
  { id: 4, desc: "Schedule team meeting", done: false },
  { id: 5, desc: "Review for an upcoming quiz", done: true },
  { id: 6, desc: "I've changed my password", done: false },
];

/**
 * Tasks Component
 *
 * Renders a task management page with task creation form and task cards
 * @returns {JSX.Element} The tasks page
 */
const Tasks = () => {
  // State for tasks
  const [tasks, setTasks] = useState(mockTasks);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

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
    </div>
  );
};

export default Tasks;
