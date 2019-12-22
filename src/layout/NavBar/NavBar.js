import React from 'react';
import './NavBar.css';

const navBar = (props) => (

    <nav className="navbar navbar-light bg-light NavBarSize">
        <div className="SearchBar">
            <div className="row">
                <div className="col-3">
                    <button onClick={props.click} className="SearchBtn float-left btn btn-outline-primary shadow">Search</button>
                </div>
                <div className="col">
                    <input onChange={props.change} className="SearchBarIn form-control"/>
                </div>
            </div>
        </div>
   </nav>
   

);

export default navBar;