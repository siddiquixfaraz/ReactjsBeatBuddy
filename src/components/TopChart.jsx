import React from 'react'
import '../styles/TopChart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import data from '../assets/songData.js';

function TopChart() {
    return (
        <div className="top-chart">
            <div className="top-chart-header">
                <h3>Top Charts</h3>
                <h4 className="secondary-text">See More</h4>
            </div>
            <div className="top-songs">
                {
                    data.map((songs) => (
                        <div className="top-chart-card">
                            <span>{songs.id}.</span>
                            <img src={songs.artwork} alt="" />
                            <div className="top-chart-content">
                                <h4>{songs.title}</h4>
                                <h5 className='secondary-text'>{songs.artist}</h5>
                            </div>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TopChart;