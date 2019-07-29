import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nigthMode, ...props }) => (
  <StyledPlaylist>
    <Nightmode nightModeCallback={nightModeCallback} nigthMode={nigthMode} />
    <PlaylistHeader active={active} total={videos.length} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
)

export default Playlist;
