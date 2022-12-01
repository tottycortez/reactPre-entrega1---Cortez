import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container py-5 footer">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div class="alert alert-warning" role="alert">
                        <p>{greeting}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;