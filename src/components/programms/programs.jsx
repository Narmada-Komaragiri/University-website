import React from 'react'
import './programs.css'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
         <img src="https://th.bing.com/th/id/OIP.OSVhCozZkw1yPr_L7zGwLgHaE8?rs=1&pid=ImgDetMain" alt=""/>
         <div className="caption">
         <i class="fa-solid fa-book-open-reader"></i>
            <p>Graduation Degree</p>
         </div>
        </div>
        <div className="program">
        <img src="https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12981.jpg" alt=""/> 
        <div className="caption">
        <i class="fa-solid fa-medal"></i>
            <p>Matsers Degree</p>
         </div>
        </div>
        <div className="program">
        <img src="https://media.flytographer.com/uploads/2021/06/fort-worth-05-13-2021-graduation-9_original-1.jpeg" alt=""/> 
        <div className="caption">
        <i class="fa-solid fa-book-open-reader"></i>
            <p>Post Graduation</p>
         </div>
        </div>
    </div>
  )
}

export default Programs