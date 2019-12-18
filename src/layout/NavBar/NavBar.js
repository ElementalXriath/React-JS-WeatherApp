import React from 'react';

const navBar = (props) => (
    <nav className="navbar navbar-light bg-light fixed-top">
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" href="#">X</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Radar</a>
            </li>
        </ul>
        
        <div className="SearchBar">
            <div className="row Width float-left">
                <div className="col">
                    <input onChange={props.change} className="SearchBar form-control"/>
                </div>
                <div className="col">
                    <button onClick={props.click} className="SearchBtn float-left btn btn-outline-primary shadow">Search</button>
                </div>
            </div>
        </div>
   </nav>
   

);

export default navBar;