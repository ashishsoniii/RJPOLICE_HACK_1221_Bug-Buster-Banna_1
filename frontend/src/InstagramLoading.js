import React from 'react';
import PoliceLogo from "./photos/Logo-police.png"

function InstagramLoading() {
    return (
        <div className="instagram-loading-container">
            <img style={{position:"absolute",left:"48%",top:"25%"}} width="100px" src={PoliceLogo} alt="instagram"/>
        </div>
    );
}

export default InstagramLoading;