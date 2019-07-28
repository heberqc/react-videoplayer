import React from 'react';
import ReactPlayer from 'react-player';
import StyleVideoWrapper from './styles/StyledVideoWrapper';
import StyleVideo from './styles/StyledVideo';

const Video = ({ active, autoplay, endCallback, progressCallback , ...props}) => (
  <StyleVideo>
    <StyleVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0 }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endCallback}
        onProgress={progressCallback}
      />
    </StyleVideoWrapper>
  </StyleVideo>
)

export default Video;
