# React Task Manager

A React task management application with local storage persistence. Features include adding, editing, and deleting tasks with a clean, responsive interface.

## Features

- Add new tasks with name and description
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Tasks persist in local storage
- Responsive design
- Clean and intuitive UI

## Project Structure

```
react-task-manager/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── App.js             # Main App component
│   ├── App.css            # App styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher) or **yarn**

You can verify your installations by running:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/adonezukanma/react-task-manager.git
```

2. Navigate to the project directory:

```bash
cd react-task-manager
```

3. Install dependencies:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

## Running the Application

This project was bootstrapped with Create React App.

### Development Mode

To run the application in development mode:

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The application will automatically open in your default browser at [http://localhost:3000](http://localhost:3000).

The page will reload automatically when you make changes to the code.

### Production Build

To create an optimized production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The optimized files will be generated in the `build` folder.

### Running Tests

To run the test suite:

```bash
npm test
```

Or with yarn:

```bash
yarn test
```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Create React App** - Tool for setting up React projects
- **Local Storage** - Browser API for data persistence
- **CSS** - Styling

## Future Enhancements

- Task categories and tags
- Search and filter functionality
- Task priority levels
- Due dates and reminders
- Dark mode
- Redux for state management
- Backend integration with API

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue in the GitHub repository.
