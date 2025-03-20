import React, { useEffect, useState } from 'react'
import './BooksLibrary.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'






function BooksLibrary() {



  let [data, setData] = useState({

    title: '',
    author: '',
    description: '',
    

  })



  function getvalue(event) {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }



  let navigate = useNavigate()



  function onHandleSubmit() {

    axios.post('http://localhost:3000/book', data).then((responce) => {

      console.log(responce);


      navigate('/books')

    }).catch((error) => {

      console.log(error);



    })



  }







  return (


    <div>

      


      <div className='bl1'>
        <h1>Books Library</h1>
      </div>

      <div className='B1'>
        <input type="text" name='title' placeholder='title' onChange={getvalue} />
      </div><br />



      <div className='B2'>
        <input type="text" name='author' placeholder='author' onChange={getvalue} />
      </div><br />



      <div className='B3'>
        <input type="text" name='description' placeholder='description' onChange={getvalue} />
      </div><br />


      <button type='button' onClick={onHandleSubmit}>submit</button>





    </div>
  )
}

export default BooksLibrary
