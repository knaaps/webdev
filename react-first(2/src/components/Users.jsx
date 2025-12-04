import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'//get,post,put,delete

const Users = () => {
    const [users, setUsers]=useState([])
    const [error,setError]=useState(null) //to-handle errors
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(response.data)
                setUsers(response.data) 
            } catch (error) {
                console.log(error)
            }
            //we can access const(users), only via 'setUsers'
        }
        fetchData()
    },[])

    if(error) return(<p> Error: {error}</p>);

    return (
        <div>
            <p>List of Users</p>
            <ul>
                {users.map((x)=>{
                    return <li key={x.id>{x.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Users