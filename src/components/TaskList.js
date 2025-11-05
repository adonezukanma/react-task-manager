import React from 'react';

const TaskList = ({ tasks, deleteTask, startEdit, toggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <div className="task-header">
                <h3>{task.name}</h3>
                <span className="task-status">
                  {task.completed ? '✓ Completed' : 'Pending'}
                </span>
              </div>
              <p className="task-description">{task.description}</p>
              <div className="task-meta">
                <span className="task-date">
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="task-actions">
              <button
                onClick={() => toggleComplete(task.id)}
                className="btn-toggle"
                title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {task.completed ? '↺' : '✓'}
              </button>
              <button
                onClick={() => startEdit(task)}
                className="btn-edit"
                title="Edit task"
              >
                ✎
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn-delete"
                title="Delete task"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
