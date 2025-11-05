import React, { useState } from 'react';

const TaskForm = ({ addTask, editingTask, updateTask, cancelEdit }) => {
  const [name, setName] = useState(editingTask ? editingTask.name : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');
  const [errors, setErrors] = useState({});

  // Update form when editingTask changes
  React.useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editingTask]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Task name is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Task description is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      if (editingTask) {
        updateTask(editingTask.id, { name, description });
      } else {
        addTask({ name, description });
      }
      setName('');
      setDescription('');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
    setErrors({});
    if (cancelEdit) cancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <div className="form-group">
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task name"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
          id="taskDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows="4"
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-message">{errors.description}</span>}
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn-primary">
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button type="button" onClick={handleCancel} className="btn-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
