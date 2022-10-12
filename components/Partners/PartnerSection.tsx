import dynamic from 'next/dynamic';
const Full = dynamic(() => import('./Full/Full'));
const Half = dynamic(() => import('./Half/Half'));

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
