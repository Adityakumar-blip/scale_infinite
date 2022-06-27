import React,{useState, useEffect} from 'react'

import './Footer.css'


const Footer = () => {
    const date = new Date().toLocaleDateString();
    const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="footer-container">
<footer class="footer-distributed">

    <div class="footer-right">
        <h1>Kira Intriology</h1>
    </div>

    <div class="footer-left">
    <p class="footer-links">{date}</p>

        <p class="footer-links">{clockState}</p>

        <p>ABOUT ME</p><br/>
        <p>Myself Aditya Kumar and I'm from Delhi.<br/>I have total of 2+ years experience<br/>in web Development, I have experience of <br/> technologies like reactjs, nodejs, bootstrap<br/>javascript and some build tools. Previouslly <br/> I worked in a company named as Socialpubli as<br/> a full time  Web developer located in Vadodara.</p>
    </div>

</footer>
    </div>
  )
}

export default Footer