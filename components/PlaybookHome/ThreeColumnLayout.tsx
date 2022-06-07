import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '../Cards';
import { ArticleCardStyle, CharacterProfileCardStyle } from '../Cards';
import { FEATURED_TAG_LINE_HEIGHT } from '../Cards/FeaturedTag';
import PageDivider from '../PageDivider';
import { SECONDARY_MENU_HEIGHT } from '../SecondaryNavMenu/SecondaryNavMenu';

const SHIFTED_TOP_SECONDARY = `calc(${FEATURED_TAG_LINE_HEIGHT}px + ${SECONDARY_MENU_HEIGHT}px)`;
const TOP_OFFSET = `calc(0.625rem + ${SECONDARY_MENU_HEIGHT}px)`;
interface ThreeColumnLayoutData {
  leftColumn: any[];
  mainColumn: any[];
  rightColumn: any[];
}

export enum ThreeColumnLayoutStyle {
  primary = 'primary',
  secondary = 'secondary',
}

const getPrimaryColumnArticleCardStyle = (
  style: ThreeColumnLayoutStyle,
): ArticleCardStyle => {
  switch (style) {
    case ThreeColumnLayoutStyle.primary:
      return ArticleCardStyle.featured;
    case ThreeColumnLayoutStyle.secondary:
      return ArticleCardStyle.featuredSecondary;
  }
};

const getPrimaryColumnCharacterProfileCardStyle = (
  style: ThreeColumnLayoutStyle,
): CharacterProfileCardStyle => {
  switch (style) {
    case ThreeColumnLayoutStyle.primary:
    case ThreeColumnLayoutStyle.secondary:
      return CharacterProfileCardStyle.featuredSecondary;
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

const getSecondaryColumnCharacterProfileCardStyle = (
  style: ThreeColumnLayoutStyle,
): CharacterProfileCardStyle => {
  switch (style) {
    case ThreeColumnLayoutStyle.primary:
      return CharacterProfileCardStyle.standard;
    case ThreeColumnLayoutStyle.secondary:
      return CharacterProfileCardStyle.small;
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
  const leftColumnCharacterProfileCardStyle =
    getSecondaryColumnCharacterProfileCardStyle(style);
  if (!data) return null;
  return (
    <>
      <div className="three-column-left">
        {data.map((c, i) => (
          <Card
            key={i}
            index={i}
            last={i === data.length - 1}
            content={c}
            articleCardStyle={leftColumnCardStyle}
            characterProfileCardStyle={leftColumnCharacterProfileCardStyle}
          />
        ))}
      </div>
      <style jsx>{`
        .three-column-left {
          grid-column: 1/2;
          padding-left: 1.25rem;
          margin-top: ${TOP_OFFSET};
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        @media only screen and (max-width: 768px) {
          .three-column-left {
            grid-column: 1/5;
            padding: 0 1.25rem;
            margin-top: 1.25rem;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

const MainColumn = ({
  data,
  style,
  secondaryColumnsEmpty,
}: {
  data: any;
  style: ThreeColumnLayoutStyle;
  secondaryColumnsEmpty: boolean;
}) => {
  const mainColumnArticleCardStyle = getPrimaryColumnArticleCardStyle(style);
  const mainColumnCharacterProfileCardStyle =
    getPrimaryColumnCharacterProfileCardStyle(style);

  if (!data) return null;
  return (
    <>
      <div className="container">
        {data.map((c, i) => (
          <Card
            key={i}
            index={i}
            last={i === data.length - 1}
            shouldUseExpandedStyles={secondaryColumnsEmpty}
            content={c}
            articleCardStyle={mainColumnArticleCardStyle}
            characterProfileCardStyle={mainColumnCharacterProfileCardStyle}
          />
        ))}
      </div>
      <style jsx>{`
        .container {
          grid-column: 2/4;
          padding: 0 1.25rem;
          margin-top: ${TOP_OFFSET};
          margin-bottom: 1.25rem;
        }
        @media only screen and (max-width: 768px) {
          .container {
            grid-column: 1/5;
            padding: 0 1.25rem;
            margin-top: 1.25rem;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
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
  const rightColumnCharacterProfileCardStyle =
    getSecondaryColumnCharacterProfileCardStyle(style);
  if (!data) return null;
  return (
    <>
      <div className="three-column-right">
        {data.map((c, i) => (
          <Card
            key={i}
            index={i}
            last={i === data.length - 1}
            content={c}
            articleCardStyle={rightColumnCardStyle}
            characterProfileCardStyle={rightColumnCharacterProfileCardStyle}
          />
        ))}
      </div>
      <style jsx>{`
        .three-column-right {
          grid-column: 4/5;
          padding-right: 1.25rem;
          margin-top: ${TOP_OFFSET};
          margin-bottom: 1.25rem;
          align-content: flex-end;
          display: flex;
          align-items: flex-end;
          flex-direction: column;
        }
        @media only screen and (max-width: 768px) {
          .three-column-right {
            grid-column: 1/5;
            padding: 0 1.25rem;
            margin-top: 1.25rem;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export const ThreeColumnLayout = ({
  data,
  style,
}: {
  data: ThreeColumnLayoutData;
  style: ThreeColumnLayoutStyle;
}) => {
  const { leftColumn, mainColumn, rightColumn } = data;

  return (
    <>
      {style !== ThreeColumnLayoutStyle.primary && (
        <PageDivider label={'More Stories'} />
      )}
      <LeftColumn data={leftColumn} style={style} />
      <MainColumn
        data={mainColumn}
        style={style}
        secondaryColumnsEmpty={leftColumn === null && rightColumn === null}
      />
      <RightColumn data={rightColumn} style={style} />
    </>
  );
};

export default ThreeColumnLayout;
