import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import DrUsamaImage from '@images/dr-usama.jpg';
import AbdulWasayImage from '@images/AbdulWasay.jpeg.jpg';
import UsmanImage from '@images/usman.jpg';
import NoumanImage from '@images/nouman.jpg';

const StyledTestimonialsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    right: -50%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(100, 255, 218, 0.03) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--green), transparent);
      }
    }

    .subtitle {
      color: var(--slate);
      font-size: var(--fz-lg);
      margin-top: 20px;
      font-style: italic;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 768px) {
    .section-header {
      margin-bottom: 40px;

      .subtitle {
        font-size: var(--fz-md);
        margin-top: 15px;
      }
    }

    .inner {
      gap: 20px;
    }
  }
`;

const StyledTestimonial = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 40px;
  background: linear-gradient(135deg, var(--light-navy) 0%, rgba(17, 34, 64, 0.8) 100%);
  border-radius: 12px;
  border: 1px solid var(--lightest-navy);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(2, 12, 27, 0.8);
    border-color: rgba(100, 255, 218, 0.3);

    .testimonial-content {
      &:before {
        opacity: 0.9;
        transform: scale(1.05);
        text-shadow: 0 3px 6px rgba(100, 255, 218, 0.4);
      }

      &:after {
        opacity: 0.7;
        transform: rotate(180deg) scale(1.02);
        text-shadow: 0 3px 6px rgba(100, 255, 218, 0.3);
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--green), var(--blue), var(--green));
    border-radius: 12px 12px 0 0;
  }

  .testimonial-content {
    position: relative;
    margin-bottom: 30px;

    &:before {
      content: '"';
      position: absolute;
      top: -8px;
      left: -8px;
      font-size: 45px;
      color: var(--green);
      font-family: var(--font-mono);
      line-height: 1;
      opacity: 0.8;
      z-index: 1;
      font-weight: 700;
      text-shadow: 0 3px 6px rgba(100, 255, 218, 0.4);
      transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:after {
      content: '"';
      position: absolute;
      bottom: -8px;
      right: -8px;
      font-size: 40px;
      color: var(--green);
      font-family: var(--font-mono);
      line-height: 1;
      opacity: 0.6;
      transform: rotate(180deg);
      z-index: 1;
      font-weight: 700;
      text-shadow: 0 3px 6px rgba(100, 255, 218, 0.3);
      transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    p {
      position: relative;
      font-size: var(--fz-lg);
      color: var(--lightest-slate);
      line-height: 1.8;
      margin: 0;
      font-style: italic;
      font-weight: 400;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      z-index: 2;
      padding: 20px 25px 20px 30px;
      letter-spacing: 0.3px;

      @media (max-width: 768px) {
        font-size: var(--fz-md);
        line-height: 1.7;
        padding: 18px 22px 18px 25px;
      }

      @media (max-width: 480px) {
        font-size: var(--fz-sm);
        line-height: 1.6;
        padding: 15px 20px 15px 22px;
      }
    }
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(100, 255, 218, 0.1);

    .author-info {
      margin-left: 20px;
      flex: 1;

      .name {
        color: var(--lightest-slate);
        font-weight: 700;
        font-size: var(--fz-lg);
        margin: 0 0 5px 0;
        letter-spacing: 0.5px;
      }

      .title {
        color: var(--light-slate);
        font-size: var(--fz-md);
        margin: 0 0 5px 0;
        font-weight: 500;
      }

      .company {
        color: var(--green);
        font-size: var(--fz-sm);
        font-family: var(--font-mono);
        margin: 0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;

        &:before {
          content: '@';
          margin-right: 2px;
          opacity: 0.7;
        }
      }
    }
  }

  .author-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--green), #4ecdc4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--navy);
    font-weight: 700;
    font-size: var(--fz-xl);
    flex-shrink: 0;
    box-shadow: 0 8px 20px rgba(100, 255, 218, 0.3);
    border: 3px solid rgba(100, 255, 218, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    &.has-image {
      background: transparent;
      border: 3px solid var(--green);
    }

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 50%;
      background: linear-gradient(45deg, var(--green), transparent, var(--green));
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 30px rgba(100, 255, 218, 0.4);

      &:before {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
    margin-bottom: 30px;

    .testimonial-content {
      margin-bottom: 20px;

      &:before {
        font-size: 30px;
        top: -2px;
        left: -2px;
      }

      &:after {
        font-size: 25px;
        bottom: -2px;
        right: -2px;
      }

      p {
        font-size: var(--fz-md);
        line-height: 1.6;
        padding: 12px 18px 12px 20px;
      }
    }

    .testimonial-author {
      margin-top: 25px;
      padding-top: 15px;

      .author-info {
        margin-left: 15px;

        .name {
          font-size: var(--fz-md);
        }

        .title {
          font-size: var(--fz-sm);
        }

        .company {
          font-size: var(--fz-xs);
        }
      }
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      font-size: var(--fz-lg);
    }
  }

  @media (max-width: 480px) {
    padding: 25px 20px;

    .testimonial-content {
      &:before {
        font-size: 25px;
        top: 0px;
        left: 0px;
      }

      &:after {
        font-size: 20px;
        bottom: 0px;
        right: 0px;
      }

      p {
        font-size: var(--fz-sm);
        padding: 10px 15px 10px 18px;
      }
    }

    .author-avatar {
      width: 45px;
      height: 45px;
      font-size: var(--fz-md);
    }
  }
`;

const Testimonials = () => {
  const revealContainer = useRef(null);
  const revealTestimonials = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Add a delay to ensure page is fully loaded before revealing
    const timer = setTimeout(() => {
      // Reveal section header first
      if (revealContainer.current) {
        sr.reveal(revealContainer.current, srConfig());
      }

      // Then reveal testimonials with staggered animation
      revealTestimonials.current.forEach((ref, i) => {
        if (ref) {
          sr.reveal(ref, srConfig(i * 150, 0.15));
        }
      });
    }, 500); // Wait 500ms before starting animations

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      content: "Sarim has shown exceptional dedication and analytical thinking in his academic pursuits. His research interests in AI/ML and his ability to bridge theoretical concepts with practical applications make him a promising researcher and developer in the field of computer science.",
      author: "Dr. Muhammad Usama",
      title: "Associate Professor",
      company: "FAST NUCES",
      avatar: "MU",
      image: DrUsamaImage
    },
    {
      id: 2,
      content: "Working with Sarim at AIESEC has been exceptional. His strategic thinking and leadership skills in business development initiatives have significantly contributed to our global expansion efforts. His ability to combine technical expertise with business acumen makes him a valuable asset to any organization.",
      author: "Abdul Wasay",
      title: "Global Business Development Manager",
      company: "AIESEC",
      avatar: "AW",
      image: AbdulWasayImage
    },
    {
      id: 3,
      content: "Working alongside Sarim at FAST NUCES has been an incredible experience. His problem-solving skills and collaborative approach make him an excellent team member. His expertise in software engineering and AI/ML projects consistently delivers outstanding results.",
      author: "Usman Aamir",
      title: "Peer",
      company: "FAST NUCES",
      avatar: "U",
      image: UsmanImage
    },
    {
      id: 4,
      content: "Sarim is one of the most dedicated and talented peers I've worked with at FAST NUCES. His technical knowledge, especially in machine learning and full-stack development, combined with his willingness to help others, makes him a valuable colleague and friend.",
      author: "Muhammad Nouman",
      title: "Peer",
      company: "FAST NUCES",
      avatar: "N",
      image: NoumanImage
    }
  ];

  return (
    <StyledTestimonialsSection id="testimonials" ref={revealContainer} tabIndex="-1">
      <h2 className="numbered-heading">What People Say</h2>

      <div className="inner">
        {testimonials.map((testimonial, i) => (
          <StyledTestimonial
            key={testimonial.id}
            ref={el => (revealTestimonials.current[i] = el)}
          >
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
            </div>
            <div className="testimonial-author">
              <div className={`author-avatar ${testimonial.image ? 'has-image' : ''}`}>
                {testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.author} />
                ) : (
                  testimonial.avatar
                )}
              </div>
              <div className="author-info">
                <h4 className="name">{testimonial.author}</h4>
                <p className="title">{testimonial.title}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          </StyledTestimonial>
        ))}
      </div>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
