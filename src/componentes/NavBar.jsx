import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/index.html"><img src={"imagenes/logoStarWars2.png"} alt={"logo Star Wars"} width={100} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul className="navbar-nav">
                                    <li>
                                        <a className="nav-link" aria-current="page" href="/index.html">Menú Principal</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/primerTrilogia">Episodios I-II-III</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/segundaTrilogia">Episodios IV-V-VI</a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/tercerTrilogia">Episodios VII-VIII-IX</a>
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