import React from 'react'
import { Home,Hash,Image,User2 } from 'lucide-react';
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/653/792/small/music-man-gamer-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
                alt=""/>
        </div>
        <div className="sidebar-list">
            <Home id="side-bar-icon" color="#ffffff"/>
            <p>Dicsover</p>
        </div>
        <div className="sidebar-list">
            <Image color="#ffffff"/>
            <p>Around You</p>
        </div>
        <div className="sidebar-list">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
            <p>Top Artist</p>
        </div>
        <div className="sidebar-list">
            <div id="side-bar-icon"><Hash color="#ffffff"/></div>
            <p>Top Charts</p>
        </div>
    </div>
  );
}

export default Sidebar;