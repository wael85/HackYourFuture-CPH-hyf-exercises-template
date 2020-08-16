import React , {useState} from 'react';
export function Login ({userId ,setUserId}){
    const [user , setUser] = useState(userId || '');
    const onSubmit = (e)=>{
        e.preventDefault();
        setUserId(user);

    }

    return(
      <form onSubmit = {onSubmit}>
          <input type = "text" id = "user-name" name ="username" value={user} onChange={(e)=>setUser(e.target.value)}/>
          <button type = "submit">Login</button>
      </form>
    );
}