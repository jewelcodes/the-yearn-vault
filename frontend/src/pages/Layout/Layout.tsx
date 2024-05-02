import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import './Layout.css';

function Menu() {
    let [menuVisible, setMenuVisible] = useState(false);
    let [menuClass, setMenuClass] = useState("menu");
    let location = useLocation();

    const toggleMenu = () => {
        if(menuVisible) {
            setMenuClass("menu");
        } else {
            setMenuClass("menu menu-visible");
        }

        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        setMenuVisible(false);
        setMenuClass("menu");
    }, [location]);

    return (
        <>
            <div className="top-bar">
                <div className="logo">
                    <Link to="/">The Yearn Vault</Link>
                </div>
                <ul className={menuClass}>
                    <li><Link to="/">Home</Link></li>
                    <li><i className="fa-solid fa-x menu-button close-menu-button" onClick={toggleMenu} /></li>
                    <li><Link to="/submissions">Submissions</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/support">Support the Project</Link></li>
                    <li><Link to="/submit">Submit</Link></li>
                </ul>
                <div className="submit">
                    <Link to="/submit">Submit</Link>
                    <i className="fa-solid fa-bars menu-button" onClick={toggleMenu} />
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