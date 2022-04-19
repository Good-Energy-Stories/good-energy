import { PortableTextReactComponents } from '@portabletext/react';

const PortableTextSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="body">{children}</p>,
  },
  listItem: {
    bullet: ({ children }) => <li className="body">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <span className="body-bold">{children}</span>,
    link: ({ value, children }) => {
      const target = (value?.url || '').startsWith('http')
        ? '_blank'
        : undefined;
      return (
        <a
          className="body-link"
          href={value?.url}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {children}
        </a>
      );
    },
  },
};

export default PortableTextSerializer;
