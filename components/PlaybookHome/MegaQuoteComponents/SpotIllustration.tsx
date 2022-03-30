import { motion } from 'framer-motion';
import css from 'styled-jsx/css';

export enum QuoteIllustration {
  flowers = '/flowers-one.png',
  fern = '/fern.png',
}

const SpotIllustration = ({
  illustration = QuoteIllustration.flowers,
}: {
  illustration: QuoteIllustration;
}) => {
  return (
    <>
      <div className="spot-illustration">
        <img
          src={illustration}
          alt={illustration == QuoteIllustration.flowers ? 'Flowers' : 'Fern'}
        />
      </div>
      <style jsx>{`
        .spot-illustration {
          max-width: 30vw;
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          display: flex;
          align-items: flex-end;
        }
        img {
          max-width: 100%;
        }
      `}</style>
    </>
  );
};

export default SpotIllustration;
