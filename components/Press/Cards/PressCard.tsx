import dynamic from 'next/dynamic';
const Standard = dynamic(() => import('./Standard/Standard'));

export enum PressCardType {
  Standard = 'standard',
}
const PressCard = ({ type, data }) => {
  switch (type) {
    case PressCardType.Standard:
      return <Standard data={data} />;
    default:
      return null;
  }
};

export default PressCard;
