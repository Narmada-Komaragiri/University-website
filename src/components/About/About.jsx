import React from 'react';
import './About.css'

const About = ({setplaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://th.bing.com/th/id/OIP.etEPpylob-ViavHZybvs2QHaE7?rs=1&pid=ImgDetMain" className="about-img"alt="pic"/>
        <img src='https://play-lh.googleusercontent.com/hwMMg3OOgkqPJmAKuIW2ZvKVu0PDJH0nOrL0WOHYB1dTi_VmS3esvA8hQ0A5g0Vf4w' className="play-icon"alt='pic' onClick={()=>{setplaystate(true)}}/>
        {console.log(setplaystate)}
  
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's Comprehensive education programs.our Cutting-edge curriculam is designed to empower students with the Knowledge,skills ,and experience needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation,hands-on learning,and personalized mentorship,our programs preapare aspiring educators to make a meaningful impact in classrooms,schools,and communities</p>
        <p>Whether you aspire to become a teacher,administrator,counselor,or educational leader,our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of educational.</p>
      </div>
    </div>
  )
}

export default About