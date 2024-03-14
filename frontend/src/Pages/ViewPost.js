// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const ViewPost = () => {
    //     const [apiData, setApiData] = useState([]);
    //     useEffect(() => {
        //         (async () => {
            //             try{
                //                 // http://localhost:3001/posts
                //                 const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
//                     headers: {
    //                         authorization: "Bearer " + localStorage.getItem("jwtToken")
//                     }

//                 });
//                 setApiData(response.data);
//                 // console.log(apiData);
                
//             }
//             catch(error){
    //                 // console.log("sjjs");
//                 console.log(error);
//             }

//         })()
//     }, []);
//   return (
    //     // <div>
    //     //     <ul>
//     //         {apiData.map((item) => (
//     //         <li key={item.id}>
//     //             <h3>{item.title}</h3>
//     //             <p>{item.body}</p>
//     //         </li>
//     //         ))}
//     //     </ul>
//     // </div>
//     <div className="post-container">
//       {apiData.map((post) => (
    //         <div key={post.id} className="post-card">
//           <h2 className="post-title">{post.title}</h2>
//           <p className="post-content">{post.body}</p>
//         </div>
//       ))}
//     </div>

//   )
// }

// export default ViewPost;


import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './PostsPage.css';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem("jwtToken")){
      (async()=>{
        try{
          const response = await axios.get("http://localhost:3001/posts", {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
          })
          // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
          // console.log(response)
          setPosts(response.data);
        }
        catch(error){
          console.log(error);
        }
      })()
      setLogin(true);
  }
  else{
    setLogin(false);
  }
  }, []);

  return (
    <div className='whole'>
        {!login && <h1 className='text-center font-bold text-xl'>Please Login First</h1>}
        {login &&
            <div className="post-container">
                {posts.map((post) => (
                <div key={post._id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                ))}
            </div>
        }
    </div>
  );
}

export default Post;
