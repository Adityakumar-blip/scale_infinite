import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Sign_up.css'

const Sign_up = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }
  return (
    <div className="sign_up-container">
        <div className="login-container">
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form className='form-container'>
        <h3>Signup Here</h3>

        <label for="name">Name</label>
        <input type="text" name='name' placeholder="Name" id="username" onChange={getdata}/>

        <label for="email">Email</label>
        <input type="email" name='email' placeholder="E-mail" id="username" onChange={getdata}/>

        <label for="date">DOB</label>
        <input type="date" name='date' placeholder="DOB" id="username" onChange={getdata}/>

        <label for="password">Password</label>
        <input type="password" name='password' placeholder="Password" id="password" onChange={getdata}/>

        <button onClick={addData} type="submit">Sign up</button>
        <div class="social">
          <p>Already have an account<span><NavLink to='/login'>SignIn</NavLink></span></p>
        </div>
    </form>
    <ToastContainer/>
    </div>
    </div>
  )
}

export default Sign_up