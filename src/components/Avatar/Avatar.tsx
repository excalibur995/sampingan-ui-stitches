import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '../../theme';
import { avatarDefaultProps, AvatarProps } from './Avatar.types';
import { getUserInital, uiThemeHelper } from '../../utils/helper';
import { SampinganImageStatus } from '../../types/index.types';

const AvatarContainer = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  radius: 'semi-rounded',
  backgroundColor: '$kerjaan_neutral',
  cursor: 'pointer',
  variants: {
    size: {
      xsmall: {
        width: 16,
        height: 16,
      },
      small: {
        width: 32,
        height: 32,
      },
      medium: {
        width: 40,
        height: 40,
      },
      large: {
        width: 96,
        height: 96,
      },
      xlarge: {
        width: 128,
        height: 128,
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});
const AvatarUsername = styled(AvatarPrimitive.Fallback, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  color: '$kerjaan_primary',
  variants: {
    size: {
      xsmall: {
        ...uiThemeHelper.font['caption-1'],
      },
      small: {
        ...uiThemeHelper.font['caption-1'],
      },
      medium: {
        ...uiThemeHelper.font['hero'],
      },
      large: {
        ...uiThemeHelper.font['title'],
      },
      xlarge: {
        ...uiThemeHelper.font['title'],
      },
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

export const Avatar = ({
  alt,
  id,
  src,
  size,
  onClick,
  username,
  radius,
  onLoadingStatusChange,
  elevation,
  fit,
}: AvatarProps) => {
  const onUserAvatarClick = () => onClick && onClick();
  const handleLoadChange = (status: SampinganImageStatus) =>
    onLoadingStatusChange && onLoadingStatusChange(status);
  return (
    <AvatarContainer
      id={id}
      css={{
        radius,
        elevation,
      }}
      size={size}
      onClick={onUserAvatarClick}
    >
      {src && src.trim().length > 0 && (
        <AvatarImage
          onLoadingStatusChange={handleLoadChange}
          src={src}
          alt={username ? username : alt}
          css={{
            objectFit: fit,
          }}
        />
      )}
      {!src && (
        <AvatarUsername size={size}>{getUserInital(username)}</AvatarUsername>
      )}
    </AvatarContainer>
  );
};

Avatar.defaultProps = avatarDefaultProps;
