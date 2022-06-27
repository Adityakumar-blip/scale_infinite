import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

import Navbar from './Navbar';
import Footer from './Footer';

import './Main.css'


let currDate = new Date();
currDate = currDate.getHours();
let greet = '';

if(currDate >= 1 && currDate < 12){
  greet = 'Good Morning'
}else if (currDate >=12 && currDate < 16){
  greet = 'Good Afternoon'
}else if (currDate >= 16 && currDate < 19){
  greet = 'Good Evening'
}else {
  greet = 'Good Night'
}


const Main = () => {

  const perPage = 20;

  const [currPage, setCurrPage] = useState(0);
  const [data, setData] = useState([]);

  const [logindata, setLoginData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
  }

  function handleClick ( {selected: selectedPage}) {
    console.log('selectedPage', selectedPage);
    setCurrPage(selectedPage);
  }

  const offset = currPage * perPage;
  console.log('offset', offset)

  const currentPageData = data
  .slice(offset, offset + perPage)
  .map((res , index) => {
    return (
      <div className="col-10 col-md-4 mt-5" key={index}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={res.url} className="rounded" width="150" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{res.title}</h4>
                                            {/* <span className="text-left">{type }</span> */}
                                        {/* <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div> */}
                                      
                                    </div>
                             </div>
                          </div>
                    </div>

    );
  })
  
  const pageCount = Math.ceil(data.length / perPage);

  return (
    <>
    <Navbar/>
    <div className="main-container">
     <div>
      {
        logindata.length === 0 ? 'error' :
           <h2 style={{textAlign:'center', marginTop:'2rem'}}>Welcome, {logindata[0].name} {greet}</h2>
      }
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    
                {currentPageData}
                    
                </div>
            </div>
        </div>

        <ReactPaginate
        previousLabel= {'previous'}
        nextLabel= {'next'}
        pageCount= {pageCount}
        onPageChange= {handleClick}
        containerClassName={'pagination'}
        previousLinkClassName={'prevpage'}
        nextLinkClassName={'nexpage'}
        disabledClassName={'dispage'}
        activeClassName={'activpage'}
        />
    </div>
    <Footer/>
    </>
  )
}

export default Main