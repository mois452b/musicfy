const RecommendedSection = () => {
    const recommendedSongs = [
      {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      },
      {
        id: 2,
        title: "Save Your Tears",
        artist: "The Weeknd",
        cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
      },
      {
        id: 3,
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        cover: "https://i.scdn.co/image/ab67616d0000b273c1df4d3a0a03a2d1b3b0e5c5",
      },
      {
        id: 4,
        title: "good 4 u",
        artist: "Olivia Rodrigo",
        cover: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
      },
    ];
  
    return (
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Recomendados para ti</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendedSongs.map((song) => (
            <div key={song.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer">
              <div className="mb-4">
                <img src={song.cover} alt={song.title} className="w-full aspect-square object-cover rounded" />
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