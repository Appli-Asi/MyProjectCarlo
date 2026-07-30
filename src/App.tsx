import './App.css';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

