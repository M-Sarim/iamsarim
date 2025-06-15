import React from 'react';
import PaletteIcon from '@images/palette-icon.svg';

const IconTheme = () => (
  <img
    src={PaletteIcon}
    alt="Color Palette"
    title="Color Palette"
    style={{
      width: '20px',
      height: '20px',
      objectFit: 'contain',
      display: 'block',
      filter: 'brightness(0) saturate(100%) invert(71%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(97%) contrast(89%)', // Same light gray as other social icons
      transition: 'transform 0.3s ease, filter 0.3s ease',
    }}
  />
);

export default IconTheme;
