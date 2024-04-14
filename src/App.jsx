import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardsRow from './components/CardsRow'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardsRow />
    </div>
  )
}

export default App