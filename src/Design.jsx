import React from 'react'
import './Design.css'

const Design = () => {
  return (
      <>
    <div className="design-container">
        <div class="wrapper">
	<div class="outer">
		<div class="content animated fadeInLeft">
			<h1>Ubuntu</h1>
			<p>Ubuntu is a Debian-based Linux operating system based on free software.</p>
			
			<div class="button">
			<a class="cart-btn" data-toggle="modal" data-target="#myModal" href="#">Install</a>
			</div>
			
		</div>
		<img src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png" width="200px" class="animated fadeInRight"/>
	</div>
</div>
    </div>

<div id="myModal" class="modal fade" role="dialog">
<div class="modal-dialog">

  {/* <!-- Modal content--> */}
  <div class="modal-content project-details-popup">
    <img class="prof-icon" src="https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png"/>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    <div class="modal-header">
      {/* <img class="header-img" src="http://creativefan.com/files/2010/02/12142-fullsize-500x250.jpg"/> */}
    </div>
    <div class="modal-body">
    <div class="form">
      <div class="title">Ubuntu</div>
      <div class="subtitle">Docker Downloads: 1B+<br/>
Docker Ratings: 10K+</div>
      <div class="input-container ic1">
        <input id="custom" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="custom" class="placeholder">Custom Name</label>
      </div>
      <div class="input-container ic2">
        <input id="port" class="input" type="text" placeholder=" " />
        <div class="cut cut-short1"></div>
        <label for="port" class="placeholder">Port Number (default:22)</label>
      </div>
      <div class="input-container ic2">
        <input id="variable" class="input" type="text" placeholder=" " />
        <div class="cut cut-short2"></div>
        <label for="variable" class="placeholder">Variable1: value_variable1, Variable2:value_variable2</label>
      </div>
      <div class="input-container ic2">
        <input id="ip" class="input" type="text" placeholder=" " />
        <div class="cut cut-short3"></div>
        <label for="ip" class="placeholder">45.87.80.109/32</label>
      </div>
      <button type="text" class="submit">Install</button>
    </div>
    </div>
    <div class="modal-footer">  
    </div>
  </div>

</div>
</div>

</>
  )
}

export default Design