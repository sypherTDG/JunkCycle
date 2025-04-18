import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Choose from './components/Choose/Choose'
import Works from './components/Works/Works'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <div className="container">
        <Title subtitle='TESTIMONIALS' title='What Our Client Say'/>
        <Testimonials/>
      </div>
      <Works/>
      <Choose/>
      <div className="container">
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App