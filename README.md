This is a full-stack mono-repo containing the frontend and backend components for the Todo App.

📂 Project Structure

- /client: React frontend built with Vite.

- /server: Node.js/Express backend using TypeScript and MongoDB Atlas.

🚀 Quick Start

1. Prerequisites
   - Node.js (v20+ recommended for ESM support)
   - A MongoDB Atlas Cluster URL

2. Environment Setup

   Create a .env file in the /server directory:

   ```
   PORT=8000
   MONGODB_URL=your_mongodb_atlas_connection_string
   ```

3. Installation & Running

   From the root directory, run the following:

   Start Backend:

   ```
   cd server
   npm install
   npm run dev
   ```

   Start Frontend:

   ```
   cd client
   npm install
   npm run dev
   ```

🛠 Features & Architecture

- Frontend: Built with React and Vite for optimized development. Uses SCSS Modules for scoped styling.

- Backend: REST API built with Express and TypeScript.

- Database: MongoDB Atlas for cloud data storage.

- CORS: Configured to allow cross-origin requests from the Vite dev server.
