import React from 'react';

export enum PageDividerSize {
  half = 2,
  full = 4,
}

export enum PageDividerLabelSize {
  small = 'small',
  medium = 'medium',
}

export const PageDivider = ({ label, labelSize, className, style }: any) => {
  var pageDividerLabel;
  switch (labelSize) {
    case PageDividerLabelSize.small:
      pageDividerLabel = (
        <div className="label-medium">
          {label}
          <style jsx>{`
            .label-medium {
              color: var(--blueThree);
              margin-bottom: 0.625rem;
            }
          `}</style>
        </div>
      );
      break;
    case PageDividerLabelSize.medium:
      pageDividerLabel = (
        <h4>
          {label}
          <style jsx>{`
            h4 {
              margin-bottom: 0.625rem;
              margin-top: 2.5rem;
            }
          `}</style>
        </h4>
      );
      break;
  }

  return (
    <div className={className} style={style}>
      {pageDividerLabel}
      <style jsx>{`
        div {
          border-bottom: 1px solid var(--blueThree);
          grid-column: 1/5;
        }
        @media only screen and (max-width: 768px) {
          div {
            margin-bottom: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PageDivider;
