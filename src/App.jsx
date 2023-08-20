import { useState,useRef } from 'react';
import data from './assets/songData.js';
import Artist from './components/Artist';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopChart from './components/TopChart';
import './App.css';

function App() {
  const [songs, setSongs]  = useState(data)
  const [isPlaying,setisPlaying]= useState(false)
  const [nextSong,setNextSong]= useState();
  const [currentSong,setcurrentSong]= useState(data[0]);


  const audioElm = useRef();
  function playPause(id){
    setisPlaying(!isPlaying)
  }
  return (
    <>
    <Sidebar></Sidebar>
    <Navbar/>
    <Hero playPause={playPause} setcurrentSong={setcurrentSong}/>
    <TopChart/>
    <Artist/>
    <MusicPlayer songs={songs} isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong}
     setcurrentSong={setcurrentSong} audioElm={audioElm} playPause={playPause}/>
    </>
  );
}

export default App;
