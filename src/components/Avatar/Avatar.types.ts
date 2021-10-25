import {
  GlobalComponentTypes,
  SampinganImageFit,
  SampinganImageStatus,
  SampinganRadii,
  SampinganUIElevation,
  SampinganUiSizes,
} from '../../types/index.types';

export interface AvatarProps extends GlobalComponentTypes {
  /**
   * Specifies the path to the image
   */
  src?: string;
  /**
   * Specifies username
   */
  username?: string;
  /**
   * Specifies an alternate text for an image
   */
  alt?: string;
  /**
   * Specifies the size of avatar
   */
  size?: Exclude<SampinganUiSizes, 'none'>;
  /**
   * Specifies the radius of avatar container
   */
  radius?: SampinganRadii;
  /**
   * indicates like how far card from the ground
   */
  elevation?: SampinganUIElevation;
  /**
   * action when click the avatar
   */
  onClick?: () => void;
  /**
   * property is used to specify how an image should be resized to fit its container.
   */
  fit?: SampinganImageFit;
  /**
   * A callback providing information about the loading status of the image.
   * This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: (status: SampinganImageStatus) => void;
  /**
   * a Class for `img` attribute
   */
  imgClass?: string;
  /**
   * a Class for Text-Only avatar
   */
  usernameClass?: string;
}

export const avatarDefaultProps: AvatarProps = {
  id: 'sampingan-avatar',
  inlineStyle: {},
  className: undefined,
  imgClass: undefined,
  onClick: undefined,
  onLoadingStatusChange: undefined,
  size: 'large',
  src: undefined,
  username: 'Sampingan',
  alt: 'Sampinga Avatar',
  radius: 'rounded',
  elevation: 'thin',
  fit: 'cover',
};
