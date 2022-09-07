import React from "react"
import "./App.css"
import Home from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact/Contact"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Aboutus from "./Pages/Aboutus/Aboutus"
import JoinUs from "./Pages/Sponsorships/joinus"
import Toolkit from "./Components/Toolkit/toolkit"
import Events from "./Pages/Events/Events"

function App() {
  return (
    <div>
      <Router>
        <div className="App-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Toolkit" element={<Toolkit />} />
            <Route path="/Contact" element={<Contact></Contact>} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/Events" element={<Events />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
