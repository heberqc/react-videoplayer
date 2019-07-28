import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played, ...props}) => (
  <StyledPlaylistItem active={active} played={played}>
    <div class="wbn-player__video-nr">{video.num}</div>
    <div class="wbn-player__video-name">{video.title}</div>
    <div class="wbn-player__video-time">{video.duration}</div>
  </StyledPlaylistItem>
)

export default PlaylistItem;
