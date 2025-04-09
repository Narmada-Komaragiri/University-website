import React from 'react'
import './Campus.css'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src='https://static.vecteezy.com/system/resources/previews/045/388/141/non_2x/graduated-student-s-hug-graduation-and-graduate-success-on-university-campus-and-certificate-with-academic-goals-reached-college-student-and-graduating-ceremony-event-and-degree-photo.jpg' alt=''/>
            <img src='https://imageio.forbes.com/specials-images/imageserve/662a8f7ac0de7485420d9180/Graduation-day-/960x0.jpg?format=jpg&width=960' alt=''/>
            <img src='https://www.shutterstock.com/image-photo/two-happy-smiling-graduated-students-260nw-1991791415.jpg' alt=''/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRyYy7jbz7ffX8tGf94J099Prv9obQJ3kSB4yDDp-7yRDMbp0dZkj4d-kkfijh6kcWf8&usqp=CAU' alt=''/>
        </div>
        <button className='btn dark-btn'>See More here <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Campus