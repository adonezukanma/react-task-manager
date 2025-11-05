import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!taskName.trim()) {
      newErrors.name = 'Task name is required';
    }
    if (!taskDescription.trim()) {
      newErrors.description = 'Task description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add or update task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === editingId 
          ? { ...task, name: taskName, description: taskDescription }
          : task
      ));
      setEditingId(null);
    } else {
      // Add new task
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }

    // Reset form
    setTaskName('');
    setTaskDescription('');
    setErrors({});
  };

  // Edit task
  const handleEdit = (task) => {
    setTaskName(task.name);
    setTaskDescription(task.description);
    setEditingId(task.id);
    setErrors({});
  };

  // Delete task
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setTaskName('');
    setTaskDescription('');
    setErrors({});
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Task Manager</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      <div className="container">
        <div className="task-form-container">
          <h2>{editingId ? 'Edit Task' : 'Add New Task'}</h2>
          <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label htmlFor="taskName">Task Name</label>
              <input
                type="text"
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className={errors.name ? 'error' : ''}
                placeholder="Enter task name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="taskDescription">Task Description</label>
              <textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className={errors.description ? 'error' : ''}
                placeholder="Enter task description"
                rows="4"
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Task' : 'Add Task'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancelEdit} className="btn btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="task-list-container">
          <h2>Tasks ({tasks.length})</h2>
          {tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add your first task above!</p>
          ) : (
            <ul className="task-list">
              {tasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <div className="task-checkbox">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task.id)}
                        id={`task-${task.id}`}
                      />
                      <label htmlFor={`task-${task.id}`}></label>
                    </div>
                    <div className="task-details">
                      <h3>{task.name}</h3>
                      <p>{task.description}</p>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button 
                      onClick={() => handleEdit(task)} 
                      className="btn btn-edit"
                      disabled={task.completed}
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(task.id)} 
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
