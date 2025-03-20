import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Actors.css'


function Actors() {

    let [data, setData] = useState([])

    useEffect(() => {

        axios.get("https://api.themoviedb.org/3/trending/person/week", {

            // headers: {
            //     Authorization:
            //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDZjNjlmMWI1YzQ5ZTY4ODJjMjIzMzRlNjQ3ODg5NSIsIm5iZiI6MTczMjA4MzQwNy40NTg0MjcsInN1YiI6IjY3MzM1ZjQ0YjljYmRhYmUyOWMyYzc4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1a7cCPo4mqMuv1SS_gwUr_FSHmYoeq37ficmMb_1HU"

            // },
            params:{
                api_key:"706c69f1b5c49e6882c22334e6478895"
            }
        })
            .then((result) => {
                console.log(result);

                setData(result.data.results)


            }).catch((err) => {

            })

        console.log('this is from useeffect');

    }, [])


    return (
        <div className=''>
            {data.map((obj, index) => {
                return (
                    <div>

                        <img src={"https://image.tmdb.org/t/p/w500"+ obj.profile_path} 
                        alt="" 
                        
                        height={450}/>
                        <h1>{obj.original_name}</h1>
                    </div>
                )
            })

            }



        </div>
    )
}

export default Actors
