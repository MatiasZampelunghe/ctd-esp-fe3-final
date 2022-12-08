import React from "react";
import { useState } from "react";


const Form = () => {
    const [Data, setData] = useState({
        "nombre":"",
        "email":""
    })
    const handleChange = e => {
        let campo = e.target.name
        let valor = e.target.value
        setData({...Data,[campo]:valor})
    }
    const handleSubmit = e => {
        e.preventDefault()
        let valideteName = /^.{5,}$/.test(Data.nombre)
        let valideteEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(Data.email)
        let Form = document.querySelector('form')
        if (valideteName === false || valideteEmail === false) {
            let error = document.createElement('p')
            error.innerHTML = "Por favor verifique su información nuevamente."
            Form.after(error)
        } else {
            let msg = document.createElement('p')
            msg.innerHTML = `Bienvenido! ${Data.nombre}, checkea tu email para más información!`
            Form.after(msg)
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" onChange={handleChange} />
                <input type="email" name="email" id="email" placeholder="Ingrese su email" onChange={handleChange} />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Form;
