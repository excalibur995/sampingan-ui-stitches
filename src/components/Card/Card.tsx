import React from 'react';
import { styled } from '../../theme';
import { cardDefaultProps, CardProps } from './Card.types';

const StyledCard = styled('div', {
  display: 'flex',
  width: 'fit-content',
  padding: '8px',
  radius: 'semi-rounded',
  transition: 'box-shadow 0.2s ease',
  margin: 0,
});

export const Card = ({
  id,
  children,
  elevation,
  inlineStyle,
  className,
  onClick,
}: CardProps) => {
  const handleClick = () => onClick && onClick();

  return (
    <StyledCard
      id={id}
      onClick={handleClick}
      className={className}
      css={{ ...inlineStyle, elevation }}
    >
      {children}
    </StyledCard>
  );
};

Card.defaultProps = cardDefaultProps;
