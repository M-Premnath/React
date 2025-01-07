import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Project 9 Axios/main.css'

const Create = () => {
  const [values, setValues]= useState({name:"",email:""});
  const navigate = useNavigate();

  function handleCreate(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/users", values).then((res)=>{
      console.log(res.data);
    });
    navigate("/");
  }
  return (
    <div className='form'>
      <form onSubmit={handleCreate}>
        <h1>Create Data</h1>
        <input placeholder='Enter your name' name='name' type="text"
        onChange={(e)=>
          setValues({...values,[e.target.name]: e.target.value})
        }/>
        <br />
        <input placeholder='Enter you Email' name='email' type="email"
        onChange={(e)=>
          setValues({...values,[e.target.name]: e.target.value})
        }
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Create