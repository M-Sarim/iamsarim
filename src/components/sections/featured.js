import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }

  /* Subtle pulse animation for loading states */
  @keyframes imageLoad {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .gatsby-image-wrapper {
    animation: imageLoad 0.6s ease-out;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(even) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    .project-link-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: inherit;
      padding: 10px;
      transition: var(--transition);

      &:hover {
        text-decoration: none;
      }

      .link-text {
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        font-weight: 600;
        color: var(--lightest-slate);
        transition: var(--transition);
      }

      .arrow-icon {
        ${({ theme }) => theme.mixins.flexCenter};
        color: var(--light-slate);
        transition: var(--transition);
        transform: translateY(0);

        svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          transition: var(--transition);
        }
      }
    }

    /* Tailwind group-hover support */
    .group:hover .group-hover\\:text-green-400 {
      color: var(--green) !important;
    }

    .group:hover .arrow-icon {
      transform: translateY(-2px);
    }

    .group:hover .arrow-icon svg {
      stroke: var(--green);
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: var(--border-radius);

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
      transform: none !important;

      &:hover {
        transform: none !important;
      }
    }

    @media (max-width: 480px) {
      margin-bottom: 20px;
      border-radius: 8px;
    }

    /* Enhanced shadow and glow effects */
    box-shadow:
      0 10px 30px -15px var(--navy-shadow),
      0 0 0 1px var(--lightest-navy);

    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover {
      transform: translateY(-5px);
      box-shadow:
        0 20px 40px -15px var(--navy-shadow),
        0 0 0 1px var(--green),
        0 0 20px rgba(100, 255, 218, 0.1);
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      display: block;
      position: relative;
      overflow: hidden;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before {
          opacity: 0;
        }

        .img {
          transform: scale(1.05);
          filter: none;
        }
      }

      &:focus-visible {
        outline: 2px solid var(--green);
        outline-offset: 4px;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        background: linear-gradient(
          135deg,
          rgba(10, 25, 47, 0.8) 0%,
          rgba(100, 255, 218, 0.1) 100%
        );
        mix-blend-mode: multiply;
        opacity: 1;
      }
    }

    .img {
      border-radius: var(--border-radius);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      filter: grayscale(100%) contrast(1.1) brightness(85%);
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media (max-width: 768px) {
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }

    /* Enhanced borders for all projects */
    &[data-project="Aurora Voyages"] a {
      border: 3px solid var(--green);
      box-shadow:
        inset 0 0 0 3px var(--navy),
        0 0 20px rgba(100, 255, 218, 0.2);

      &:hover {
        border-color: var(--green);
        box-shadow:
          inset 0 0 0 3px var(--navy),
          0 0 30px rgba(100, 255, 218, 0.4);
      }
    }

    &[data-project="Smart Trash Routing System"] a {
      border: 3px solid var(--blue);
      box-shadow:
        inset 0 0 0 3px var(--navy),
        0 0 20px rgba(87, 203, 255, 0.2);

      &:hover {
        border-color: var(--blue);
        box-shadow:
          inset 0 0 0 3px var(--navy),
          0 0 30px rgba(87, 203, 255, 0.4);
      }
    }

    &[data-project="Multiplayer Chess Game"] a {
      border: 3px solid var(--pink);
      box-shadow:
        inset 0 0 0 3px var(--navy),
        0 0 20px rgba(245, 125, 255, 0.2);

      &:hover {
        border-color: var(--pink);
        box-shadow:
          inset 0 0 0 3px var(--navy),
          0 0 30px rgba(245, 125, 255, 0.4);
      }
    }

    /* Adjust inner border radius for bordered projects */
    &[data-project="Aurora Voyages"] .img,
    &[data-project="Smart Trash Routing System"] .img,
    &[data-project="Multiplayer Chess Game"] .img {
      border-radius: calc(var(--border-radius) - 3px);
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 900,
                    height: 600,
                    placeholder: BLURRED,
                    formats: [AUTO, WEBP, AVIF],
                    quality: 95,
                    transformOptions: { cropFocus: CENTER, fit: COVER }
                  )
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)} data-project={title}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {(github || external) && (
                        <a
                          href={external || github}
                          aria-label="Project Link"
                          target="_blank"
                          rel="noreferrer"
                          className="group project-link-wrapper">
                          <span className="link-text group-hover:text-green-400 transition-colors">
                            {external ? 'View Project' : 'View Source Code'}
                          </span>
                          <div className="arrow-icon group-hover:text-green-400 transition-colors">
                            <Icon name="Arrow" />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image" data-project={title}>
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage
                      image={image}
                      alt={title}
                      className="img"
                      loading="lazy"
                      placeholder="blurred"
                    />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
