import Sidebar from './Sidebar';
import RecommendedSection from './RecommendedSection';
import { useState } from "react";

const Dashboard = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Sidebar onSearch={setSearchTerm} setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
      <main className="ml-64 p-8">
        <RecommendedSection searchTerm={searchTerm} selectedGenre={selectedGenre}/>
      </main>
    </div>
  );
};

export default Dashboard;
