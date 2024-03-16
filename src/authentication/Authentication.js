import React, {  useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const Authentication=({code, setAccessToken}) => {
    const [expiresIn, setExpiresIn] = useState("");
    const requestAccessToken = async () => {
    const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
         Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      }
    };
    const data = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http://localhost:3000'
    };
  
    try {  const authString = btoa(`${clientId}:${clientSecret}`);
    headers['Authorization'] = `Basic ${authString}`;
      const response_ac = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      // console.log("my data "  + JSON.stringify(response.data));
      return response_ac;
    } catch (error) {
      console.log(error);
    }
  };

  const RefreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
    const headers = {
      headers:{
         Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
         Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      }
    };
    const data = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
    };

    try{
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      console.log("Refresh...  "  + JSON.stringify(response.data));
      return response;
    }
    catch(error){
      console.log(error);
    }

  };

      const checkAuth = async () => {
        const storedAccessToken = localStorage.getItem("accessToken");
        if (!storedAccessToken){
          const response_a= await requestAccessToken();
          const date = new Date().getTime();
          localStorage.setItem("accessToken", response_a.data.access_token);
          localStorage.setItem("refreshToken", response_a.data.refresh_token);
          // temp val , actual val = date+response_a.data.expires_in*1000;
          const expirationTime = date + response_a.data.expires_in*1000;
          localStorage.setItem("expiresIn", expirationTime);
          setAccessToken(response_a.data.access_token);
          setExpiresIn(expirationTime);
          console.log("Im here");
        }
        else{
          // we have a valid access token
          const refresh_date = new Date().getTime()-(60*1000);
          const storedExpiresIn = localStorage.getItem("expiresIn");
          if( refresh_date > storedExpiresIn){
            console.log("Refreshing tokens");
            const res = await RefreshToken();
            localStorage.setItem("accessToken", res.data.access_token);
            const expirationTime = refresh_date + res.data.expires_in*1000;
            // no need to store the refresh token as it is being reused
            localStorage.setItem("expiresIn", expirationTime);
            setAccessToken(res.data.access_token);
            setExpiresIn(expirationTime);
          }

        }
      };
     
  

      useEffect(() => {

        if(code){
         checkAuth();
         const intervalId = setInterval(() => {
              console.log(" 59 min has passed");
              console.log(" Refreshing ..");
            checkAuth(); 
          }, (3540*1000)) //  every 59 min we call to update the access token
          return () => clearInterval(intervalId); // Cleanup on unmount
      }
       }, [code]);
    return null;
};

export default Authentication;

  