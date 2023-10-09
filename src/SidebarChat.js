import { Avatar } from '@mui/material'
import React from 'react'
import './css/sidebar.css';
import  {useEffect,useState} from 'react'
import db from './firebase';
import {Link} from 'react-router-dom'


function SidebarChat({id,name,addnewchat}) {

const [seed,setSeed] = useState("");
const [lastmessage,setLastMessage] = useState("");

useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));
    db.collection('rooms').doc(id).collection("message").orderBy("timestamp","desc").onSnapshot(snapshot=>setLastMessage(snapshot.docs.map(doc=>doc.data())))
      
},[])

const createChat=()=>{
  const room = prompt('Please enter room name');
  if(room){
    db.collection('rooms').add({
      name:room
    })
  }
}

  return (
    !addnewchat ? (
      <Link to={`/room/${id}`}>
        <div className='sidebar__chat'>
      <Avatar src={`https://api.dicebear.com/7.x/pixel-art/svg?${seed}`}/>
      <div className='sidebar__chatInfo'>
      <h2>{name}</h2>
      <p>{lastmessage[0]?.massage}</p>
      </div>
    </div>
    </Link>
    ):(
    <div className='sidebar__chat' onClick={createChat}>
      <h2> Add New Chat</h2>
    </div>
    )
  )
}

export default SidebarChat
