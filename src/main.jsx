import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';
import Login from './pages/Login';
import AppRouter from './routes/AppRouter';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
