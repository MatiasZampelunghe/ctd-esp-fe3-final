import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
    const params = useParams()

    const [odontologo, setOdontologo] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(res => setOdontologo(res.data))
        }
        fetchData()
    })

    const { Theme } = useContext(ContextGlobal)

    return (
        <div className='detail' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Detail Dentist {odontologo.id} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{odontologo.name}</td>
                        <td>{odontologo.email}</td>
                        <td>{odontologo.phone}</td>
                        <td>{odontologo.website}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail