import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Informative(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="information-icon-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="information-icon-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill="#3DA5D9"
      />
      <path id="information-icon-path-2" fill="#fff" d="M11 18h2v-7h-2z" />
      <circle
        id="information-icon-circle"
        r={1.5}
        transform="matrix(1 0 0 -1 12 7.5)"
        fill="#fff"
      />
    </svg>
  );
}

Informative.displayName = 'InformativeIcon';
Informative.defaultProps = svgrDefaultProperties;

export default Informative;
