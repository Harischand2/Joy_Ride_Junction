import React from 'react'
import '../styles/Login.css';


const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientId = 'ef14b335fecf485dafeb34b34918c1b8';
const redirectUri = 'http://localhost:3000';
const scope = ['streaming', 'user-library-read', 'playlist-read-private', 'user-read-playback-state', 
'user-modify-playback-state', 'user-read-email', 'user-read-private', 'user-library-modify'];
const loginEndpoint= `${authEndpoint}client_id=${clientId}&response_type=code
&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&show_dialog=false`;

localStorage.clear()
export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  )
}
