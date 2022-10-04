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
import socials from './socials';
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
import standardPagePortableText from './standard-page-portable-text';
import pressPage from './press-page';
import press from './press';
import outlet from './outlet';
import callout from './callout';
import climateLensBlock from './climate-lens-block';
import testimonial from './testimonial';
import calloutSection from './callout-section';
import workshopsPage from './workshops-page';
import spotIllustration from './spot-illustration';
import ctaButton from './cta-button';
import twoColumnLayout from './two-column-layout';
import ctaLink from './cta-link';
import writtenContent from './written-content';
import attributionIndividual from './attribution-individual';
import offeringsPage from './offerings-page';
import source from './source';
import consultingContactPage from './consulting-contact-page';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutPage,
    article,
    articleBlockQuote,
    articleIntroductionSection,
    articleQuote,
    articleSection,
    articleStoryPossibility,
    author,
    blockContent,
    callout,
    calloutSection,
    characterProfile,
    characterProfilesPage,
    climateLensBlock,
    consultingContactPage,
    contactPage,
    emailCapture,
    expertProfile,
    featuredVoice,
    featuredVoiceQuote,
    featuredVoicesPage,
    individualPartnerFeature,
    landingPage,
    libraryOfExpertsPage,
    outlet,
    pageSeo,
    partner,
    partnerPage,
    partnerSection,
    playbookHome,
    playbookQuote,
    playbookSection,
    playbookStructure,
    playbookSubsection,
    playbookThreeColumn,
    playlist,
    playlistsPage,
    press,
    pressPage,
    quote,
    quoteCollection,
    resource,
    resourceSection,
    seo,
    socials,
    standardPagePortableText,
    testimonial,
    attributionIndividual,
    team,
    teamPage,
    twoWorldsArticle,
    twoWorldsCompareSection,
    twoWorldsSection,
    whyClimateArticle,
    whyClimateTextBlock,
    workshopsPage,
    spotIllustration,
    ctaButton,
    twoColumnLayout,
    ctaLink,
    writtenContent,
    offeringsPage,
    source,
  ]),
});
