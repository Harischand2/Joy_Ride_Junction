import React, { useState, useEffect } from "react";
import "../styles/Info.css";
import axios from "axios";
import "../styles/Info.css";
import SpotifyPlayer from "react-spotify-web-playback";
import Content from "../components/Content";
import Footer from "../components/Footer.jsx";
import Mood_list from "../components/Mood_list.jsx";
import { useParams } from "react-router-dom";

function Info({ accessToken }) {
  const [playlists, setPlaylists] = useState(null);
  const [tracks, setTracks] = useState(null);
  // const [tracks_uri, setTracksURI] = useState( tracks[0].track.uri);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const params = useParams();
  const params_id = params.id;


  // const getProfile = async () => {
  //   const response = await axios.get(
  //     "https://api.spotify.com/v1/me/playlists",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     }
  //   );
  //   setPlaylists(response.data.items);
  //   console.log(response.data.items);
  //   return response.data.items;
  // };
  useEffect(() => {
    setPlaylists(Mood_list[params_id-1]['playlist_id'])
  }, [playlists, params_id, accessToken]);
  
 
  console.log("Mood list ", playlists);

  useEffect(() => {
    if (playlists) {
  
      // const playlistId = playlists[params_id - 1].id;
      const getTracks = async () => {
        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlists}/tracks?limit=20`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
    
          setTracks(response.data.items);
          // Handle response.data.items, for example, set it to state
        } catch (error) {
          console.error("Error fetching tracks:", error);
          // Handle error
        }
      };

      getTracks();
    }
  }, [accessToken, playlists]);

  let track_uri = null;
  let track_id = null;
  if (tracks) {
    track_uri = tracks[currentIndex].track.uri;
    track_id = tracks[currentIndex].track.id;
    // console.log("tracks  ",  )
  }

  useEffect(() => setPlay(true), [track_uri]);


  function handleNextTrack() {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePreviousTrack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }


  const saveTrack = async () => {
    // const clientId = process.env.REACT_APP_BASIC_CLIENT_ID;
    // const clientSecret = process.env.REACT_APP_BASIC_CLIENT_SECRET;
    const headers = {
      headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type' : 'application/json',
      }
    };
    const data={
      ids:[`${track_id}`]
    }

    try {  
      // console.log("In access", accessToken===localStorage.getItem["accessToken"])
      console.log(" track_id ", track_id)
      console.log("access_token ", accessToken)
      await axios.put(
        `https://api.spotify.com/v1/me/tracks`,
        data,
        headers
      );
      // console.log("my data "  + JSON.stringify(response.data));
      // return response;
    } catch (error) {
      console.log(error);
    }
  }





  const deleteTrack = async () => {

    try {  
      console.log(" track_id ", track_id)
      console.log("access_token ", accessToken)
      await axios.delete(
        `https://api.spotify.com/v1/me/tracks`,
        {
          data:{
            ids: [track_id]
        }, 
        headers: {
          //   Accept: 'application/json',
           'Content-Type' : 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }

        }

      );
      // console.log("my data "  + JSON.stringify(response.data));
      // return response;
    } catch (error) {
      console.log(error);
    }
  }
  // console.log("data id = ", data.ids)

  return tracks ? (
    <div className="container-fluid info_container">
      <div className="row">
        <Content element_id={params_id} />

        <div className="col-12 player_ ">
          <div className="row">
            <div className="col-12">
              <SpotifyPlayer
                magnifySliderOnHover
                showSaveIcon
                token={accessToken}
                callback={(state) => {
                  if (!state.isPlaying) setPlay(false);
                }}
                play={play}
                uris={
                  tracks[currentIndex].track.uri
                    ? [tracks[currentIndex].track.uri]
                    : []
                }
                styles={{
                  color: "brown",
                  sliderColor: "#1cb954",
                }}
              />
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button
                onClick={handlePreviousTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                Previous Track
              </button>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button
                onClick={handleNextTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                Next Track
              </button>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button
                onClick={saveTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                 Save Track
              </button>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button
                onClick={deleteTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                 Delete Track
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <></>
  );
}
export default Info;
