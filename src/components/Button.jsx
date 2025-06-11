import React from 'react';
import styled from 'styled-components';

const Button = ({ icon, label, link }) => {
  return (
    <StyledWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>
          {icon}
          <span>{label}</span>
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    position: relative;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid rgb(255, 0, 0);
    border-radius: 25px;
    overflow: hidden;
    color: rgb(255, 0, 0);
    transition: color 0.3s ease-out;
  }

  button span {
    margin-left: 10px;
  }

  button::before {
    position: absolute;
    content: '';
    border-radius: 50%;
    width: 20em;
    height: 20em;
    left: -5em;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  button:hover {
    color: #fff;
    border: 1px solid rgb(255, 0, 0);
  }

  button:hover::before {
    box-shadow: inset 0 0 0 10em rgb(255, 0, 0);
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

export default Button;
