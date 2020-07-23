import React, {useState, useEffect} from "react";
import YoutubeSearch from "../api/YoutubeSearch";

const KEY = "AIzaSyDWS-sSI4V6lz35dZ9sau4ET58CIqDp-ow";

const useVideos = ({defaultSearchTerm}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response =  await YoutubeSearch.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: KEY
        }
      });

    setVideos(response.data.items);
  };

  return[videos, search];
}

export default useVideos;
