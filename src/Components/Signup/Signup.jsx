import axios from 'axios'
import React, { useState } from 'react'
import './Signup.css'




function Signup() {

  let [data, setData] = useState({
    username: '',
    email: '',
    password: ''

  })

  function getvalue(event) {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  console.log(import.meta.env.VITE_BASE_URL);
  


  function sendData() {

    axios.post('http://localhost:3000', data).then((responce) => {

      console.log(responce);

    }).catch((err) => {

      console.log(err);



    })

  }



  return (


    <div className='Mform'>

      <div className='form'>

        <div className='first'>
          <h1>SignUp</h1>
        </div>

        <div className='A'>
          <input type="text" name='username' placeholder='username' onChange={getvalue} />

        </div><br />


        <div className='B'>
          <input type="text" name='email' placeholder='email' onChange={getvalue} />

        </div><br />



        <div className='C'>
          <input type="text" name='password' placeholder='password' onChange={getvalue} />

        </div>

        <div className='btn'>
        <button type='button' onClick={sendData}>sign up</button>

        </div>






      </div>






    </div>
  )
}

export default Signup
