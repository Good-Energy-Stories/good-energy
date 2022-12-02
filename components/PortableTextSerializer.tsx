import { PortableTextReactComponents } from '@portabletext/react';
import List from './PortableTextComponents/List/List';
import Bullet from './PortableTextComponents/ListItem/Bullet';
import InternalLink from './PortableTextComponents/InternalLink/InternalLink';
import Link from './PortableTextComponents/Link/Link';
import Footnote from './PortableTextComponents/Footnote/Footnote';

const PortableTextSerializer: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="body">
        <span>{children}</span>
      </p>
    ),
  },
  list: List,
  listItem: {
    bullet: Bullet,
  },
  marks: {
    highlight: ({ children }) => (
      <span style={{ color: 'var(--blueFour)' }}>{children}</span>
    ),
    dropcap: ({ children }) => {
      return <p className="intro-graf">{children}</p>;
    },
    strong: ({ children }) => {
      return <span className="body-bold">{children}</span>;
    },
    internalLink: InternalLink,
    link: Link,
    footnote: Footnote,
  },
};

export default PortableTextSerializer;
