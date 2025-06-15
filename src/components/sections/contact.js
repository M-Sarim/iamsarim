import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { ContactModal } from '@components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Disable scroll reveal for contact section to prevent auto-scrolling
    // sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <>
      <StyledContactSection id="contact" ref={revealContainer}>
        <h2 className="numbered-heading overline">What’s Next?</h2>

        <h2 className="title">Get In Touch</h2>

        <p>
          Although I’m always excited to connect with fellow developers, researchers, and tech enthusiasts.
          Whether you want to discuss AI/ML projects, collaborate on innovative solutions, or just want to say hi, I’ll try my best to get back to you!
        </p>

        <button
          className="email-link"
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          Say Hello
        </button>
      </StyledContactSection>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Contact;
