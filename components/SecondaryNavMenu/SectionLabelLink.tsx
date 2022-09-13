import Link from 'next/link';

const SectionLabelLink = ({ title, slug, ...props }) => {
  return (
    <>
      <Link href={`/playbook/${slug}`} {...props}>
        <a id={`menu-item-${title}`} className="playbook-toc-nav-link-small">
          {title}
        </a>
      </Link>

      <style jsx>{`
        a {
          transition: 0.3s ease;
        }
        a:hover {
          opacity: 0.6;
        }
        .playbook-toc-nav-link-small {
          color: var(--black);
          margin: 0 0.625rem;
          padding: 0.625rem 0.625rem;
          border-bottom: 1px solid var(--greyBlue);
        }
        .playbook-toc-nav-link-small:last-of-type {
          border: 0;
        }
      `}</style>
    </>
  );
};

export default SectionLabelLink;
