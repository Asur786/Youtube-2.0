import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import './_app.scss';
import { useSelector } from "react-redux";


import Layout from "./layout"
import WatchScreen from "./screens/watchScreen/WatchScreen";


const App = () => {

  const { accessToken, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();


  useEffect(()=>{
    if(!accessToken && !loading){
      navigate("/auth");
    }
  },[accessToken,loading,navigate]);

  return (

      <Routes>
        <Route path='/' element={<Layout children={<HomeScreen/>}/>}/>
        <Route path='/auth' element={<LoginScreen />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route path='/watch/:id' element={<Layout children={<WatchScreen/>}/>} />

        <Route path='/search' element={<Layout><h1>Search Results</h1></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

  );
};

export default App;
