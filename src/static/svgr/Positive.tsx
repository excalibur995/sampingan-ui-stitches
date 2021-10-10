import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Positive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="positive-icon-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="positive-icon-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="#2A9D90"
      />
      <path
        id="positive-icon-path-2"
        fill="#fff"
        d="M9.172 14.828l1.414 1.415 7.07-7.071-1.413-1.415z"
      />
      <path
        id="positive-icon-path-3"
        fill="#fff"
        d="M12 14.829l-1.414 1.414L6.343 12l1.415-1.414z"
      />
    </svg>
  );
}

Positive.displayName = 'PositiveIcon';
Positive.defaultProps = svgrDefaultProperties;
export default Positive;
