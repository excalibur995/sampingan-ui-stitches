import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="warning-icon-svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="warning-icon-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="#F4C152"
      />
      <path id="warning-icon-path-2" fill="#fff" d="M11 6h2v7h-2z" />
      <circle id="warning-icon-circle" cx={12} cy={16.5} r={1.5} fill="#fff" />
    </svg>
  );
}

Warning.displayName = 'WarningIcon';
Warning.defaultProps = svgrDefaultProperties;
export default Warning;
