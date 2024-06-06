import { useState } from 'react'
//import './App.css'
import Header from './components/Header'
import Login from './components/form/Login'

function App() {

  return (
    <div className='app'>
      <header></header>
      <main>
        <Login />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
