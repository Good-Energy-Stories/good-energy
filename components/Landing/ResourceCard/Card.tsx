import React, { RefObject } from 'react';
import dynamic from 'next/dynamic';
const Standard = dynamic(() => import('./Standard'));
const Featured = dynamic(() => import('./Featured'));

export enum ResourceCardStyle {
  standard = 'standard',
  featured = 'featured',
}

export const Section = ({
  index,
  content,
}: {
  index: number;
  content: any;
}) => {
  const type = content.style;
  switch (type) {
    case ResourceCardStyle.standard:
      return <Standard data={content} />;
    case ResourceCardStyle.featured:
      return <Featured data={content} />;

    default:
      return null;
  }
};

export default Section;
