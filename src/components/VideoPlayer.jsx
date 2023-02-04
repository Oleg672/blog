import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css'


function VideoPlayer(props) {
    return (
        <Video  loop
            poster={props.poster}
        >
            <source src={props.video} type='video/webm' />
        </Video>


    );
}

export default VideoPlayer;