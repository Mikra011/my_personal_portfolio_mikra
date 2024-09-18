import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { IntersectionProvider } from './components/context/IntersectionContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <IntersectionProvider>
            <App />
        </IntersectionProvider>
    </BrowserRouter>
)

