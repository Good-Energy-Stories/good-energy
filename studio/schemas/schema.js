import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';

import article from './article';
import articleBlockQuote from './article-block-quote';
import articleIntroductionSection from './article-introduction-section';
import articleQuote from './article-quote';
import articleSection from './article-section';
import articleStoryPossibility from './article-story-possibility';
import author from './author';
import characterProfile from './character-profile';
import characterProfilesPage from './character-profiles-page';
import contactPage from './contact-page';
import emailCapture from './email-capture';
import expertProfile from './expert-profile';
import featuredVoice from './featured-voice';
import featuredVoicesPage from './featured-voices-page';
import featuredVoiceQuote from './featured-voice-quote';
import individualPartnerFeature from './individual-partner-feature';
import landingPage from './landing-page';
import libraryOfExpertsPage from './library-of-experts-page';
import partner from './partner';
import partnerPage from './partners-page';
import partnerSection from './partner-section';
import playbookHome from './playbook-home';
import playbookSection from './playbook-section';
import playbookSubsection from './playbook-subsection';
import playbookStructure from './playbook-structure';
import playbookQuote from './playbook-quote';
import playbookThreeColumn from './playbook-three-column';
import playlist from './playlist';
import playlistsPage from './playlists-page';
import quote from './quote';
import quoteCollection from './quote-collection';
import resource from './resource';
import resourceSection from './resource-section';
import seo from './seo';
import team from './team-member';
import teamPage from './team-page';
import twoWorldsArticle from './two-worlds-article';
import twoWorldsCompareSection from './two-worlds-compare-section';
import twoWorldsSection from './two-worlds-section';
import whyClimateArticle from './why-climate-article';
import whyClimateTextBlock from './why-climate-text-block';
import aboutPage from './about-page';
import pageSeo from './page-seo';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    aboutPage,
    article,
    articleBlockQuote,
    articleIntroductionSection,
    articleQuote,
    articleSection,
    articleStoryPossibility,
    author,
    characterProfile,
    characterProfilesPage,
    contactPage,
    emailCapture,
    expertProfile,
    featuredVoice,
    featuredVoicesPage,
    featuredVoiceQuote,
    individualPartnerFeature,
    landingPage,
    libraryOfExpertsPage,
    pageSeo,
    partner,
    partnerPage,
    partnerSection,
    playbookStructure,
    playbookHome,
    playbookSection,
    playbookSubsection,
    playbookQuote,
    playbookThreeColumn,
    playlist,
    playlistsPage,
    quote,
    quoteCollection,
    resource,
    resourceSection,
    seo,
    team,
    teamPage,
    twoWorldsArticle,
    twoWorldsCompareSection,
    twoWorldsSection,
    whyClimateArticle,
    whyClimateTextBlock,
  ]),
});
