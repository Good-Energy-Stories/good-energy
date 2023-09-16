/**
 * Partner section for Partners page. Can render half columns or full columns,
 * depending on CMS option.
 */

import dynamic from 'next/dynamic';
const Full = dynamic(() => import('./Full/Full'));
const Half = dynamic(() => import('./Half/Half'));

export enum ROW_WIDTH {
  THREE = 'three',
  FOUR = 'four',
}

export const PartnerSection = ({ data, className }: any) => {
  const size = data.size;
  switch (size) {
    case 'full':
      return <Full data={data} className={className} />;
    case 'half':
      return <Half data={data} />;
    default:
      return null;
  }
};

export default PartnerSection;
