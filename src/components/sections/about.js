import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 180px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'JavaScript (ES6+)',
    'TypeScript',
    'C++',
    'C#',
    'Java',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'Figma',
    'Pandas',
    'NumPy',
    'SQL/MySQL',
    'MongoDB',
    'Oracle DB',
    'Docker',
    'Git & GitHub',
    'Selenium',
    'Postman',
    'Cloud Platforms'
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Muhammad Sarim and I enjoy creating intelligent solutions that make a difference. My
              journey in software engineering began with a fascination for problem-solving and technology.
              What started as curiosity about how software works has evolved into a passion for
              AI, Machine Learning, and Full-Stack Development!
            </p>

            <p>
              I've had the privilege of working on
              diverse projects ranging from{' '}
              <a href="https://github.com/M-Sarim/multilingual-dictionary">multilingual applications</a>,{' '}
              <a href="https://github.com/M-Sarim/E-commerce-Store">e-commerce systems</a>, to{' '}
              <a href="https://github.com/M-Sarim/Electricity-Weather-Data-Processing">data science projects</a>. My
              main focus these days is building intelligent solutions using AI/ML technologies and contributing to{' '}
              <a href="https://aiesec.org/">AIESEC</a> as an active member.
            </p>

            <p>
              I also regularly{' '}
              <a href="https://medium.com/@Muhammad.Sarim">
                publish articles
              </a>{' '}
              on Medium covering topics like AI/ML, deepfake detection, disease prediction, and comparative
              analysis of different AI models.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
