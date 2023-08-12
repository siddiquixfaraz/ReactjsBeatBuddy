import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import '../styles/Hero.css'
import data from '../assets/songData.js';

function Card({title,artist, imgurl}) {
  return (
    <div className="cards">

                    <img id="card-img" src= {imgurl} alt="" />
                    <h3 id="song-name">{artist}</h3>
                    <h4 className='secondary-text' id="des">{title}</h4>
                    <div id="play-logo">
                    <FontAwesomeIcon icon={faPlay} size="xl" style={{color: "#fcfcfd",}} />
                    </div>
    </div>
  )
}


function Hero() {
    return (
        <div className="hero">
            <div className="hero-top">
                <h1>Discover Soul</h1>
                <div className="hero-top-right">
                    <h4>Soul</h4>
                    <FontAwesomeIcon icon={faCaretDown} />
                    <div className="drop-down">
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
                </div>
            </div>
            <div className="hero-main">
                {
                    data.map((songs)=>(
                        <Card title={songs.title} artist={songs.artist} imgurl={songs.artwork}/>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Hero