import { useState } from "react";

interface Song {
  id: string;
  title: string;
  genre: string;
  artist: string;
  source: string; 
  image_url: string;
  listenings: number;
}

const DisplayMusics = ({ musics, onClick }: { musics: Song[], onClick: (song:Song) => void }) => {
  
  const [selected, setSelected] = useState<Song | null>(null);

  const handleClick = (song: Song) => {
    setSelected(song); 
    onClick(song);
  };

  return (
    <div className="mb-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {musics.map((song) => (
          <div
            key={song.id}
            
            onClick={() => handleClick(song)}
            className={`bg-gray-800 p-4 rounded-lg transition cursor-pointer hover:bg-gray-700 ${
              selected?.id === song.id ? "ring-2 ring-green-500" : ""
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
    </div>
  );
};

export default DisplayMusics;
