import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import todoroutes from './routes/todo.routes.js';
import path from "path";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());



// Mount todo routes
app.use('/api/todos', todoroutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV ==="production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Connect to DB and then start server
connectDB().then(() => {
  app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
