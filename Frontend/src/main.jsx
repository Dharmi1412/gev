import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom";
import SiteContext from './Context/SiteContext.jsx';

createRoot(document.getElementById('root')).render(
  <SiteContext>
    <BrowserRouter >
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </SiteContext>,
)
