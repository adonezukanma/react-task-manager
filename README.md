# React Task Manager

A simple yet powerful task management application built with React that allows users to add, edit, and delete tasks. The application features **localStorage persistence**, ensuring your tasks are saved even after restarting the application.

## 🌟 Features

- ✅ **Add new tasks** with name and description fields
- ✏️ **Edit existing tasks** with inline editing capability
- 🗑️ **Delete tasks** with a single click
- ✔️ **Mark tasks as complete/incomplete** with toggle functionality
- 💾 **localStorage persistence** - Tasks are automatically saved and persist across browser sessions
- ✨ **Form validation** - Ensures task names are required before submission
- 📱 **Responsive design** - Works seamlessly on desktop and mobile devices
- 🎨 **Clean and intuitive UI** - Modern styling with CSS

## 🏗️ How the App Works

### State Management
The application uses **React Hooks** for state management:
- `useState` manages tasks array and editing state
- `useEffect` handles localStorage operations:
  - **Loading**: On component mount, tasks are loaded from localStorage
  - **Saving**: Whenever tasks change, they're automatically saved to localStorage

### Components Architecture

1. **App.js** (Main Component)
   - Central state management for all tasks
   - Handles CRUD operations: add, update, delete, toggle completion
   - Manages localStorage synchronization
   - Coordinates between TaskForm and TaskList components

2. **TaskForm.js** (Form Component)
   - Form for adding new tasks or editing existing ones
   - **Basic form validation**: Ensures task name is not empty
   - Controlled components for name and description inputs
   - Switches between "Add" and "Update" modes based on editing state

3. **TaskList.js** (List Component)
   - Displays all tasks in a responsive list
   - Each task shows: name, description, completion status, and action buttons
   - Provides edit and delete buttons for each task
   - Checkbox for toggling task completion

### Data Persistence with localStorage

The app uses the browser's **localStorage API** to persist data:

```javascript
// Loading tasks on mount
useEffect(() => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    setTasks(JSON.parse(storedTasks));
  }
}, []);

// Saving tasks when they change
useEffect(() => {
  if (tasks.length > 0 || localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}, [tasks]);
```

**Benefits:**
- No server required - works completely offline
- Fast and responsive - data is stored locally
- Persists across browser sessions
- Automatically synced with state changes

### Form Validation

Basic form validation is implemented in the TaskForm component:
- **Required field validation**: Task name must not be empty
- **User feedback**: Alert messages for validation errors
- **Trim whitespace**: Removes leading/trailing spaces from inputs

## 📁 Project Structure

```
react-task-manager/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/             # Reusable React components
│   │   ├── TaskForm.js        # Form component for adding/editing tasks
│   │   └── TaskList.js        # Component for displaying task list
│   ├── pages/                  # Page components (for future expansion)
│   ├── App.js                  # Main App component with state management
│   ├── App.css                 # App-specific styles
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── package.json                # Project dependencies and scripts
├── .gitignore                  # Git ignore file
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher) or **yarn**

You can verify your installations by running:

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/adonezukanma/react-task-manager.git
```

2. **Navigate to the project directory:**

```bash
cd react-task-manager
```

3. **Install dependencies:**

```bash
npm install
```

or if you're using yarn:

```bash
yarn install
```

4. **Start the development server:**

```bash
npm start
```

or with yarn:

```bash
yarn start
```

5. **Open your browser** and navigate to `http://localhost:3000`

The app will automatically reload when you make changes to the code.

## 📝 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Ejects from Create React App (one-way operation, use with caution)

## 🛠️ Technologies Used

- **React** (v18+) - JavaScript library for building user interfaces
- **Create React App** - Tool for setting up React projects with zero configuration
- **localStorage API** - Browser API for client-side data persistence
- **CSS3** - Modern styling with responsive design
- **React Hooks** - useState, useEffect for state and lifecycle management

## 🔮 Optional Features & Future Enhancements

### Expandable Options

The application can be enhanced with the following optional features:

#### 1. **Redux State Management** (Optional)
- Implement Redux for centralized state management
- Better for scaling to more complex features
- Action creators and reducers for task operations

#### 2. **Search and Filter Functionality** (Optional)
- Search tasks by name or description
- Filter tasks by status (completed/incomplete)
- Sort tasks by date, name, or completion status

#### 3. **Additional Enhancements**
- Task categories and tags
- Task priority levels (high, medium, low)
- Due dates and reminders
- Dark mode theme toggle
- Backend integration with REST API
- User authentication
- IndexedDB for more robust client-side storage
- Task export/import functionality
- Drag-and-drop task reordering

## 📋 Usage Guide

### Adding a Task
1. Enter a task name (required)
2. Enter a task description (optional)
3. Click "Add Task" button

### Editing a Task
1. Click the "Edit" button on any task
2. Modify the name and/or description in the form
3. Click "Update Task" to save changes
4. Click "Cancel" to discard changes

### Completing a Task
1. Click the checkbox next to any task to mark it as complete
2. Click again to mark it as incomplete

### Deleting a Task
1. Click the "Delete" button on any task
2. The task will be immediately removed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or feedback, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Built with Create React App
- Inspired by modern task management applications
- Thanks to the React community for excellent documentation and resources

---

**Happy Task Managing! 🎉**
