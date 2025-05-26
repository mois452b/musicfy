import { useEffect, useState } from "react";

const RecommendedSection = () => {
    const [songs, setSongs] = useState([])
    console.log(songs)

    useEffect(() => {
      fetch('http://localhost:5000/api/musics')
      .then(response => response.json())
      .then(data => setSongs(data.data))
    }, [])
  
    return (
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Recomendados para ti</h2>

       <iframe 
             src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P?utm_source=generator" 
             width="100%" height="80" frameBorder="0" allowfullscreen="" 
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
             loading="lazy"></iframe>

        <audio src="https://open.spotify.com/track/0sf12qNH5qcw8qpgymFOqD" controls ></audio>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {songs.map((song) => (
            <div key={song.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer">
              <div className="mb-4">
                {song.source}
                <img src={song.image_url} alt={song.title} className="w-full aspect-square object-cover rounded" />
              </div>
              <h3 className="text-white font-medium">{song.title}</h3>
              <p className="text-gray-400 text-sm">{song.artist}</p>
            </div>
          ))}
        </div>

      </div>
    );
  };

  
  export default RecommendedSection;