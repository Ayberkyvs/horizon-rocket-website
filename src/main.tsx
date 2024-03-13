import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx';
import CountdownPage from './pages/CountdownPage.tsx';

ReactDOM.createRoot(
  document.getElementById('root')!).render(
  <React.StrictMode>
    <CountdownPage />
  </React.StrictMode>
)
