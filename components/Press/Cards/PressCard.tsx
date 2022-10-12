import dynamic from 'next/dynamic';
const Standard = dynamic(() => import('./Standard/Standard'));
const Half = dynamic(() => import('./Half/Half'));

export enum PressCardType {
  Standard = 'standard',
  Half = 'half',
}

const PressCard = ({ type, data }: any) => {
  switch (type) {
    case PressCardType.Standard:
      return <Standard data={data} />;
    case PressCardType.Half:
      return <Half data={data} />;
    default:
      return null;
  }
};

export default PressCard;
