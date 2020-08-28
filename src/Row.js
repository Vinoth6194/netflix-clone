import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [])
    return (
        <div>
            {/* titles */}
           <h2>{title}</h2> 
           {/* containers -> posters */}
        </div>
    )
}

export default Row
