import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import 'boxicons'
import Services from "./Components/Services/Services"
import Counter from "./Components/Counter/Counter"
import Clients from "./Components/Clients/Clients"
import Team from "./Components/Team/Team"
import FAQ from "./Components/FAQ/FAQ"
import Testimonials from "./Components/Testimonials/Testimonials"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer.jsx/Footer"



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Clients />
      <Team />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App