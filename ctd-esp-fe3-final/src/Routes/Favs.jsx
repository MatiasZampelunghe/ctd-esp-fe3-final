import React from "react";
import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {

    const {Theme, Favs} = useContext(ContextGlobal)
    
    return (
        <div className="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {Favs.map(item => {return <Card key={item.id} id={item.id} name={item.name} username={item.username} />})}
            </div>
        </div>
    );
};

export default Favs;
