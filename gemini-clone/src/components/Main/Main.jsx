import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gempolan</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Sugeng Rawuh, Bolo.</span></p>
                <p>Wonten Nopo?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Nyaranke papan wisata paling mening seng kudu diparani</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Jeneng anak seng apik kanggo seng lahir jumat kliwon</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Nyangopo Tuyul saiki akeh seng do pensiun?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Kegiatan seng kudu dilakoni pas sir-siranmu dirabi wong seng luwih sugih timbang awakmu</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main