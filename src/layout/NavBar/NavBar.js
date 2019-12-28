import React from 'react';
import './NavBar.css';

const navBar = (props) => (
    

    <nav className="navbar navbar-light NavBarSize Color">
        <div className="justify-content-end">
            <div className="row float-right">
                <div className="col-2">
                    <button onClick={props.click} className="SearchBtn btn btn-outline-primary shadow">Search</button>
                </div>
                <div className="col-3">
                    <input onChange={props.change} value={props.value} className="SearchBarIn form-control"/>
                </div>
            </div>
        </div>
   </nav>
   

);

export default navBar;