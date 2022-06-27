import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Master_page from './Master_page';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sign_up from './Components/Sign_up';

function App() {
  return (
    <>
    <Router>
   <Routes>
   <Route path='/' element={<Login/>} />
   <Route path='/master' element={<Master_page/>} />
   <Route path='/signup' element={<Sign_up/>} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/contact' element={<Contact/>} />
   </Routes>
   </Router>
    </>
  );
}

export default App;
