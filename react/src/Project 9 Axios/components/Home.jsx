import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '/src/Project 9 Axios/main.css'
// import Navbar from "./Navbar";
const Home = () => {
    const [data, setData]= useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:3000/employee").then((res)=>{
            setData(res.data);
            console.log(res.data);
        });
    }, []);

  return (
    <div className='Home'>
        {/* <nav>
            <h1>Crud App</h1>
            <Link to="/create"> <button>Add +</button> </Link>
        </nav> */}
        {/* <Navbar /> */}
        <br />
        <center >
            <table border={1} className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.eName}</td>
                                    <td>{item.eAge}</td>
                                    <td>{item.eMail}</td>
                                    <td>{item.ePlace}</td>
                                    <td>
                                    <Link to={`/edit/${item.id}`}> 
                                    <button>Edit</button>
                                    </Link>                                        
                                    <button id="dlt-btn">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
    </div>
  )
}

export default Home