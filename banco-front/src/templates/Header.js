import {Link, useNavigate} from "react-router-dom";
import {Logout} from "../crud/Functions";
import UserData from "../crud/UserData";
import imagen from '../images/Portada.jpg'
import React from "react";



function Header({ isLoggedIn, setIsLoggedInCallback, userRole } ){

    const navigate = useNavigate();


    const handleLogout = () => {

        Logout ({ setIsLoggedInCallback})

        navigate("/");
    };

    return(
        <header>
             <div className = "header-cover">
                <img src = {imagen} alt = "Imagen de portada" />
            </div>
            <nav className = "navbar navbar-expand-lg navbar-color">
                <div className = "container-fluid d-flex align-items-center">

                    <button className = "navbar-toggler " type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav" aria-expanded = "false" aria-label = "Toggle navigation">
                        <span className = "navbar-toggler-icon"></span>
                    </button>
                    <div className = "collapse navbar-collapse navbar-custom" id= "navbarNav">
                        <ul className = "navbar-nav">
                            <li className = "nav-item m-1 ">
                                <Link className = "nav-link" to = "/">Home</Link>
                            </li>
                            <li className = "nav-item m-1">
                                <Link className = "nav-link" to = "/">About</Link>
                            </li>
                            {userRole === "normal"&& isLoggedIn ? (
                                <li className="nav-item m-1">
                                    <Link className = "nav-link" to = "/create-account">
                                        Abrir una cuenta
                                    </Link>
                                </li>
                            ) : null}
                            {isLoggedIn ?(
                                <li className = "nav-item m-1">
                                    <Link className="nav-link " to="/" onClick={() => Logout({ setIsLoggedInCallback })}>
                                        Deslogearse
                                    </Link>
                                </li>
                            ) : (
                                <li className = "nav-item m-1">
                                    <Link className = "nav-link bg-custom " to ="/register">Registrarse</Link>
                                </li>
                            )}
                        </ul>

                    </div>
                    <div>
                        {isLoggedIn ?(
                            <div className="position-absolute top-0 end-0 p-3 ">
                                <UserData />
                            </div>
                        ) :null}
                    </div>
                </div>
            </nav>
        </header>)
}

export {Header}