import { PortableTextReactComponents } from '@portabletext/react';
import FootnoteNumber from './FootnoteNumber';
import Link from 'next/link';
const PortableTextSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body">{children}</p>,
  },
  listItem: {
    bullet: ({ children }) => <li className="body">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <span className="body-bold">{children}</span>,
    internalLink: ({ value, children }) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return (
        <Link href={`/playbook/${href}`}>
          <a className="body-link">{children}</a>
        </Link>
      );
    },
    link: ({ value, children }) => {
      const target = (value?.url || value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="body-link"
          href={value?.url || value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
    footnote: ({ value, children }) => (
      <span className="body-footnote">
        {children}
        <FootnoteNumber number={value?.number} />
      </span>
    ),
  },
};

export default PortableTextSerializer;
