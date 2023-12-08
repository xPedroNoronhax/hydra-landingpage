

import About from "./containers/About"
import Cards from "./containers/Cards"
import Copy from "./containers/Copy"
import Footer from "./containers/Footer"

import Form from "./containers/Form"
import Hero from "./containers/Hero"
import HowBuild from "./containers/HowBuild"
import Intro from "./containers/Intro"
import TechList from "./containers/TechList"
import WhyBuild from "./containers/WhyBuild"
import EstiloGlobal, { Container } from "./style"


function App() {

  return (
   <div>
    <EstiloGlobal/>
    <Container>
      <Hero/>
      <main>
        <Intro/>
        <About/>
        <WhyBuild/>
        <Cards/>
        <TechList/>
        <HowBuild/>
        <Form/>
        <Footer/>
        <Copy/>
      </main>

    </Container>

   </div>

  )
}

export default App
