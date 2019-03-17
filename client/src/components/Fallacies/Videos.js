import React, { Fragment } from 'react';
import YouTube from 'react-youtube';

const Videos = ({videoType}) => {
    return (
        <Fragment>
            {
                videoType.map((video, i) => {
                    return <div key={i}>
                        <YouTube
                            videoId={video}
                            opts={{
                                height: '100%',
                                width: '100%',
                                playerVars: { color: 'white' }
                            }}
                        />
                    </div>
                })
            }
        </Fragment>
    )
}

export default Videos;