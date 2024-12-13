import React from 'react'
import mail from '../assets/mail-icon.png'
import phone from '../assets/phone-icon.png'
import './contact.css'
import arrow from '../assets/white-arrow.png'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8216f0a4-0e41-4514-88a2-ebd7d7c0548c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
    <div className='contact-sec'>
        <h1 data-aos="fade-down">CONTACT</h1>
        <hr data-aos="fade-down"/>

    </div>

    <div className='contact-wrap'>


    <div className='left-contact' data-aos="fade-down">
      <h1>GET IN TOUCH :</h1>

        <p>I'd love to hear from you! Whether you have a project in
        <br/>mind, a question about my work, or just want to chat
        <br/>about web development, feel free  to reach out. Use 
        <br/> the contact form below or connect with me on social 
        <br/>media—let’s bring your vision to life together!
        </p>

        
        <div className='details'>

        <span> <img width={18} src={mail} alt=''/> Syedshaheer266@gmail.com</span>
        <span> <img width={18} src={phone} alt=''/> 03313804062</span>
        {/* <span> <img width={17} src={location} alt=''/> Pakistan ,Karachi</span> */}
        </div>

    </div>

    <div className='right-contact'>

    
            <form onSubmit={onSubmit}  data-aos="fade-up">

            <label>Your Name</label>
            

            <input type='text' placeholder='Enter your name' id="name" name='name' required/>
            
            <label>Your Email</label>

            <input type='email' placeholder='Enter your email' id="name" name='name' required/>
            
            <label>Your Message</label>

            <textarea rows={6} placeholder='Enter your message'/>                
            <button type='submit' className='contact-btn'>Submit Now <img src={arrow} width={16} alt=''/></button>
            <span className='msg'>{result}</span>
            </form>


    </div>

    </div>
  
</div>
  )
}

export default Contact
