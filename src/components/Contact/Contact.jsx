import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/Send-email.png';
import phone_icon from '../../assets/Phone.png';
import email_icon from '../../assets/Paper-Plane.png';
import address_icon from '../../assets/Location.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3d215737-d2c5-4d3b-afec-0efc32e161c9"); /*fea517d8-2864-4eac-ae5e-f234a43f9075*/
  
      const response = await fetch("https://api.web3forms.com/submit", { 
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
       <div className='contact-info'> 
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We’re here to help with any questions or concerns you may have.
            Feel free to reach out to us via the listed contact detials or give us a call.
            We look forward to hearing from you!
        </p>
            <ul>
                <li><img src={phone_icon} alt='phone' />+1 234 567 890</li>
                <li><img src={email_icon} alt='email' />contact@junkcycle.ca</li>
                <li><img src={address_icon} alt='address' />5660 Heimingdal Drive, Windsor, Ontario, Canada</li>
            </ul>
       </div>
       <div className='contact-info'>
        <h3>Join the Waitlist!!</h3>
        <form onSubmit={onSubmit}>
            <label><input type="text" name='firstname' placeholder='First Name' required autoComplete="given-name" pattern=".*\S.*" title="This field cannot be empty or contain only spaces" /></label>
            <label><input type="text" name='lastname' placeholder='Last Name' required autoComplete="family-name" pattern=".*\S.*" title="This field cannot be empty or contain only spaces" /></label>
            <label>
            <select name='role' required >
                <option value="" disabled selected>Select Role</option>
                <option value="Customer">Customer</option>
                <option value="Hauler">Hauler</option>
            </select>
            </label>
            <label> <input type="email" name='email' placeholder='Email Address' required autoComplete="email" /></label>
            <label><input type="tel" name='phone' placeholder='Phone Number' required autoComplete="tel" pattern="\d{10}" title="Please enter a valid 10-digit phone number" /></label>
            {/* <textarea name="message" id="" rows="6" placeholder='Message' required></textarea> */}
            <button type='submit' className='btn dark-btn'>Join the Waitlist<img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
