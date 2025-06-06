import { useState, useEffect } from "react";

const Sidebar = (
  { onSearch, setSelectedGenre, selectedGenre }: 
  { onSearch: (query: string) => void, setSelectedGenre: (genre: string) => void, selectedGenre: string }
) => {
  const [query, setQuery] = useState("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  useEffect(() => {
    fetch("https://didactic-trout-5ggxpq5w7w69cq5r-5000.app.github.dev/api/musics/genres")
      .then((res) => res.json())
      .then((data) => setGenres(data.data || []))
      .catch((error) => console.error("Error cargando géneros:", error));
  }, []);

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 drop-shadow-md">
            Musicfy
        </h1>
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar canción"
        className="w-full p-2 rounded bg-gray-800 text-white mb-4"
      />

      <h3 className="text-white text-lg font-semibold mb-2">Géneros</h3>
      <ul className="space-y-2">
        {genres.map((genre, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedGenre(genre === selectedGenre ? "" : genre)}
              className={`w-full text-left transition ${
              genre === selectedGenre
                ? "text-green-400 font-bold"
                : "text-gray-400 hover:text-green-400"
              }`}
            >
              🎵 {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
