import Sidebar from './Sidebar';
import RecommendedSection from './RecommendedSection';
import { useState } from "react";
import TopCity from './TopCity';

const Dashboard = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedCity, setSelectedCity] = useState("Ciudad Guayana");
  const [selected, setSelected] = useState<string>("genre");

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Sidebar 
        onSearch={setSearchTerm} 
        setSelectedGenre={setSelectedGenre} 
        selectedGenre={selectedGenre} 
        setSelectedCity={setSelectedCity} 
        selectedCity={selectedCity}
        selected={selected}
        setSelected={setSelected}
      />
      <main className="ml-64 p-8">
        {selected === 'city' && <TopCity selectedCity={selectedCity} />}
        {selected === 'genre' && <RecommendedSection searchTerm={searchTerm} selectedGenre={selectedGenre}/>}
      </main>
    </div>
  );
};

export default Dashboard;
