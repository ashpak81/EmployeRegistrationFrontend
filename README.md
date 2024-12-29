
# React Frontend Application

This is the frontend part of the Employee Registration Application, built using React.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- **Node Version Manager (NVM)**: To manage Node.js versions.
- **Node.js v20**: Install using NVM.
- **npm (Node Package Manager)**: Comes bundled with Node.js.

---

## Setup Instructions

Follow these steps to set up and run the project:

### Step 1: Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/EmployeRegistration-Application.git
   cd EmployeRegistration-Application/frontend
   ```

---

### Step 2: Use NVM to Set Node.js Version

1. Verify that NVM is installed:
   ```bash
   nvm --version
   ```

2. Install Node.js v20 (if not already installed):
   ```bash
   nvm install 20
   ```

3. Use Node.js v20 for the project:
   ```bash
   nvm use 20
   ```

---

### Step 3: Install Dependencies

1. Install project dependencies using `npm`:
   ```bash
   npm install
   ```

---

### Step 4: Start the Development Server

1. Start the React development server:
   ```bash
   npm start
   ```

2. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Build for Production

To build the project for production, run:
```bash
npm run build
```
The output will be located in the `build/` directory.

---

## Scripts

Below are the common scripts used in this project:

- `npm start`: Runs the development server.
- `npm run build`: Builds the project for production.
- `npm test`: Runs the tests (if implemented).

---

## Project Structure

The main directories and files in this project:

```
frontend/
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Application pages
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point
├── package.json     # Project metadata and dependencies
└── README.md        # Project instructions
```

---

## Troubleshooting

If you encounter any issues:

- Ensure Node.js version is set to 20 using `nvm use 20`.
- Run `npm install` to ensure all dependencies are installed.
- Verify the backend service is running for API calls.

---

## Contribution

Feel free to open issues or create pull requests for any improvements or bug fixes.

---
