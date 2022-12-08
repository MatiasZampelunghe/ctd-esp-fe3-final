import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Card = ({ name, username, id }) => {
    const {Favs,setFavs} = useContext(ContextGlobal)
    const addFav = () => {
        let existe = false 
        let Favoritos = Favs
        Favoritos.forEach(e => {
            if (e.id === id) {
                existe = true
                let index = Favoritos.indexOf(e)
                Favoritos.splice(index,1)
            }
        }) 
        if (existe === false) {
            Favoritos.push({ 
                "name":name,
                "username":username,
                "id":id
            })
            localStorage.setItem("favs", JSON.stringify(Favoritos))
            alert("El odontologo se ha agregado correctamente")
        } else {
            localStorage.setItem("favs", JSON.stringify(Favoritos))
            alert("Odontologo eliminado de favoritos")
        }
        setFavs(Favoritos)
    }
    return (
        <div className="card">
            <img src="/images/doctor.jpg" alt="Doctor" />
            <h2><Link to={`/${id}`}>{name}</Link></h2>
            <h3>{username}</h3>
            <button onClick={addFav} className="favButton">⭐</button>
        </div>
    );
};

export default Card;
