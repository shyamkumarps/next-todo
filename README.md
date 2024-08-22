# Todo App

This is a simple Todo application built with Next.js, Firebase as DB, and Python FastAPI.

[![Next-Todo Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://next-todo-eta-ten.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn
- A Firebase account for authentication and Firestore

### Setup and Running the Frontend

1. **Clone the Repository**

   Begin by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/shyamkumarps/next-todo.git
   ```

   Navigate into the project directory:

   ```bash
   cd next-todo
   ```

2. **Install Frontend Dependencies**

   Install the required npm packages:

   ```bash
   npm install
   ```

   Alternatively, if you prefer to use yarn:

   ```bash
   yarn install
   ```

3. **Run the Development Server**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   Or, if using yarn:

   ```bash
   yarn dev
   ```

This command will start the server, and you should be able to access the app at http://localhost:3000.

### Additional Notes

- Backend: Ensure your Python environment is active when working on the FastAPI backend.
- Environment Variables: Ensure your Firebase credentials are correctly filled in the .env.local file to enable proper communication between your app and Firebase.
- Hot Reloading: The development server supports hot reloading, so changes to your code will automatically refresh the app.

### Deployment

For deploying the frontend:

Vercel: Next.js applications are seamlessly deployable on Vercel. Follow Vercel's deployment guide to deploy your Next.js application.
