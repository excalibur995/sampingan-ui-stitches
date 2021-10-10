import { SampinganUIIcon } from '../../types/index.types';
import { svgrDefaultProperties } from '../../utils/helper';

export interface IconProperties extends React.SVGProps<SVGSVGElement> {
  icon: SampinganUIIcon;
}

export const iconDefaultProperties: IconProperties = {
  icon: 'Failed',
  ...svgrDefaultProperties,
};
