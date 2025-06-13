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
      <div className="relative mb-8">
        <h2 className="text-3xl font-extrabold text-white tracking-wide">
          <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text animate-pulse">
            Descubre las canciones más populares en {selectedCity}
          </span>
        </h2>
        <div className="w-16 h-1 bg-green-500 rounded mt-2 animate-fade-in" />
      </div>
    
      <DisplayMusics musics={songs} onClick={(song) => handlePlay(song.source)}></DisplayMusics>
     
      {currentTrackId && <PlayerControls trackId={currentTrackId} />}
    </div>
  );

};

export default TopCity;