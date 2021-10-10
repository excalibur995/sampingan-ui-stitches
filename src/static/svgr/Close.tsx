import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="close-icon-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="close-icon-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.707 3.707a1 1 0 00-1.414-1.414L12 10.586 3.707 2.293a1 1 0 00-1.414 1.414L10.586 12l-8.293 8.293a1 1 0 101.414 1.414L12 13.414l8.293 8.293a1 1 0 001.414-1.414L13.414 12l8.293-8.293z"
        fill="#262626"
      />
    </svg>
  );
}

Close.displayName = 'CloseIcon';
Close.defaultProps = svgrDefaultProperties;
export default Close;
