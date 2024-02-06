import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MiPrimerComponente from './MiPrimerComponente.jsx'
import Card from './components/Card.jsx'
import Header from './components/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header />
   <main>
    <Card />
    <Card />
    <Card />
   </main>
  </React.StrictMode>,
)
