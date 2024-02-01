import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 menu">
                        <nav>
                            <ul>
                                <li><NavLink to={'/'} className={'name'}>Home</NavLink></li>
                                <li><NavLink to={'/About'} className={'name'}>About Us</NavLink></li>
                                <li><NavLink to={''} className={'name'}>Gallery</NavLink></li>
                                <li><NavLink to={''} className={'name'}>Rules & Regultion</NavLink></li>
                                <li><NavLink to={''} className={'name'}>Admission</NavLink></li>
                                <li><NavLink to={''} className={'name'}>Contact Us</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu