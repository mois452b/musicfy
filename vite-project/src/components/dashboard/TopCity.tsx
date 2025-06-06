import React, { useState, useEffect } from 'react';
import PlayerControls from './PlayerControls'; // Asegúrate que esté en la ruta correcta
import DisplayMusics from './DisplayMusics';
import type { Song } from './RecommendedSection';

const TopCity = (
    { selectedCity }:
    { selectedCity: string }
) => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://didactic-trout-5ggxpq5w7w69cq5r-5000.app.github.dev/api/musics/recommendations/city/" + selectedCity)
        .then((res) => res.json())
        .then((data) => setSongs(data.data))
        .catch((error) => console.error(error)) 
    }, [selectedCity]);

    const handlePlay = (trackId: string) => {
        setCurrentTrackId(trackId);
        console.log(trackId)
    };

    return (
    <div className="mb-28">
      {/* <button
        className="group relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        onClick={handleRecommendedClick}
      >
        <span className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-10 transition-opacity"></span>
        🎵 Ver Recomendados
      </button> */}
      <DisplayMusics musics={songs} onClick={(song) => handlePlay(song.source)}></DisplayMusics>
     
      {currentTrackId && <PlayerControls trackId={currentTrackId} />}
    </div>
  );

};

export default TopCity;