import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import '/src/Project 9 Axios/main.css'
// import Navbar from "./Navbar";
const Home = () => {
    const [data, setData]= useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            setData(res.data);
            console.log(res.data);
        });
    }, [data]);

   function handleDelete(id){
        axios.delete("http://localhost:3000/users/" + id)
        .then((res)=>console.log(res.data));
        navigate("/");
    }

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
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                    <Link to={`/edit/${item.id}`}> 
                                    <button>Edit</button>
                                    </Link>                                        
                                    <button id="dlt-btn" onClick={()=> handleDelete(item.id)}>Delete</button>
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