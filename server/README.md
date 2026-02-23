### Setup Instructions
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file with your `MONGODB_URL` (see notes below).
4. Start the server: `npm run dev` (uses tsx/ts-node)
5. The API is available at `http://localhost:8000`

### MongoDB Connection Notes
- This project uses **MongoDB Atlas**.
- Ensure your IP is whitelisted in the Atlas Network Access panel (set to `0.0.0.0/0` for testing).
- Provide the connection string in the `.env` file as `MONGODB_URL`.
- Sample URL - "mongodb+srv://<USERNAME>:<PASSWORD>@typebcluster.hanmdwh.mongodb.net/?appName=typebcluster"

### Assumptions & Limitations
- Requires Node.js v20+ for ESM support.
- CORS is configured to allow requests from `http://localhost:5173`.
