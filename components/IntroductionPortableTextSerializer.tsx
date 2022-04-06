import { PortableTextReactComponents } from '@portabletext/react';

const IntrodutionPortableTextSerializer: Partial<PortableTextReactComponents> =
  {
    block: {
      normal: (props) => {
        const { children, index } = props;
        console.log(props);
        if (index === 0) {
          return (
            <p className="intro-graf">
              {children}
              <style jsx>{`
                .intro-graf {
                  margin-top: 1.25rem;
                  margin-bottom: 1.25rem;
                }
              `}</style>
            </p>
          );
        }
        return <p className="body ">{children}</p>;
      },
    },
    marks: {
      strong: ({ children }) => (
        <span className="intro-graf-bold">{children}</span>
      ),
      blockQuote: ({ children }) => {
        return <p className="block-quote">{children}</p>;
      },
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http')
          ? '_blank'
          : undefined;
        return (
          <a
            className="intro-graf-link"
            href={value?.href}
            target={target}
            rel={target === '_blank' && 'noindex nofollow'}
          >
            {children}
          </a>
        );
      },
    },
  };

export default IntrodutionPortableTextSerializer;
