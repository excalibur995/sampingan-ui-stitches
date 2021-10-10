import React, { useMemo } from 'react';
import * as Icons from '../../static/svgr';
import { SampinganUIIcon } from '../../types/index.types';

type DynamicIcons = {
  [key in SampinganUIIcon]: JSX.Element;
};

import { iconDefaultProperties, IconProperties } from './Icon.types';
export const Icon = ({ icon, width, height, ...props }: IconProperties) => {
  const components = useMemo((): DynamicIcons => {
    return {
      Close: <Icons.Close />,
      Failed: <Icons.Failed />,
      Informative: <Icons.Informative />,
      Positive: <Icons.Positive />,
      Profile: <Icons.Profile />,
      Warning: <Icons.Warning />,
    };
  }, [icon]);

  if (typeof components[icon] !== 'undefined') {
    return React.cloneElement(components[icon], {
      width,
      height,
      ...props,
    });
  }
  return <Icons.Informative {...props} width={width} height={height} />;
};

Icon.defaultProps = iconDefaultProperties;
