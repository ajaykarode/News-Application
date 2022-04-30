import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class NavBar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ba-navbar">
        {/* <nav className="navbar navbar-light" style="background-color: #e3f2fd;"> */}
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><strong>NEWS 24</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general"><strong> General </strong></Link></li> */}
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/"><strong> General </strong></Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business"><strong> Business </strong></Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment"><strong> Entertainment </strong></Link></li>
                {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general"><strong> General </strong></Link></li> */}
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health"><strong> Health </strong></Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science"><strong> Science </strong></Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports"><strong> Sports </strong></Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology"><strong> Technology </strong></Link></li>
                {/* <li className="nav-item nav-link">|</li> */}
            </ul>


        {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" to="#">Action</a></li>
        <li><a className="dropdown-item" to="#">Another action</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" to="#">Something else here</a></li>
        </ul>
        </li> */}
        {/* <li className="nav-item">
        <a className="nav-link disabled" href='#' tabIndex='-1' aria-disabled='true'>Disabled</a>
        </li> */}
        
        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default NavBar