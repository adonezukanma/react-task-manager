import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

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

  // Add new task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      name: taskData.name,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  // Update existing task
  const updateTask = (id, updatedData) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, ...updatedData }
        : task
    ));
    setEditingTask(null);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  // Start editing a task
  const startEdit = (task) => {
    setEditingTask(task);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Task Manager</h1>
        <p>Manage your tasks efficiently</p>
      </header>
      <div className="container">
        <div className="task-form-container">
          <TaskForm 
            addTask={addTask}
            editingTask={editingTask}
            updateTask={updateTask}
            cancelEdit={cancelEdit}
          />
        </div>
        <div className="task-list-container">
          <TaskList 
            tasks={tasks}
            deleteTask={deleteTask}
            startEdit={startEdit}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
