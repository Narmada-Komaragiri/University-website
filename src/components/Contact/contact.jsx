import React from 'react';
import './contact.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56331733-6a40-4cee-8db3-f9f9bc2added");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <i class="fa-solid fa-pen"></i></h3>
        <p>Feel free to reach out through contact form or find our contact information below.your feedback,questions,and suggestions are important to us as we srive to provide exceptional sevice to  our University community.</p>
        <ul>
            <li><i class="fa-solid fa-envelope"></i>contactus@gmail.com</li>
            <li><i class="fa-solid fa-phone"></i>+1 123-456-7890</li>
            <li><i class="fa-solid fa-location-dot"></i>77 Massachusetts Ave,Cambridge <br/>A 02139uinted States</li>
        </ul>
      </div>
      <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter Your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your Name' required/>
            <label>Write your Message</label>
            <textarea name='message' rows='6' placeholder='Enter your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <i class="fa-solid fa-arrow-right"></i></button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact