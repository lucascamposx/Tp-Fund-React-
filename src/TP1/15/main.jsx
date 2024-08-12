import React from 'react'
import ReactDOM from 'react-dom/client'
import Cabecalho from './cabecalho.jsx';
import Projetos from './projetos.jsx';
import Contatos from './contatos.jsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='body-app'>
        <Cabecalho />
        <Projetos />
        <Contatos />
      </div> 
  </React.StrictMode>,
)
