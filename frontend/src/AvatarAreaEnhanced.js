import React from 'react';
import "./Avtar.css";

function AvatarAreaEnhanced() {
    return (
        <div><div className="card">
            <img className='my_image' src='https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/Logo.png' alt="Avatar" style={{width:"50%"}}/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Computer Science Engineer</p>
                </div>
        </div></div>
    )
}

export default AvatarAreaEnhanced