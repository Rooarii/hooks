import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {

  const [data, setData] = useState({ hits: [] });
 
  // the below useEffect is similar to a coponentDidMount. 
  // the array at the end of useEffect has to be empty otherwise it would also b a componentDidUpdate
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
   
        setData(result.data);
      } catch (error) {
        console.log(`ERROR MESSAGE: ${error.message}`)
      }
    };
    fetchData();
  }, []);
 
  const { hits } =data
  console.log(data)
  return (
    <Fragment>
      <p></p>
      {hits.map(
        element => 
        <p key={element.title}>
          {element.title}
        </p>
      )}
    </Fragment>
  );
}

export default Axios;
