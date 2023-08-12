import React from 'react'
import '../styles/Artist.css'

function Artist() {
    return (
        <div class="artist-container">
            <div class="artist-header">
                <h3>Top Artist</h3>
                <h4 class="secondary-text">See More</h4>
            </div>
            <div class="artist-img">
                    <img src="https://samplesongs.netlify.app/album-arts/faded.jpg" alt=""/> 
                    <div><img src="https://samplesongs.netlify.app/album-arts/faded.jpg" alt=""/></div>
                    <div><img src="https://samplesongs.netlify.app/album-arts/faded.jpg" alt=""/></div>
                    <div><img src="https://samplesongs.netlify.app/album-arts/faded.jpg" alt=""/></div>
                    <div><img src="https://samplesongs.netlify.app/album-arts/faded.jpg" alt=""/></div> 

            </div>
        </div>
    )
}

export default Artist