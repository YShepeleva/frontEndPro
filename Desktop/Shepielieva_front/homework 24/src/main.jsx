import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './SecondButton/SecondButton.jsx'
import FirstButton from './FirstButton/FirstButton.jsx'
import ThirdButton from './ThirdButton/ThirdButton.jsx'
import Hello from './Hello/Hello.jsx'

createRoot(document.getElementById('root')).render(<App /> 
)
