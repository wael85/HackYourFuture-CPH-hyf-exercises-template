import React ,{useState,useEffect} from 'react';
export function RenderPosts({userId}){
      const [posts , setPosts] = useState([]) ;
      useEffect(()=>{
          if(!userId){
            return;
          }
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
          .then(res => res.json())
          .then(res =>setPosts(res) );
      },[userId])
   
      if(!userId){
          return 'User not Login'
      }
     if (posts.length === 0){
         return 'loding...'
     }
      

    return(
    posts.map(post => <p>{post.title}</p>)
    );
}