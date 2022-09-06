import React from "react";
import './YouTubeComp.css';


const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://img.youtube.com/vi/hYz_xqz10q8/maxresdefault.jpg" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'Yoga Sedana (RYGH) . 00 x ditonton . 0 hari yang lalu'
}

export default YouTubeComp;