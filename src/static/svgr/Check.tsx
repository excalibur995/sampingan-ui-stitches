import * as React from 'react';
import { svgrDefaultProperties } from '../../utils/helper';

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="sampingan-check-svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="sampingan-check-path"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05 9.645a1.197 1.197 0 01-.917 0 1.197 1.197 0 01-.39-.26L.503 5.143a1.2 1.2 0 111.695-1.698l3.393 3.393L11.814.616a1.2 1.2 0 011.698 1.697L6.44 9.385c-.112.111-.244.2-.39.26z"
        fill="#fff"
      />
    </svg>
  );
}
Check.defaultProps = svgrDefaultProperties;
export default Check;
