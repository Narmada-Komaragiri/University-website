import React from 'react';
import './Testimonial.css';
import { useRef } from 'react';

const Testimonials = () => {

  const slider=useRef();
  let tx=0; //tanslatex
  const slideforward=()=>{
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform=`translatex(${tx}%)`
  }
  
  const slidebackward=()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform=`translatex(${tx}%)`;
  }

  return (
    <div className='testimonial'>
          <img src='https://th.bing.com/th/id/OIP.BShqx-M6q10pIWtjBOK4dAHaHa?w=626&h=626&rs=1&pid=ImgDetMain' alt=''className='next-btn' onClick={slideforward}/>
        <img src='https://icon-library.com/images/thin-arrow-icon/thin-arrow-icon-23.jpg' alt='' className='back-btn' onClick={slidebackward}/>
        <div className="slider">
           <ul ref={slider}>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://thumbs.dreamstime.com/z/young-beautiful-graduate-woman-student-university-smiling-broadly-showing-thumbs-up-gesture-to-camera-expression-like-115949545.jpg' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson1</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://thumbs.dreamstime.com/z/attractive-beautiful-asian-graduated-woman-cap-gown-smile-certificated-attractive-beautiful-asian-graduated-woman-170917829.jpg' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson2</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://c8.alamy.com/comp/WA2X56/portrait-closeup-asian-beautiful-smiley-graduate-graduated-student-girl-young-woman-in-cap-gown-on-blue-sky-background-celebrating-graduation-ceremo-WA2X56.jpg' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson3</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://th.bing.com/th/id/OIP.VebHbVnK3vQyaOJqdUR-KQHaEp?rs=1&pid=ImgDetMain' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson4</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://media.istockphoto.com/photos/young-man-in-a-graduation-wear-isolated-picture-id155352592?k=20&m=155352592&s=612x612&w=0&h=pY0cS6UcyycV-GFokbuTdP1ntT-Do7x0geOUQ7HzkvE=' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson5</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                  <div className="user-info">
                    <img src='https://th.bing.com/th/id/OIP.o84xdpwV15dS4U7ufO7IrAHaHa?rs=1&pid=ImgDetMains' alt=''/>
                    <div>
                      <h3>Wiiliam Jackson6</h3>
                      <span>Educity,USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursuing my degree at Edusity was one of the best decisions i've made ever.The supportive community,set-of-the-art facilities,and commitment to academic excellence have truly exceeded my expectations</p>
              </div>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Testimonials;