import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ViewPost = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        (async () => {
            try{
                const response = await axios.get("http://localhost:3001/posts", {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem("jwtToken")
                    }

                });
                setApiData(response.data);
                // console.log(apiData);
                
            }
            catch(error){
                // console.log("sjjs");
                console.log(error);
            }
            
        })()
    }, []);
  return (
    <div>
        <ul>
            {apiData.map((item) => (
            <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </li>
            ))}
        </ul>
    </div>

  )
}

export default ViewPost;