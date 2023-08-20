import React, {useEffect,useRef } from 'react'
import '../styles/MusicPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faForward,faBackward } from '@fortawesome/free-solid-svg-icons'
// import data from '../assets/songData.js';

function MusicPlayer({songs,isPlaying,setisPlaying,currentSong,setcurrentSong ,audioElm,playPause}) {


// const audioElm = useRef();



useEffect(() => {
  if(isPlaying){
    audioElm.current.play();
  }else{
    audioElm.current.pause();
  }
}, [isPlaying])

function backSkip(){
    const index = songs.findIndex(x=>x.title == currentSong.title);
    console.log(index);
    // console.log(songs.length);
    console.log(currentSong.id);
    if(index == 0){
        setcurrentSong(songs[songs.length-1]);
        setisPlaying(!isPlaying)
       
    }else{
        setcurrentSong(songs[index-1])
        setisPlaying(!isPlaying)
    }
}
function skipNext(){
    const index = songs.findIndex(x=>x.title == currentSong.title);
   
    if(index == songs.length-1){
        setcurrentSong(songs[0])
        setisPlaying(!isPlaying)
       
    }else{
        setcurrentSong(songs[index+1])
        setisPlaying(!isPlaying)
    }
}

    return (
        <div class="musics-player">
            <div class="musics-player-left">
                <img src={currentSong.artwork} alt="" />
                <div class="musics-player-left-content">
                    <h4>{currentSong.artist}</h4>
                    <h5 class="secondary-text">{currentSong.title}</h5>
                </div>
            </div>
            <audio src={currentSong.audio} ref={audioElm}/>
            <div class="musics-player-middle">
                <div class="musics-player-middle-top">
                <FontAwesomeIcon icon={faBackward}  onClick={backSkip}/>
                {
                    !isPlaying? <FontAwesomeIcon icon={faPlay} onClick={playPause}/>:<FontAwesomeIcon icon={faPause} onClick={playPause}/>
                }
                <FontAwesomeIcon icon={faForward}  onClick={skipNext}/>
                </div>
                <div class="musics-player-middle-bottom">
                    <input type="range" value="0" id="progress" />
                </div>
            </div>
            <div class="musics-player-right">
                <input type="range" value="0" id="progress" />
            </div>
        </div>
    )
}

export default MusicPlayer