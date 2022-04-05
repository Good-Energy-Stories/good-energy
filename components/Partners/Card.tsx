import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../PageDivider';
import { imageUrlFor } from '../../utils/imageUrlFor';
import Link from 'next/link';
const { className, styles } = css.resolve`
  div {
    margin: auto;
    display: block;
    position: relative;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  @media only screen and (max-width: 768px) {
    div {
    }
  }
`;

const variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const Logo = ({
  title,
  logo,
  link,
  size,
}: {
  title: string;
  logo: any;
  link: string;
  size: string;
}) => {
  if (link) {
    return <LogoLink title={title} logo={logo} link={link} size={size} />;
  }
  return <LogoImage title={title} logo={logo} size={size} />;
};

const LogoPlaceholder = ({ title }) => {
  return (
    <div className="label-medium">
      {title}
      <style jsx>{`
        div {
          background-color: var(--grey);
          padding: 1.25rem 2.5rem;
        }
      `}</style>
    </div>
  );
};

const LogoImage = ({
  title,
  logo,
  size,
}: {
  title: string;
  logo: any;
  size: any;
}) => {
  var maxWidth;
  switch (size) {
    case 'large':
      maxWidth = 300;
      break;
    case 'medium':
      maxWidth = 200;
      break;
    case 'small':
      maxWidth = 100;
      break;
  }

  return (
    <>
      {logo && <img alt={logo?.caption} src={imageUrlFor(logo).url()} />}
      {!logo && <LogoPlaceholder title={title} />}
      <style jsx>{`
        img {
          max-width: ${maxWidth}px;
        }
        @media only screen and (max-width: 1080px) {
          img {
            max-width: ${maxWidth / 1.5}px;
          }
        }
        @media only screen and (max-width: 768px) {
          img {
          }
        }
      `}</style>
    </>
  );
};

const LogoLink = ({
  title,
  logo,
  link,
  size,
}: {
  title: string;
  logo: any;
  link: string;
  size: string;
}) => {
  return (
    <a href={link ?? ''} target="_blank" rel="noreferrer">
      {logo && <LogoImage title={title} logo={logo} size={size} />}
      {!logo && <LogoPlaceholder title={title} />}
    </a>
  );
};

const Card = ({ data }: { data: any }) => {
  const { title, logo, size, link } = data;

  return (
    <>
      <motion.div
        transition={{ duration: 2 }}
        initial={'out'}
        animate={'in'}
        exit={'out'}
        variants={variants}
        className={className}
      >
        <div className="container">
          <Logo title={title} logo={logo} link={link} size={size} />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
          }
        `}</style>
        {styles}
      </motion.div>
    </>
  );
};

export default Card;
