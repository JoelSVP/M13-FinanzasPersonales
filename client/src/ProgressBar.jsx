import React, { useState, useEffect } from "react";
import './style.css';

const ProgressBar = () => {
    const currentSavings = 2500;
    const totalSavings = 5000;

    const progress = (currentSavings / totalSavings) * 100;

    const progressBarStyle = {
        width: '80%',
        height: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        margin: '20px 0',
    };

    const fillStyle = {
        width: `${progress}%`,
        height: '100%',
        backgroundColor: '#4caf50',
        borderRadius: 'inherit',
    };

    return (
        <div className="progress-bar-container">
            <div style={progressBarStyle}>
                <div style={fillStyle}></div>
                <p>{`${currentSavings} / ${totalSavings}`}</p>
            </div>
        </div>

    );
};
export default ProgressBar;
