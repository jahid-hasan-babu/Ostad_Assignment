import "./contact.css"
import { useState } from "react";



const Contact4 = () => {

    const [userInfo, setUserInfo] = useState({
        username:"",
        mail:"",
        subject:"",
        desc:""

    })

    const handleInputChange = (event, fieldName) => {
        setUserInfo({
          ...userInfo,
          [fieldName]: event.target.value
        });
      }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
        alert(JSON.stringify(userInfo))
      }
  return (
    <div>
      <div className="container">
      <div className='form-container'>
        <h1>Send us a message</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input className='form-input' type="text" onChange={(e) => handleInputChange(e, 'username')} placeholder="Full name"/>
        </div>
        <div>
          <input className='form-input input__design1' type="mail" onChange={(e) => handleInputChange(e, 'mail')} placeholder="Email address"/>
        </div>
        <div>
          <input className='form-input' type="text" onChange={(e) => handleInputChange(e, 'subject')} placeholder="Subject" />
        </div>
        <div className="form__area">
            <h3 >Tell us more about your project</h3>
         <textarea onChange={(e) => handleInputChange(e, 'desc')} cols="50" rows="10"></textarea>
        </div>
        <div className="homeBtn contact-btn">
            <button className="btn1">Submit</button>
        </div>
      </form>

    </div>
  
      </div>
    </div>
  )
}

export default Contact4
