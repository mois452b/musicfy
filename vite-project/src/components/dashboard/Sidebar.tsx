const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Musicfy</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-white hover:text-green-500 transition">
                <span className="mr-3">🏠</span>
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition">
                <span className="mr-3">🔍</span>
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;