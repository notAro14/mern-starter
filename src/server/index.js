import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pingRoutes from './routes/ping';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 4001;

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(express.json({ limit: '30mb' }));
app.use(cors());

// routes
app.use('/api/ping', pingRoutes);

// serving static files in production
if (!isDev) {
  app.use('/assets', express.static(path.join(__dirname, '../../dist')));
  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
  });
}

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(
    `✨ ${isDev ? 'API' : 'Project'} is running at http://localhost:${PORT}/`
  )
);
