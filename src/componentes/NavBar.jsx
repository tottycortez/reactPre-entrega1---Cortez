import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src={"/imagenes/logoStarWars2.png"} alt={"logo Star Wars"} width={100} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav">
                                   
                                    <li>
                                        <NavLink className="nav-link" aria-current="page" to={"/categoria/primera"}>Episodios I-II-III</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to={"/categoria/segunda"}>Episodios IV-V-VI</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to={"/categoria/tercera"}>Episodios VII-VIII-IX</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;