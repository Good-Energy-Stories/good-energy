import css from 'styled-jsx/css';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import ChevronRight from '../public/chevron-right.svg';
import Link from 'next/link';
interface Breadcrumb {
  label: string;
  href: string;
}

export type Breadcrumbs = Breadcrumb[];

const PathDivider = () => {
  return (
    <>
      <span className="label-medium">
        <ChevronRight />
      </span>

      <style jsx>{`
        span {
          padding: 0 0.625rem;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

const PathLabel = ({ label, href, last }) => {
  return (
    <>
      <span>
        <Link href={href}>
          <a className="label-medium">{label.replaceAll('-', ' ')}</a>
        </Link>
      </span>

      <style jsx>{`
        span {
          text-transform: uppercase;
          color: ${last ? 'var(--black)' : 'var(--blueThree)'};
        }
        a {
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
};

const Breadcrumbs = ({ path }: { path?: Breadcrumbs }) => {
  const router = useRouter();
  const { asPath } = router;

  const routerPath = asPath
    .substring(1)
    .split('/')
    .map((c) => ({ label: c, href: `/${c}` }));
  const crumbs = path ?? routerPath;
  return (
    <>
      <div>
        {crumbs.map(({ label, href }, i) => (
          <span key={i}>
            <PathLabel
              label={label}
              href={href}
              last={crumbs.length - 1 === i}
            />
            {crumbs.length - 1 !== i && <PathDivider key={i} />}
          </span>
        ))}
      </div>

      <style jsx>{`
        div {
          font-size: 18px;
          margin-bottom: 0.625rem;
        }
      `}</style>
    </>
  );
};

export default Breadcrumbs;
