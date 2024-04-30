import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Layout.css';

function Menu() {
    return (
        <>
            <div className="top-bar">
                <div className="logo">
                    <Link to="/">The Yearn Vault</Link>
                </div>
                <ul className="menu">
                    <li><Link to="/submissions">Submissions</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/support">Support the Project</Link></li>
                </ul>
                <div className="submit">
                    <Link to="/submit">Submit</Link>
                </div>
            </div>
            <Outlet />
            <footer>
                <div>Made with 💗 from Boston &amp; Cairo</div>
                <div><a target="_blank" href="https://jewelcodes.io/">jewelcodes.io</a></div>
            </footer>
        </>
    );
}

export default Menu;