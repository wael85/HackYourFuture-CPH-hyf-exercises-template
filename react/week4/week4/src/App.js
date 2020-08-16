import React, { useState } from 'react';
import {Login } from './Login';
import './App.css';
import {RenderPosts} from './RenderPosts';
import {Albums} from './Alboms';
function App() {
  const [ userId , setUserId] = useState(null);
  return (
    <div className="App">
      <Login  userId ={userId} setUserId = {setUserId}/>
      <RenderPosts  userId = {userId} />
      <Albums userId = {userId}/>
    </div>
  );
}

export default App;
