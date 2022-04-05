import React from 'react';

export enum PageDividerSize {
  half = 2,
  full = 4,
}

export const PageDivider = ({
  label,
  size = PageDividerSize.full,
}: {
  label?: string;
  size?: PageDividerSize;
}) => {
  return (
    <div>
      {label && <h4>{label}</h4>}
      <style jsx>{`
        h4 {
          margin-bottom: 0.625rem;
          margin-top: 2.5rem;
        }
        div {
          border-bottom: 1px solid var(--blueThree);
          width: calc(100% - 2.5rem);
          margin: 0 1.25rem;

          margin-bottom: 2.5rem;
          grid-column: span ${size};
        }
      `}</style>
    </div>
  );
};

export default PageDivider;
