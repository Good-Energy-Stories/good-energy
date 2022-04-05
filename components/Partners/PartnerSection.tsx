import React from 'react';
import dynamic from 'next/dynamic';
const Full = dynamic(() => import('./Full'));
const Half = dynamic(() => import('./Half'));

export const PartnerSection = ({
  index,
  data,
  truncate = false,
}: {
  data: any;
  index: number;
  truncate?: boolean;
}) => {
  const size = data.size;
  switch (size) {
    case 'full':
      return <Full data={data} truncate={truncate} />;
    case 'half':
      return <Half data={data} truncate={truncate} />;

    default:
      return null;
  }
};

export default PartnerSection;
