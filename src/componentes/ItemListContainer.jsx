import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
            }, 2000)
        })
        promesa.then((data) => {
            console.log(data)
            setItems(data)
        })
    }, [id])

    return (
        <div className="container py-5 footer">
                <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;