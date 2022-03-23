import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '../Cards';
import { ArticleCardStyle } from '../Cards';
import { FEATURED_TAG_LINE_HEIGHT } from '../Cards/FeaturedTag';
import PageDivider from './PageDivider';

const SHIFTED_TOP_SECONDARY = `calc(${FEATURED_TAG_LINE_HEIGHT}px + 1.875rem)`;
interface ThreeColumnLayoutData {
  leftColumn: any[];
  mainColumn: any[];
  rightColumn: any[];
}

export enum ThreeColumnLayoutStyle {
  primary = 'primary',
  secondary = 'secondary',
}

const getPrimaryColumnCardStyle = (
  style: ThreeColumnLayoutStyle,
): ArticleCardStyle => {
  switch (style) {
    case ThreeColumnLayoutStyle.primary:
      return ArticleCardStyle.featured;
    case ThreeColumnLayoutStyle.secondary:
      return ArticleCardStyle.featuredSecondary;
  }
};

const getSecondaryColumnCardStyle = (
  style: ThreeColumnLayoutStyle,
): ArticleCardStyle => {
  switch (style) {
    case ThreeColumnLayoutStyle.primary:
      return ArticleCardStyle.standard;
    case ThreeColumnLayoutStyle.secondary:
      return ArticleCardStyle.small;
  }
};

const LeftColumn = ({
  data,
  style,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
}) => {
  const leftColumnCardStyle = getSecondaryColumnCardStyle(style);
  if (!data) return null;
  return (
    <div>
      {data.map((c, i) => (
        <Card
          key={i}
          index={i}
          content={c}
          articleCardStyle={leftColumnCardStyle}
        />
      ))}
      <style jsx>{`
        div {
          grid-column: 1/2;
          padding-left: 1.25rem;
          margin-top: ${style === ThreeColumnLayoutStyle.primary
            ? SHIFTED_TOP_SECONDARY
            : '1.25rem'};
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

const MainColumn = ({
  data,
  style,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
}) => {
  const mainColumnCardStyle = getPrimaryColumnCardStyle(style);
  if (!data) return null;
  return (
    <div>
      {data.map((c, i) => (
        <Card
          key={i}
          index={i}
          content={c}
          articleCardStyle={mainColumnCardStyle}
        />
      ))}
      <style jsx>{`
        div {
          grid-column: 2/4;
          padding: 0 1.25rem;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
};

const RightColumn = ({
  data,
  style,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
}) => {
  const rightColumnCardStyle = getSecondaryColumnCardStyle(style);
  if (!data) return null;
  return (
    <div>
      {data.map((c, i) => (
        <Card
          key={i}
          index={i}
          content={c}
          articleCardStyle={rightColumnCardStyle}
        />
      ))}
      <style jsx>{`
        div {
          grid-column: 4/5;
          padding-right: 1.25rem;
          margin-top: ${style === ThreeColumnLayoutStyle.primary
            ? SHIFTED_TOP_SECONDARY
            : '1.25rem'};
          margin-bottom: 1.25rem;
          align-content: flex-end;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export const ThreeColumnLayout = ({
  data,
  style,
}: {
  data: ThreeColumnLayoutData;
  style: ThreeColumnLayoutStyle;
}) => {
  console.log('style: ', style);
  const { leftColumn, mainColumn, rightColumn } = data;
  return (
    <>
      <PageDivider style={style} />
      <LeftColumn data={leftColumn} style={style} />
      <MainColumn data={mainColumn} style={style} />
      <RightColumn data={rightColumn} style={style} />
    </>
  );
};

export default ThreeColumnLayout;
