import css from 'styled-jsx/css';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import ChevronRight from '../public/chevron-right.svg';
import Link from 'next/link';
interface Breadcrumb {
  label: string;
  href?: string;
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
  if (!label) return null;
  return (
    <>
      <div>
        {last ? (
          <span className="label-medium">{label}</span>
        ) : (
          <Link href={href}>
            <a className="label-medium">{label}</a>
          </Link>
        )}
        {!last && <PathDivider />}
      </div>

      <style jsx>{`
        div {
          text-transform: uppercase;
          color: ${last ? 'var(--black)' : 'var(--blueThree)'};
          display: inline-block;
        }

        a {
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
};

const Breadcrumbs = ({
  path,
  dropCurrent,
}: {
  path?: Breadcrumbs;
  dropCurrent?: boolean;
}) => {
  const router = useRouter();
  const { asPath } = router;
  const asPathArray = asPath.substring(1).split('/');
  const routerPath = asPathArray
    .slice(0, dropCurrent ? asPathArray.length - 1 : asPathArray.length)
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
