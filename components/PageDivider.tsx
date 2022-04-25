import React from 'react';

export enum PageDividerSize {
  half = 2,
  full = 4,
}

export enum PageDividerLabelSize {
  small = 'small',
  medium = 'medium',
}

export const PageDivider = ({
  label,
  labelSize = PageDividerLabelSize.medium,
  size = PageDividerSize.full,
  marginBottom,
}: {
  label?: string;
  labelSize?: string;
  size?: PageDividerSize;
  marginBottom?: string;
}) => {
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
    <div>
      {pageDividerLabel}
      <style jsx>{`
        div {
          border-bottom: 1px solid var(--blueThree);
          width: calc(100% - 2.5rem);
          margin: 0 1.25rem;

          margin-bottom: ${marginBottom ?? '2.5rem'};
          grid-column: span ${size};
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
