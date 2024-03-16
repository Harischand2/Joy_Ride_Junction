import React, { useState, useEffect } from "react";
import "../styles/Info.css";
import axios from "axios";
import "../styles/Info.css";
import SpotifyPlayer from "react-spotify-web-playback";
import Content from "../components/Content";
import Footer from "../components/Footer.jsx";

import { useParams } from "react-router-dom";

function Info({ accessToken }) {
  const [playlists, setPlaylists] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [play, setPlay] = useState(false);
  const params = useParams();
  const params_id = params.id;

  const getProfile = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setPlaylists(response.data.items);
    return response.data.items;
  };
  useEffect(() => {
    getProfile();
  }, [accessToken]);

  useEffect(() => {
    if (playlists) {
   
      const playlistId = playlists[params_id - 1].id;
  

      const getTracks = async () => {
        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=20`,
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
  }, [accessToken, playlists, params_id]);
  let track_uri = null;
  if (tracks) {

    track_uri = tracks[0].track.uri;
  }

  useEffect(() => setPlay(true), [track_uri]);

  const [currentIndex, setCurrentIndex] = useState(0);
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
            <div className="col-6 text-center">
              <button
                onClick={handlePreviousTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                Previous Track
              </button>
            </div>
            <div className="col-6 text-center">
              <button
                onClick={handleNextTrack}
                type="submit"
                className="btn getstarted_btn"
              >
                Next Track
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
