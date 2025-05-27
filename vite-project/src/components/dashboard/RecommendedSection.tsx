import { useEffect, useState } from "react";
import PlayerControls from "./PlayerControls"; // Asegúrate que esté en la ruta correcta

interface Song {
  id: string;
  title: string;
  genre: string;
  artist: string;
  source: string; // trackId
  image_url: string;
}

const RecommendedSection = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);

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

  return (
    <div className="mb-28">
      <h2 className="text-2xl font-bold text-white mb-6">Recomendados para ti</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            
            onClick={() => handlePlay(song.source)}
            className={`bg-gray-800 p-4 rounded-lg transition cursor-pointer hover:bg-gray-700 ${
              currentTrackId === song.source ? "ring-2 ring-green-500" : ""
            }`}
          >
            <img
              src={song.image_url}
              alt={song.title}
              className="w-full aspect-square object-cover rounded mb-2"
            />
            <h3 className="text-white font-medium">{song.title}</h3>
            <p className="text-gray-400 text-sm">{song.artist}</p>
          </div>
        ))}
      </div>

      {currentTrackId && <PlayerControls trackId={currentTrackId} />}
    </div>
  );
};

export default RecommendedSection;
