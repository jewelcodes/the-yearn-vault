import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <>
            <div className="top-bar">
                <div className="logo">
                    <Link to="/">The Yearn Vault</Link>
                </div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/submissions">Submissions</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/privacy">Privacy Statement</Link></li>
                </ul>
                <div className="submit">
                    <Link to="/submit">Submit</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Menu;