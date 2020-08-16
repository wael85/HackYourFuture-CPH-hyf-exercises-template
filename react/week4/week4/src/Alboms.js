import React ,{useState,useEffect} from 'react';
export function Albums({userId}){
      const [albums , setAlbums] = useState([]) ;
      useEffect(()=>{
          if(!userId){
            return;
          }
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
          .then(res => res.json())
          .then(res =>setAlbums(res) );
      },[userId])
   
      if(!userId){
          return 'User not Login'
      }
     if (albums.length === 0){
         return 'loding...'
     }
      

    return(
    <div>
        <h3>Albums</h3>
        {albums.map(album => <p>{album.title}</p>)}
    </div>    
    
    );
}