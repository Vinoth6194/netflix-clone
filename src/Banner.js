import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      console.log(request.data.results);
      setMovie(
        request.data.results[17] //Math.floor(Math.random() * request.data.results.length - 1);
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header>
      {/* background image */}
      {/* title  */}
      {/* buttons mylist and play */}
      {/* description */}
    </header>
  );
}

export default Banner;
