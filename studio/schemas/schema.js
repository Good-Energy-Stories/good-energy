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
import emailCapture from './email-capture';
import expertProfile from './expert-profile';
import featuredVoice from './featured-voice';
import featuredVoicesPage from './featured-voices-page';
import featuredVoiceQuote from './featured-voice-quote';
import landingPage from './landing-page';
import libraryOfExpertsPage from './library-of-experts-page';
import partner from './partner';
import partnerPage from './partners-page';
import partnerSection from './partner-section';
import playbookHome from './playbook-home';
import playbookSection from './playbook-section';
import playbookStructure from './playbook-structure';
import playbookQuote from './playbook-quote';
import playbookThreeColumn from './playbook-three-column';
import playlist from './playlist';
import quote from './quote';
import quoteCollection from './quote-collection';
import resource from './resource';
import resourceSection from './resource-section';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    article,
    articleBlockQuote,
    articleIntroductionSection,
    articleQuote,
    articleSection,
    articleStoryPossibility,
    author,
    characterProfile,
    characterProfilesPage,
    emailCapture,
    expertProfile,
    featuredVoice,
    featuredVoicesPage,
    featuredVoiceQuote,
    landingPage,
    libraryOfExpertsPage,
    partner,
    partnerPage,
    partnerSection,
    playbookStructure,
    playbookHome,
    playbookSection,
    playbookQuote,
    playbookThreeColumn,
    playlist,
    quote,
    quoteCollection,
    resource,
    resourceSection,
  ]),
});
