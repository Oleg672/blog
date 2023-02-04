import React from 'react';

function ArticleVideo(video) {
    return (
        <div className="articles__video">
            <img src={video} alt="contetnt" className="articles__picture" />
            
        </div>
    );
}

export default ArticleVideo;