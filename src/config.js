module.exports = {
  email: 'muhammad2004sarim@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/M-Sarim',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/imuhammadsarim/',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@Muhammad.Sarim',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Testimonials',
      url: '/#testimonials',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    lightNavy: '#112240',
    lightestNavy: '#233554',
    slate: '#8892b0',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    white: '#e6f1ff',
    pink: '#f57dff',
    yellow: '#D946EF', // Fuchsia
    red: '#FB923C', // Sunset Orange
    purple: '#6366F1', // Royal Blue
    neonGreen: '#22C55E', // Neon Green
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    beforeReveal: () => {
      // Prevent any scrolling during reveal animations
      return true;
    },
  }),
};
