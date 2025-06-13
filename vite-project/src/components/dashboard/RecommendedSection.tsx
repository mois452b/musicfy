import { useEffect, useState } from "react";
import PlayerControls from "./PlayerControls"; // Asegúrate que esté en la ruta correcta
import DisplayMusics from "./DisplayMusics";

export interface Song {
  id: string;
  title: string;
  genre: string;
  artist: string;
  source: string; // trackId
  image_url: string;
  listenings: number;
}

const RecommendedSection = ({ searchTerm, selectedGenre }: { searchTerm: string, selectedGenre: string }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [recommended, setRecommended] = useState<boolean>(false);

  const handleRecommendedClick = () => {
    setRecommended(!recommended);
  };

  useEffect(() => {
    fetch("https://didactic-trout-5ggxpq5w7w69cq5r-5000.app.github.dev/api/musics")
      .then((res) => res.json())
      .then((data) => setSongs(data.data))
      .catch((error) => console.error(error)) 
  }, []);

  const handlePlay = (trackId: string) => {
    setCurrentTrackId(trackId);
    console.log(trackId)
  };

  let filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((song) =>
    selectedGenre ? song.genre.toLowerCase() === selectedGenre.toLowerCase() : true
  )

  if (recommended) {
    filteredSongs = filteredSongs
      .sort((a, b) => b.listenings - a.listenings)
      .slice(0, 8); 
  }
  
  return (
    <div className="mb-28">
      <button
        className="my-3 group relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        onClick={handleRecommendedClick}
      >
        <span className="absolute inset-0 rounded-full bg-green-700 opacity-0 group-hover:opacity-10 transition-opacity"></span>
        🎵 Ver Recomendados
      </button>
      <DisplayMusics musics={filteredSongs} onClick={(song) => handlePlay(song.source)}></DisplayMusics>
     
      {currentTrackId && <PlayerControls trackId={currentTrackId} />}
    </div>
  );
};

export default RecommendedSection;
