
import './App.css';
import Artist from './components/Artist';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopChart from './components/TopChart';

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
