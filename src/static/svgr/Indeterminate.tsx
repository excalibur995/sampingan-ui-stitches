import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Indeterminate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="sampingan-indeterminate-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 4"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="sampingan-indeterminate-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 .8a1.2 1.2 0 000 2.4h10a1.2 1.2 0 100-2.4H2z"
        fill="#fff"
      />
    </svg>
  );
}

Indeterminate.defaultProps = svgrDefaultProperties;
export default Indeterminate;
