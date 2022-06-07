import { queries } from '../../data';
import {
  Layout,
  StickyNavBar,
  NavBarStyles,
  Meta,
  ExitPreviewButton,
} from '..';
import {
  Header,
  Divider,
  TOC,
  SectionRefLookup,
  Body,
  Introduction,
  Banner,
  AuthorSection,
  NextUp,
  MobileFootnotes,
} from '.';
import { Footer } from '../Footer';
import { useRef } from 'react';

import { observer } from 'mobx-react-lite';

const ArticleBody = observer(
  ({ data, isInPlaylist }: { data: any; isInPlaylist?: boolean }) => {
    const {
      title,
      byline,
      lede,
      slug,
      seo,
      introduction,
      body,
      heroImage,
      section,
      footnotes,
      relatedSubsection,
    } = data;
    const sectionsRef = useRef<SectionRefLookup>({});

    const sectionsTOC = body
      ?.filter((e) => e._type === 'articleSection')
      .map((e) => ({ key: e._key, title: e.title }));

    return (
      <div>
        <Banner image={heroImage} isInPlaylist={isInPlaylist} />
        <Header
          title={title}
          byline={byline}
          hasBannerImage={heroImage ? true : false}
          section={section}
        />
        <Divider />
        <TOC sections={sectionsTOC} sectionsRef={sectionsRef} />
        <Introduction
          body={data?.introduction}
          includeDropCap={data?.includeDropCap}
        />
        <Body body={data?.body} sectionsRef={sectionsRef} />

        <AuthorSection content={data?.author} />
        <style jsx>{`
          div {
            grid-column: 1/5;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        `}</style>
      </div>
    );
  },
);

export default ArticleBody;
