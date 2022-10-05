import { motion } from 'framer-motion';
import css from 'styled-jsx/css';
import PageDivider from '../PageDivider/PageDivider';
import { imageUrlFor } from '../../utils/imageUrlFor';
import Link from 'next/link';
import * as ga from '../../lib/ga';
function getStyles(size) {
  var gridColumn, padding, paddingMobile, marginTop, marginBottom;
  switch (size) {
    case 'large':
      gridColumn = 'span 2';
      padding = '0 2rem';
      paddingMobile = '0 1.25rem';
      marginTop = '2rem';
      marginBottom = '2rem';
      break;
    case 'medium':
      gridColumn = 'span 2';
      padding = '0 1.5rem';
      paddingMobile = '0 5rem';
      marginTop = '1.5rem';
      marginBottom = '1.5rem';
      break;
    case 'small':
      gridColumn = 'span 1';
      padding = '0';
      paddingMobile = '0 0';
      marginTop = '0';
      marginBottom = '1';
      break;
  }
  return css.resolve`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex: 0 0 calc(25% - var(--spacing-small));
      width: 100%;
      margin-top: ${marginBottom};
      margin-bottom: ${marginBottom};
      padding: ${padding};
    }
    @media only screen and (max-width: 1080px) {
      div {
        flex: 0 0 calc(100% - var(--spacing-small));
      }
    }
  `;
}

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
  var maxWidth, gridColumn;
  switch (size) {
    case 'large':
      maxWidth = 300;
      gridColumn = 'span 2';
      break;
    case 'medium':
      maxWidth = 200;
      gridColumn = 'span 1';
      break;
    case 'small':
      maxWidth = 100;
      gridColumn = 'span 1';
      break;
  }

  return (
    <div>
      {logo && <img alt={logo?.caption} src={imageUrlFor(logo).url()} />}
      {!logo && <LogoPlaceholder title={title} />}
      <style jsx>{`
        div {
          height: 200px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 100%;
        }
      `}</style>
    </div>
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
    <a
      href={link ?? ''}
      onClick={() => ga.captureOutboundLink(link)}
      target="_blank"
      rel="noreferrer"
    >
      {logo && <LogoImage title={title} logo={logo} size={size} />}
      {!logo && <LogoPlaceholder title={title} />}
    </a>
  );
};

const Card = ({ data }: { data: any }) => {
  const { title, logo, size, link } = data;
  const { className, styles } = getStyles(size);

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
