import Artist from './components/Artist';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopChart from './components/TopChart';
import './App.css';

function App() {
  return (
    <>
    <Sidebar></Sidebar>
    <Navbar/>
    <Hero/>
    <TopChart/>
    <Artist/>
    <MusicPlayer/>
    </>
  );
}

export default App;
