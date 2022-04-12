import React from 'react';
import { AuthorCard } from '../Cards';

export const AuthorSection = ({ content }) => {
  if (!content) return null;
  return (
    <div>
      {content.map((a, i) => {
        return <AuthorCard key={i} content={a} index={i} />;
      })}
      <style jsx>{`
        div {
          border-top: 1px solid var(--blueThree);
          display: grid;
          grid-template-columns: var(--grid-col);
          margin: 0 2.5rem;
          margin-bottom: 2.5rem;
          grid-column: 1/5;
        }
        @media only screen and (max-width: 768px) {
          div {
            margin: 0 1.25rem;
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthorSection;
