import React from "react";
import { useState } from "react";

const ItemCount = ({ stockItems }) => {
    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState(stockItems)

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= stock) {
            setStock(stock - counter)
            setCounter(0)
            console.log(`Agregaste: ${counter} Productos al CArrito!`)
        }

    }
    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;