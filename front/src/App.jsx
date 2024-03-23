import React from "react"
import { Header, Hero, OuMeTrouver, Tarifs, Gallerie, Partenaires, Footer } from "./components"
import './svg.sass'

function App() {

  return (
    <div className="contain">
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <OuMeTrouver />
        <Tarifs />
        <div className="wood wood_contain">
          <div className="wood_background"></div>
          <Gallerie />
          <Partenaires />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
