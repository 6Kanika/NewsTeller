import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mt-0" style={{width:"1600px"}}>
  <div class="container-fluid mt-0">
   <Link className="navbar-brand" to="/">NewsTeller</Link>
   <Link className="navbar-brand" to="/business">Business</Link>
   <Link className="navbar-brand" to="/entertainment">Entertainment</Link>
   <Link className="navbar-brand" to="/general">General</Link>
   <Link className="navbar-brand" to="/health">Health</Link>
   <Link className="navbar-brand" to="/science">Science</Link>
   <Link className="navbar-brand" to="/sports">Sports</Link>
   <Link className="navbar-brand" to="/technology">Technology</Link>
  </div>
</nav>



      </div>
    )
  }
}
