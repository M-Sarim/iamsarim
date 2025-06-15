import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 25, 47, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 40px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--lightest-navy);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: var(--slate);
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    color: var(--lightest-slate);
    background-color: rgba(100, 255, 218, 0.1);
  }

  &:focus {
    outline: none;
    color: var(--green);
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h2 {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 32px);
    margin: 0;
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: var(--light-slate);
  font-size: var(--fz-sm);
  margin-bottom: 8px;
  font-family: var(--font-mono);
`;

const Input = styled.input`
  background-color: var(--navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 4px;
  padding: 12px 16px;
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  font-family: var(--font-sans);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: var(--slate);
  }
`;

const TextArea = styled.textarea`
  background-color: var(--navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 4px;
  padding: 12px 16px;
  color: var(--lightest-slate);
  font-size: var(--fz-md);
  font-family: var(--font-sans);
  min-height: 120px;
  resize: vertical;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: var(--slate);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid;

  &.cancel {
    background-color: transparent;
    color: var(--slate);
    border-color: var(--slate);

    &:hover {
      color: var(--lightest-slate);
      border-color: var(--lightest-slate);
    }
  }

  &.send {
    background-color: var(--green);
    color: var(--navy);
    border-color: var(--green);

    &:hover {
      background-color: var(--green-tint);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(100, 255, 218, 0.4);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }
`;

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgbbwol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || 'Contact from Portfolio',
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Success - reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        alert('Thank you! Your message has been sent successfully.');
        onClose();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at muhammad2004sarim@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose} aria-label="Close modal">
          ×
        </CloseButton>
        <ModalHeader>
          <h2>Let's Develop Together!</h2>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <ButtonGroup>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="send" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
