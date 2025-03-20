import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './BookDetail.css'

let BASEURL = import.meta.env.VITE_BASE_URL

function BookDetail() {

    let [book, setBook] = useState([])


    useEffect(() => {

        axios.get(BASEURL + '/book/getAll')
            .then((result) => {
                console.log("*********************",result);

                setBook(result.data.data)

            }).catch((err) => {
                console.log(err);


            })



    }, [])



    return (
        <div>

            <div>
                {
                    book.map((obj, i) => {
                        return (
                            <div className='desc'>
                                <h1>{obj.description}</h1>
                                <h1>{obj.title}</h1>
                                <img src={obj.imageurl?obj.imageurl:null} alt="" />
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default BookDetail
