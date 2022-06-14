
import Main from './Main';
import Navbar from './Navbar';
import Design from './Design';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Routes>
   <Route path='/coding' element={<Main/>} />
   <Route path='/design' element={<Design/>} /> 
   </Routes>
   </Router>
    </>
  );
}

export default App;
