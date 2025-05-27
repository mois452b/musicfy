import Sidebar from './Sidebar';
import RecommendedSection from './RecommendedSection';
import PlayerControls from './PlayerControls';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Sidebar />
      <main className="ml-64 p-8">
        <RecommendedSection />
      </main>
    </div>
  );
};

export default Dashboard;
