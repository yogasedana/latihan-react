import React, {Component} from "react";
import YouTubeComp from "../../component/YoutubeComp/YouTubeComp";

class Home extends Component {
    render () {
        return (
            <div>
                <p>Youtube Component</p>
                <hr />
                <YouTubeComp 
                time="7.21" 
                title="Langkah 1" 
                desc="Yoga Sedana (RYGH) . 50 x ditonton . 1 hari yang lalu"/>
                <YouTubeComp 
                time="10.11" 
                title="Langkah 2" 
                desc="Yoga Sedana (RYGH) . 100 x ditonton . 2 hari yang lalu"/>
                <YouTubeComp 
                time="9.01" 
                title="Langkah 3" 
                desc="Yoga Sedana (RYGH) . 6 x ditonton . 3 hari yang lalu"/>
                <YouTubeComp 
                time="8.20" 
                title="Langkah 4" 
                desc="Yoga Sedana (RYGH) . 510 x ditonton . 4 hari yang lalu"/>
                <YouTubeComp />
            </div>
        )
    }
}

export default Home;