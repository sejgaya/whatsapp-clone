import React from 'react'
import './css/login.css'
import { auth,provider } from './firebase'
import { useStateValue } from './StateProvider'

function Login() {
    const [{},dispatch] = useStateValue()
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
           dispatch({
            type:"SET_USER",
            user:result.user
           })
        }).catch(error=>alert(error))
    }
  return (
    <div className='login__wrapper'>
        <div className='login'>
        <img src="https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-whatsapp-icon-social-media-png-image_6618452.png"/>
      <h2>Sign in to WhatsApp</h2>
      <button onClick={signIn}>Login with Gmail</button>
    </div>
    </div>
  )
}

export default Login
