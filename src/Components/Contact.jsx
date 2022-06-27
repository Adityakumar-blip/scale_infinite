import React,{useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contact.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {

    const [logindata, setLoginData] = useState([]);
    const [message, setmessage] = useState("");
    const [contact, setcontact] = useState('');

    const Userdata = () => {
      const getuser = localStorage.getItem('user_login');
      if (getuser && getuser.length) {
        const user = JSON.parse(getuser);
  
        setLoginData(user);
      }
    }

    useEffect(() => {
        Userdata();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('contact', contact)
        localStorage.setItem("message", message)
        alert('success')
        
    }
  return (
    <>
    <Navbar/>
    <div className="contact-container">
        <div class="background-cont">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +9145489623</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
                {
                logindata.length === 0 ? 'error' :
              <input class="app-form-control" placeholder="Name" value={logindata[0].name}/>
                }
            </div>
            <div class="app-form-group">
                {
                    logindata.length === 0 ? 'error' :
                    <input class="app-form-control" placeholder="EMAIL" value={logindata[0].email}/>
                }
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" value={contact} onChange={(e) => setcontact(e.target.value)}/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" value={message} onChange={(e) => setmessage(e.target.value)}/>
            </div>
            <div class="app-form-group buttons">
              {/* <button class="app-form-button">CANCEL</button> */}
              <button class="app-form-button" onClick={handleSubmit}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact