import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies);
    return (
        <div>
            {/* titles */}
           <h2>{title}</h2> 
           {/* containers -> posters */}
        </div>
    )
}

export default Row
