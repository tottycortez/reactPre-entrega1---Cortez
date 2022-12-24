import React from "react";

const Bienvenida = () => {
    return (
        <div className="container-fluid fondoBienvenida">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-6 text-end">
                        <img src={"/imagenes/trooper.jpg"} alt="Trooper" width={550} />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <div>
                            <h2>Bienvenidos a Star Fans Wars</h2>
                            <p>En esta página podras comprar las películas que quieras!</p>
                            <p>Un Jedi debe tener el compromiso más profundo, la mente más seria… Toda su vida tiene que desviar la mirada hacia el futuro, hacia el horizonte. Nunca su mente debe quedarse donde estaba o en lo que estaba haciendo.
                                – Maestro Yoda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida;