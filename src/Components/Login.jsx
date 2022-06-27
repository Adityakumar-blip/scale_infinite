import React,{useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

import Sign_up from './Sign_up';

const Login = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("userdata");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/master")
                }
            }
        }

    }
  return (
    <>
    <div className="login-container">
         <div class="background">
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="email" name='email' placeholder="Email or Phone" id="username" onChange={getdata}/>

        <label for="password">Password</label>
        <input type="password" name='password' placeholder="Password" id="password" onChange={getdata}/>

        <button onClick={addData} type="submit">Log In</button>
        <div class="social">
          <p>New User <span><NavLink to='/signup'>Sign-Up</NavLink></span></p>
        </div>
    </form>
    <ToastContainer/>
    </div>
    </>
  )
}

export default Login