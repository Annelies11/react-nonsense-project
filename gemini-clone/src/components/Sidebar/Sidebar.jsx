import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>Guneman Enggal</p>
            </div>
            <div className="recent">
                <p className="recent-title">Sakmeniko</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>Opo iku react ...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            
        </div>        
    </div>
  )
}

export default Sidebar