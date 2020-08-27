import React from 'react'

import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
    const videoSource = "./Desert_Dust_and_Dry_Tress_Living_Background__Free_HD_Stock_Footage.mp4E"
    return (
        <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    )
}

export default BackgroundVideo
