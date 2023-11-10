
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Modalities from './components/Modalities/Modalities'
import Plans from './components/Plans/Plans'
import Units from './components/Units/Units'

function App() {


  return (
    <div>
      <Header />
      <Home />
      <About />
      <Modalities />
      <Units />
      <Plans />
      {/* Contact */}
      <Footer />
    </div>
  )
}

export default App
