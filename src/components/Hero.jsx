import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/Hero.css'
import data from '../assets/songData.js';
import { useState } from 'react';

function Card({ title, artist, imgurl }) {
    return (
        <div className="cards">
            
            <img id="card-img" src={imgurl} alt="" />
            <h3 id="song-name">{artist}</h3>
            <h4 className='secondary-text' id="des">{title}</h4>
            <div id="play-logo">
                <FontAwesomeIcon icon={faPlay} size="xl" style={{ color: "#fcfcfd",}} onclick={playPause} />
            </div>
        </div>
    )
}


function Hero() {
    const [dropDown, setDropDown] = useState(false);
    const [songs, setSongs] = useState(data)
    const [isPlaying, setisPlaying] = useState(false)
    const [nextSong, setNextSong] = useState();
    const [currentSong, setcurrentSong] = useState(data[0]);
    // console.log(currentSong)
    let audioElm = useRef();

    function playPause() {
        setisPlaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            audioElm.current.play();
        } else {
            audioElm.current.pause();
        }
    }, [isPlaying])


    function showdropdown() {
        setDropDown(!dropDown)
    }
    return (
        <div className="hero">
            <div className="hero-top">
                <h1>Discover Soul</h1>
                <div className="hero-top-right">
                    <h4>Soul</h4>
                    <FontAwesomeIcon icon={faCaretDown} onClick={showdropdown} />
                    {
                        dropDown && <div className="drop-down">
                            <div className="drop-down-items">
                                <h5>Top</h5>
                            </div>
                            <div className="drop-down-items">
                                <h5>Saved</h5>
                            </div>
                            <div className="drop-down-items">
                                <h5>Hit</h5>
                            </div>
                            <div className="drop-down-items">
                                <h5>Liked</h5>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="hero-main">
                {
                    data.map((songs) => (
                        <Card title={songs.title} artist={songs.artist} imgurl={songs.artwork} />
                    ))
                }

            </div>
        </div>
    )
}

export default Hero