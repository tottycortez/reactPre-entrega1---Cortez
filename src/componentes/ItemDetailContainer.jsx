import React,  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    // Consultar a Firestore por un ID
    useEffect(() => {
        const db = getFirestore()
        const documento = doc(db, "items", id)
        getDoc(documento).then((snapShop) => {
            if (snapShop.exists()) {
                setItem({id:snapShop.id, ...snapShop.data()})
                setLoading(false)
            } else {
                console.log("Error! No se encontró el Documento!")   
            }
        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;