import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginuser } from '../../redux/slice/userSlice'
import './loginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessToken = useSelector(state=>state.user.accessToken);

  useEffect(()=>{
    if(accessToken){ 
      console.log("Redirecting to homepage");
      navigate("/");
    }
  },[accessToken,navigate])

  const handleLogin =()=>{
    console.log("login");
    dispatch(loginuser());

  }

  return (
    // div.login>div.login__container>img+button+p
    // shortcut for below boiler plate
    <div className="login">
        <div className="login__container">
            <img src="images\youtube_logo.png" alt="" />
            <button onClick={handleLogin}>Login with google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen
