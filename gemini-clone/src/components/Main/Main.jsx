import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gempolan</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
            
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
                </>
                
            :<div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />   
                    <p>{recentPrompt}</p>                 
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />                        
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Tulisen pitakonmu nek kene'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Iso ugo Gempolan wenehi info seng ora pener, mangkane ojo langsung percoyo, di-cek sek
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main