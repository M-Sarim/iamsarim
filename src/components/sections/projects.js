import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  max-width: 1000px;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-timeline {
    ${({ theme }) => theme.mixins.resetList};
    margin-top: 50px;
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
    display: block;
    text-align: center;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-gap: 20px;
  align-items: flex-start;
  margin-bottom: 50px;
  padding: 16px;
  margin: 0 -16px 50px -16px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.2) 100%);
  backdrop-filter: blur(5px);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;

  /* Animated gradient border */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      transparent,
      var(--green-tint),
      transparent,
      var(--green-tint),
      transparent
    );
    background-size: 400% 400%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    animation: borderGlow 3s ease-in-out infinite;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  @keyframes borderGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow:
        0 0 3px var(--green-tint),
        0 0 6px rgba(100, 255, 218, 0.05);
    }
    50% {
      box-shadow:
        0 0 8px var(--green-tint),
        0 0 15px rgba(100, 255, 218, 0.08);
    }
  }

  &:hover {
    animation: pulseGlow 2s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(
      circle at center,
      rgba(100, 255, 218, 0.08) 0%,
      rgba(100, 255, 218, 0.03) 40%,
      transparent 70%
    );
    border-radius: 12px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -2;
    filter: blur(8px);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1.1);
    filter: blur(12px);
  }

  &:hover::after {
    opacity: 1;
    animation-duration: 2s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.01);
    border-color: rgba(100, 255, 218, 0.2);
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.3) 100%);
    box-shadow:
      0 10px 25px -10px rgba(100, 255, 218, 0.15),
      0 0 15px rgba(100, 255, 218, 0.08),
      0 0 30px rgba(100, 255, 218, 0.05),
      0 0 50px rgba(100, 255, 218, 0.03),
      inset 0 1px 0 rgba(100, 255, 218, 0.1),
      inset 0 -1px 0 rgba(100, 255, 218, 0.05);
  }

  &:hover .project-title {
    color: var(--green);
    text-shadow:
      0 0 8px rgba(100, 255, 218, 0.3),
      0 0 15px rgba(100, 255, 218, 0.15),
      0 0 25px rgba(100, 255, 218, 0.08);
    transform: translateX(3px);
  }

  &:hover .project-title a {
    color: var(--green);
    text-shadow:
      0 0 8px rgba(100, 255, 218, 0.3),
      0 0 15px rgba(100, 255, 218, 0.15);
  }

  /* Enhanced but transparent arrow hover effects with container hover */
  &:hover .arrow-icon {
    transform: translateY(-8px) translateX(5px) rotate(45deg) scale(1.2);
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.06) 0%, rgba(100, 255, 218, 0.03) 100%);
    border-color: rgba(100, 255, 218, 0.15);
    border-width: 1px;
    box-shadow:
      0 0 8px rgba(100, 255, 218, 0.1),
      0 0 15px rgba(100, 255, 218, 0.06),
      0 3px 10px rgba(100, 255, 218, 0.04),
      inset 0 1px 0 rgba(100, 255, 218, 0.08);
    animation: arrowPulse 1.5s ease-in-out infinite;

    &::before {
      opacity: 1;
      animation: arrowShimmer 2s ease-in-out infinite;
    }
  }

  &:hover .arrow-icon svg {
    stroke: var(--green);
    stroke-width: 2px;
    filter: drop-shadow(0 0 4px rgba(100, 255, 218, 0.2)) drop-shadow(0 0 8px rgba(100, 255, 218, 0.1));
    transform: scale(1.1);
  }

  @keyframes arrowPulse {
    0%, 100% {
      box-shadow:
        0 0 8px rgba(100, 255, 218, 0.1),
        0 0 15px rgba(100, 255, 218, 0.06),
        0 3px 10px rgba(100, 255, 218, 0.04),
        inset 0 1px 0 rgba(100, 255, 218, 0.08);
    }
    50% {
      box-shadow:
        0 0 12px rgba(100, 255, 218, 0.15),
        0 0 20px rgba(100, 255, 218, 0.08),
        0 5px 12px rgba(100, 255, 218, 0.06),
        inset 0 1px 0 rgba(100, 255, 218, 0.12);
    }
  }

  @keyframes arrowShimmer {
    0% {
      background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.04), transparent);
      transform: translateX(-100%) rotate(45deg);
    }
    50% {
      background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.08), transparent);
      transform: translateX(0%) rotate(45deg);
    }
    100% {
      background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.04), transparent);
      transform: translateX(100%) rotate(45deg);
    }
  }

  /* Apply green color to group-hover elements */
  &:hover .group-hover\\:text-green-400 {
    color: var(--green) !important;
  }

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    grid-gap: 15px;
    margin: 0 -12px 40px -12px;
    padding: 12px;

    &::before {
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    display: block;
    margin: 0 -8px 30px -8px;
    padding: 8px;

    &::before {
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
    }
  }

  .project-year {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    @media (max-width: 480px) {
      margin-bottom: 10px;
      font-size: var(--fz-xs);
    }
  }

  .project-content {
    position: relative;

    .project-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .project-link-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        text-decoration: none;
        color: inherit;

        /* Hover effects handled by container */
      }

      .project-title {
        margin: 0;
        color: var(--lightest-slate);
        font-size: var(--fz-xxl);
        font-weight: 600;
        line-height: 1.3;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;

        @media (max-width: 768px) {
          font-size: var(--fz-xl);
        }
      }

      .project-links {
        display: flex;
        align-items: center;
        margin-left: 4px;

        .arrow-icon {
          ${({ theme }) => theme.mixins.flexCenter};
          padding: 6px;
          color: var(--light-slate);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: translateY(0) translateX(0) rotate(0deg) scale(1);
          border-radius: 50%;
          background: rgba(100, 255, 218, 0.02);
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.05), transparent);
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          svg {
            width: 16px;
            height: 16px;
            stroke: currentColor;
            stroke-width: 2px;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            filter: drop-shadow(0 0 0 transparent);
            transform: scale(1);
          }
        }
      }

      /* Group hover effects are now handled by container hover */
    }

    .project-description {
      color: var(--light-slate);
      font-size: var(--fz-lg);
      line-height: 1.6;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: var(--fz-md);
      }

      a {
        ${({ theme }) => theme.mixins.inlineLink};
      }
    }

    .project-tech-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        background-color: rgba(20, 184, 166, 0.05);
        color: var(--green);
        border: 1px solid rgba(100, 255, 218, 0.1);
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        font-weight: 500;
        padding: 4px 12px;
        margin: 0 6px 8px 0;
        border-radius: 9999px;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(100, 255, 218, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        @media (max-width: 768px) {
          font-size: 10px;
          padding: 4px 10px;
          margin: 0 4px 6px 0;
        }
      }
    }

  &:hover .project-tech-list li {
    background-color: rgba(20, 184, 166, 0.08);
    border-color: rgba(100, 255, 218, 0.2);
    box-shadow: 0 0 6px rgba(100, 255, 218, 0.1);
    transform: translateY(-1px);

    &::before {
      left: 100%;
    }
  }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              date
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const moreButtonRef = useRef(null);
  const showMoreButtonPosition = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const handleShowMoreClick = () => {
    if (showMore) {
      // When showing less, capture the current position where "Show More" button should be
      // This is approximately where the 6th project ends
      const projectsList = document.querySelector('.projects-timeline');
      if (projectsList) {
        const projects = projectsList.children;
        if (projects.length >= 6) {
          // Get position after the 6th project
          const sixthProject = projects[5];
          const rect = sixthProject.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          showMoreButtonPosition.current = rect.bottom + scrollTop + 50; // 50px spacing
        }
      }

      // Set state to show less
      setShowMore(false);

      // Scroll to the captured position after DOM updates
      setTimeout(() => {
        if (showMoreButtonPosition.current) {
          window.scrollTo({
            top: showMoreButtonPosition.current,
            behavior: 'smooth'
          });
        }
      }, 300); // Increased delay to ensure DOM is fully updated
    } else {
      // When showing more, just expand normally
      setShowMore(true);
    }
  };

  const projectInner = node => {
    const { frontmatter, html } = node;
    const { github, external, title, tech, date } = frontmatter;
    const year = new Date(date).getFullYear();

    return (
      <>
        <div className="project-year">{year}</div>
        <div className="project-content">
          <div className="project-header">
            {(github || external) ? (
              <a
                href={external || github}
                target="_blank"
                rel="noreferrer"
                className="group project-link-wrapper">
                <h3 className="project-title group-hover:text-green-400 transition-colors">
                  {title}
                </h3>
                <div className="project-links">
                  <div className="arrow-icon group-hover:text-green-400 transition-colors">
                    <Icon name="Arrow" />
                  </div>
                </div>
              </a>
            ) : (
              <div className="project-link-wrapper">
                <h3 className="project-title">
                  {title}
                </h3>
              </div>
            )}
          </div>

          <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

          {tech && tech.length > 0 && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 className="numbered-heading" ref={revealTitle}>Other Noteworthy Projects</h2>

      <a className="inline-link archive-link" href="https://github.com/M-Sarim" target="_blank" rel="noreferrer" ref={revealArchiveLink}>
        view all projects on GitHub
      </a>

      <ul className="projects-timeline">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" ref={moreButtonRef} onClick={handleShowMoreClick}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
