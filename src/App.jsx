import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programms/programs'
import Title from './components/title/title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/videoplayer/Videoplayer'

const App = () => {
  const [playstate,setplaystate]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setplaystate={setplaystate}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIAL' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='get in Touch'/>
      <Contact/>
      <Footer/>
  
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App