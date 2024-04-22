import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  /*Warning: Dubbel hämtning av drycker.*/
  <React.StrictMode>
    <App style={{ backgroundImage: `url(../assets/images/WoodDark.png)` }}/>
  </React.StrictMode>

)
