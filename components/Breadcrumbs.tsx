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
  if (!router.isReady) {
    return null;
  }

  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split('?')[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);

    if (dropCurrent) {
      asPathNestedRoutes.pop();
    }

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      // The title will just be the route string for now
      const label = subpath.replaceAll('-', ' ');
      return { href, label };
    });

    // Add in a default "Home" crumb for the top-level
    return [...crumblist];
  }

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = generateBreadcrumbs();
  const currentBreadcrumbs = path ?? breadcrumbs;
  return (
    <>
      <div>
        {currentBreadcrumbs.map(({ label, href }, i) => (
          <span key={i}>
            <PathLabel
              label={label}
              href={href}
              last={currentBreadcrumbs.length - 1 === i}
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
