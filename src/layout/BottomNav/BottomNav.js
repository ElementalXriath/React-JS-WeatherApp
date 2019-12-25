import React from 'react';
import './BottomNav.css'

const bottomNav = (props) => (
    <ul className="nav justify-content-center fixed-bottom Size bg-dark">
        <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>
    </ul>
)

export default bottomNav;