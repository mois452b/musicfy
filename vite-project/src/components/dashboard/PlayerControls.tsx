const PlayerControls = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" 
              alt="Song cover" 
              className="w-12 h-12 rounded mr-3" 
            />
            <div>
              <p className="text-white font-medium">Blinding Lights</p>
              <p className="text-gray-400 text-sm">The Weeknd</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <input 
              type="range" 
              min="0" 
              max="100" 
              className="w-24 mr-4" 
            />
            <span className="text-gray-400 text-sm">2:45 / 3:20</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlayerControls;