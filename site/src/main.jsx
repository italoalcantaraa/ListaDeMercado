import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={App} path='/' />  
        <Route Component={App} path='*' />  
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
