import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'

import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

    const [Odontologos, setOdontologos] = useState([])

    const { Theme } = useContext(ContextGlobal)

    useEffect(() => {
        const fetchData = async () => {
            axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setOdontologos(res.data))
        }
        fetchData()
    }, [])

    return (
        <div className='home' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Home</h1>
            <div className='card-grid'>
                {Odontologos.map(item => {
                    return <Card key={item.id} id={item.id} name={item.name} username={item.username} />
                })}
            </div>
        </div>
    )
}

export default Home