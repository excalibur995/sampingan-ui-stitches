import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Profile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="profile-icon-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="profile-icon-path"
        d="M19.194 21.6c1.176 0 2.156-.973 1.832-2.105a7.894 7.894 0 00-.433-1.16 8.542 8.542 0 00-2.076-2.769 9.73 9.73 0 00-3.107-1.85 10.606 10.606 0 00-3.666-.65c-1.258 0-2.503.221-3.665.65a9.73 9.73 0 00-3.108 1.85 8.541 8.541 0 00-2.076 2.768c-.175.378-.32.766-.433 1.16-.323 1.133.657 2.106 1.832 2.106h14.9zM16.267 7.2c0 2.65-2.025 4.8-4.523 4.8-2.498 0-4.523-2.15-4.523-4.8 0-2.651 2.025-4.8 4.523-4.8 2.498 0 4.523 2.149 4.523 4.8z"
        fill="#262626"
      />
    </svg>
  );
}

Profile.displayName = 'ProfileIcon';
Profile.defaultProps = svgrDefaultProperties;
export default Profile;
