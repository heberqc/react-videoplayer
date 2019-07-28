import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({ nightModeCallback, nightmode, ...props }) => (
  <StyledNightmode>
    <span>Nightmode:</span>
    <label class="switch">
      <input type="checkbox" checked={nightmode} onChange={nightModeCallback} />
      <span class="slider round" />
    </label>
  </StyledNightmode>
)

export default Nightmode;
