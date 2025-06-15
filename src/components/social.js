import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

const StyledThemeToggle = styled.div`
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledThemeButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: var(--light-slate);
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover,
  &:focus {
    color: var(--green);
    transform: translateY(-3px);
    background-color: var(--green-tint);
    box-shadow: 0 4px 15px var(--accent-shadow);
  }

  svg {
    width: 20px;
    height: 30px;
  }

  img {
    transition: transform 0.3s ease, filter 0.3s ease, drop-shadow 0.3s ease;
  }

  &:hover img {
    transform: translateY(-3px);
    filter: var(--current-theme-filter, brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(2618%) hue-rotate(158deg) brightness(101%) contrast(102%)) !important;
    drop-shadow: 0 0 8px var(--green);
  }
`;

const StyledColorPalette = styled.div`
  position: absolute;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--light-navy);
  border-radius: 25px;
  padding: 10px 8px;
  border: 1px solid var(--lightest-navy);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);

  ${StyledThemeToggle}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const StyledColorButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.isActive ? '#ffffff' : 'transparent'};
  margin: 4px 0;
  cursor: pointer;
  transition: var(--transition);
  position: relative;

  &:hover {
    transform: scale(1.1);
    border-color: #ffffff;
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }) => {
  const [theme, setTheme] = useState('default');

  const colorThemes = [
    { name: 'default', color: '#64ffda', label: 'Default Cyan' },
    { name: 'yellow', color: '#D946EF', label: 'Fuchsia' },
    { name: 'purple', color: '#6366F1', label: 'Royal Blue' },
    { name: 'green', color: '#22C55E', label: 'Neon Green' },
    { name: 'red', color: '#FB923C', label: 'Sunset Orange' },
  ];

  useEffect(() => {
    // Always start with default theme on page load/reload
    setTheme('default');
    // Clear any previously saved theme but don't apply theme colors immediately
    // This keeps the palette icon gray like other social icons until user interaction
    localStorage.removeItem('portfolio-theme');
  }, []);

  const applyTheme = (themeName) => {
    const root = document.documentElement;

    switch (themeName) {
      case 'yellow':
        // Fuchsia theme - complete color replacement
        root.style.setProperty('--green', '#D946EF');
        root.style.setProperty('--green-tint', 'rgba(217, 70, 239, 0.1)');
        root.style.setProperty('--pink', '#E879F9');
        root.style.setProperty('--blue', '#C026D3');
        root.style.setProperty('--accent-shadow', 'rgba(217, 70, 239, 0.4)');
        root.style.setProperty('--accent-glow', 'rgba(217, 70, 239, 0.2)');
        root.style.setProperty('--current-theme-filter', 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(4467%) hue-rotate(251deg) brightness(101%) contrast(96%)');
        break;
      case 'purple':
        // Royal Blue theme - complete color replacement
        root.style.setProperty('--green', '#6366F1');
        root.style.setProperty('--green-tint', 'rgba(99, 102, 241, 0.1)');
        root.style.setProperty('--pink', '#818CF8');
        root.style.setProperty('--blue', '#4F46E5');
        root.style.setProperty('--accent-shadow', 'rgba(99, 102, 241, 0.4)');
        root.style.setProperty('--accent-glow', 'rgba(99, 102, 241, 0.2)');
        root.style.setProperty('--current-theme-filter', 'brightness(0) saturate(100%) invert(47%) sepia(69%) saturate(4467%) hue-rotate(225deg) brightness(101%) contrast(96%)');
        break;
      case 'green':
        // Neon Green theme - complete color replacement
        root.style.setProperty('--green', '#22C55E');
        root.style.setProperty('--green-tint', 'rgba(34, 197, 94, 0.1)');
        root.style.setProperty('--pink', '#4ADE80');
        root.style.setProperty('--blue', '#16A34A');
        root.style.setProperty('--accent-shadow', 'rgba(34, 197, 94, 0.4)');
        root.style.setProperty('--accent-glow', 'rgba(34, 197, 94, 0.2)');
        root.style.setProperty('--current-theme-filter', 'brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(1204%) hue-rotate(111deg) brightness(96%) contrast(86%)');
        break;
      case 'red':
        // Sunset Orange theme - complete color replacement
        root.style.setProperty('--green', '#FB923C');
        root.style.setProperty('--green-tint', 'rgba(251, 146, 60, 0.1)');
        root.style.setProperty('--pink', '#FDBA74');
        root.style.setProperty('--blue', '#EA580C');
        root.style.setProperty('--accent-shadow', 'rgba(251, 146, 60, 0.4)');
        root.style.setProperty('--accent-glow', 'rgba(251, 146, 60, 0.2)');
        root.style.setProperty('--current-theme-filter', 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(1945%) hue-rotate(6deg) brightness(101%) contrast(96%)');
        break;
      default:
        // Default Cyan theme - complete color replacement
        root.style.setProperty('--green', '#64ffda');
        root.style.setProperty('--green-tint', 'rgba(100, 255, 218, 0.1)');
        root.style.setProperty('--pink', '#f57dff');
        root.style.setProperty('--blue', '#57cbff');
        root.style.setProperty('--accent-shadow', 'rgba(100, 255, 218, 0.4)');
        root.style.setProperty('--accent-glow', 'rgba(100, 255, 218, 0.2)');
        root.style.setProperty('--current-theme-filter', 'brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(2618%) hue-rotate(158deg) brightness(101%) contrast(102%)');
        break;
    }
  };

  const handleThemeChange = (themeName) => {
    setTheme(themeName);
    applyTheme(themeName);
    // Don't save to localStorage - always reset to default on reload
  };

  return (
    <Side isHome={isHome} orientation="right">
      <StyledSocialContainer>
        <StyledThemeToggle>
          <StyledThemeButton
            aria-label="Theme color options"
            title="Hover to see color options"
          >
            <Icon name="Theme" />
          </StyledThemeButton>

          <StyledColorPalette>
            {colorThemes.map((colorTheme) => (
              <StyledColorButton
                key={colorTheme.name}
                style={{ backgroundColor: colorTheme.color }}
                onClick={() => handleThemeChange(colorTheme.name)}
                isActive={theme === colorTheme.name}
                aria-label={`Change theme to ${colorTheme.label}`}
                title={colorTheme.label}
              />
            ))}
          </StyledColorPalette>
        </StyledThemeToggle>

        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </StyledSocialList>
      </StyledSocialContainer>
    </Side>
  );
};

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
