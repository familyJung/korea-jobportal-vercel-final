import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as apiRoutes } from "../server/routes.js";
import { initializeDatabase } from "../server/initializeData.js";
import { startPeriodicScraping } from "../server/scraper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// CORS configuration  
app.use((req, res, next) => {
  const origin = process.env.NODE_ENV === 'production' 
    ? 'https://korea-jobportal.co.kr'
    : 'http://localhost:5173';
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist/public');
  app.use(express.static(distPath));
  
  app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'));
    }
  });
}

// Initialize database and start scraping
let initialized = false;

const initialize = async () => {
  if (!initialized) {
    console.log('🚀 Starting database initialization...');
    await initializeDatabase();
    console.log('✅ Database initialization completed');
    
    if (process.env.NODE_ENV === 'production') {
      console.log('🕐 Starting periodic scraping...');
      startPeriodicScraping();
    }
    
    initialized = true;
  }
};

// Initialize on first request
app.use(async (req, res, next) => {
  if (!initialized) {
    await initialize();
  }
  next();
});

export default app;