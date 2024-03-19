import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import Mood from "./Pages/Mood.jsx";
import Info from "./Pages/Info.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./authentication/Login.jsx";
import './App.css';



import { BrowserRouter, Routes, Route} from "react-router-dom";
import Authentication from "./authentication/Authentication.js";

function App() {
 
  // console.log(date + 3600*1000);
  const code = new URLSearchParams(window.location.search).get("code");
  console.log("render");
  const [accessToken, setAccessToken] = useState("");

  window.location.hash = "";

  return (!code)? (<Login/>) :(
    <BrowserRouter>
      <Authentication code={code} setAccessToken={setAccessToken}/>
      <Nav/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/mood" element={<Mood/>}/>
      <Route path="/info/:id" element={<Info accessToken={accessToken} />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

