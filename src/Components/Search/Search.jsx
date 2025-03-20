import axios from 'axios'
import React, { useState } from 'react'

function Search() {
    let [data, setData] = useState([])
    function fetchData(event) {

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${event.target.value}`,
                {

                    params: {
                        api_key: "706c69f1b5c49e6882c22334e6478895"
                    }

                })
            .then((result) => {
                
                console.log(result);

                setData(result.data.results)


            }).catch((err) => {
                console.log(err);
                

            })
    }

    return (
        <div className='inputfield'>

            <input type="text" onChange={fetchData} />
            {

                data.map((obj, index) => {
                    return (
                        <div className='searchelement'>
                            <h4>{obj.orginal_title}</h4>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Search
