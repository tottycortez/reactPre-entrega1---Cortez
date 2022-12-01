import React from "react";

const Footer = () => {
    return (
        <div className="continer-fluid footer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={"imagenes/HanSoloBanner.jpg"} alt={"Han Solo"} width={200} />
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/"} className="me-5" 
                            rel="noreferrer"><img src={"imagenes/facebook.svg"} alt="facebook" width={30} /></a>
                            <a href={"https://www.facebook.com/"} className="me-5" 
                            rel="noreferrer"><img src={"imagenes/instagram.svg"} alt="instagram" width={30} /></a>
                            <a href={"https://www.facebook.com/"} className="me-5" 
                            rel="noreferrer"><img src={"imagenes/twitter.svg"} alt="twitter" width={30} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Footer;