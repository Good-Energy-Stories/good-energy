import React from 'react';
import dynamic from 'next/dynamic';
const Full = dynamic(() => import('./Full'));
const Half = dynamic(() => import('./Half'));

export const PartnerSection = ({ index, data }) => {
  console.log(data);
  const size = data.size;

  switch (size) {
    case 'full':
      return <Full data={data} />;
    case 'half':
      return <Half data={data} />;

    default:
      return null;
  }
};

export default PartnerSection;
