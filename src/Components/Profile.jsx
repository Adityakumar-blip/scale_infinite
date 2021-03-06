import React,{useState, useEffect} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import './Profile.css'

const Profile = () => {
    const [loginData, setLoginData] = useState([]);
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

      const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

    const [img, setimg] = useState(profilePIcDefault);

     //covert img
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onabort = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  //handle img
  const handleImg = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };

  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div class="row py-5 px-4">
        <div class="col-md-5 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    src={profilePIcDefault}
                    alt="..."
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                    Edit Picture
                  </a>
                </div>
                <div class="media-body mb-5 text-white">
                  {
                      loginData.length === 0 ? 'error' :
                      <h4 class="mt-0 mb-0">{loginData[0].name}</h4>

                  }
                  <p class="small mb-4">
                    {" "}
                    <i class="fas fa-map-marker-alt mr-2"></i>India
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="bg-light p-4 d-flex justify-content-end text-center">
              {" "}
              <ul class="list-inline mb-0">
                {" "}
                <li class="list-inline-item">
                  {" "}
                  <h5 class="font-weight-bold mb-0 d-block">215</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-image mr-1"></i>Photos
                  </small>{" "}
                </li>{" "}
                <li class="list-inline-item">
                  {" "}
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Followers
                  </small>{" "}
                </li>{" "}
                <li class="list-inline-item">
                  {" "}
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Following
                  </small>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div class="px-4 py-3">
              {" "}
              <h5 class="mb-0">About</h5>{" "}
              <div class="p-4 rounded shadow-sm bg-light">
                {" "}
                <p class="font-italic mb-0">Web Developer</p>{" "}
                <p class="font-italic mb-0">Lives in New York</p>{" "}
                <p class="font-italic mb-0">Photographer</p>{" "}
              </div>{" "}
            </div>{" "}
            <div class="py-4 px-4">
              {" "}
              <div class="d-flex align-items-center justify-content-between mb-3">
                {" "}
                <h5 class="mb-0">Recent photos</h5>
                <a href="#" class="btn btn-link text-muted">
                  Show all
                </a>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-2 pr-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    class="img-fluid rounded shadow-sm"
                  />
                </div>
                <div class="col-lg-6 mb-2 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    class="img-fluid rounded shadow-sm"
                  />
                </div>
                <div class="col-lg-6 pr-lg-1 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    class="img-fluid rounded shadow-sm"
                  />
                </div>
                <div class="col-lg-6 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    class="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
