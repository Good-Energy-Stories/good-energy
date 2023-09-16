import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';

import aboutBlock from './about-block';
import aboutPage from './about-page';
import accordion from './accordion';
import article from './article';
import articleBlockQuote from './article-block-quote';
import articleIntroductionSection from './article-introduction-section';
import articleList from './article-list';
import articleQuote from './article-quote';
import articleSection from './article-section';
import articleSpotIllustration from './article-spot-illustration';
import articleStoryPossibility from './article-story-possibility';
import attributionIndividual from './attribution-individual';
import author from './author';
import callout from './callout';
import calloutSection from './callout-section';
import characterProfile from './character-profile';
import characterProfilesPage from './character-profiles-page';
import characterProfilesSection from './character-profiles-section';
import characterProfilesTeaseSection from './character-profiles-tease-section';
import client from './client';
import climateLensBlock from './climate-lens-block';
import consultingContactPage from './consulting-contact-page';
import contactForm from './contact-form';
import contactPage from './contact-page';
import ctaButton from './cta-button';
import ctaLink from './cta-link';
import dataVisualization from './data-visualization';
import downloadsSection from './downloads-section';
import emailCapture from './email-capture';
import endOfYearReportPage from './end-of-year-report-page';
import expertProfile from './expert-profile';
import featuredVoice from './featured-voice';
import featuredVoiceQuote from './featured-voice-quote';
import featuredVoicesPage from './featured-voices-page';
import featuredVoicesSection from './featured-voices-section';
import fullWidthImage from './full-width-image';
import fullWidthStatement from './full-width-statement';
import fundingPartners from './funding-partners';
import halfPageContent from './half-page-content';
import imageCarousel from './image-carousel';
import individualPartnerFeature from './individual-partner-feature';
import individualPressFeature from './individual-press-feature';
import landAcknowledgment from './land-acknowledgment';
import landingPage from './landing-page';
import libraryOfExpertsPage from './library-of-experts-page';
import libraryOfExpertsSection from './library-of-experts-section';
import logline from './logline';
import meetOurExperts from './meet-our-experts';
import navigation from './navigation';
import newsletterCTA from './newsletter-cta';
import ourClients from './our-clients';
import ourOfferings from './our-offerings';
import offering from './offering';
import offeringsPage from './offerings-page';
import outlet from './outlet';
import page from './page';
import pageDivider from './page-divider';
import pageSeo from './page-seo';
import partner from './partner';
import partnerPage from './partners-page';
import partnerSection from './partner-section';
import playbookHome from './playbook-home';
import playbookPage from './playbook-page';
import playbookQuote from './playbook-quote';
import playbookSection from './playbook-section';
import playbookStructure from './playbook-structure';
import playbookSubsection from './playbook-subsection';
import playbookThreeColumn from './playbook-three-column';
import playlist from './playlist';
import playlistsPage from './playlists-page';
import press from './press';
import pressHero from './press-hero';
import pressPage from './press-page';
import pressSection from './press-section';
import quote from './quote';
import quoteCollection from './quote-collection';
import resource from './resource';
import resourceSection from './resource-section';
import seo from './seo';
import socials from './socials';
import source from './source';
import spotIllustration from './spot-illustration';
import standardPagePortableText from './standard-page-portable-text';
import statement from './statement';
import team from './team-member';
import teamPage from './team-page';
import teamSection from './team-section';
import testimonial from './testimonial';
import thirdPageContent from './third-page-content';
import threeColumnLayout from './three-column-layout';
import twoColumnLayout from './two-column-layout';
import twoWorldsArticle from './two-worlds-article';
import twoWorldsCompareSection from './two-worlds-compare-section';
import twoWorldsSection from './two-worlds-section';
import whyClimateArticle from './why-climate-article';
import whyClimateTextBlock from './why-climate-text-block';
import workshopsPage from './workshops-page';
import writtenContent from './written-content';
import errorPage from './error-page';
import redirect from './redirect';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutBlock,
    aboutPage,
    accordion,
    article,
    articleBlockQuote,
    articleIntroductionSection,
    articleList,
    articleQuote,
    articleSection,
    articleSpotIllustration,
    articleStoryPossibility,
    attributionIndividual,
    author,
    blockContent,
    callout,
    calloutSection,
    characterProfile,
    characterProfilesPage,
    characterProfilesSection,
    characterProfilesTeaseSection,
    client,
    climateLensBlock,
    consultingContactPage,
    contactForm,
    contactPage,
    ctaButton,
    ctaLink,
    dataVisualization,
    downloadsSection,
    emailCapture,
    endOfYearReportPage,
    expertProfile,
    featuredVoice,
    featuredVoiceQuote,
    featuredVoicesPage,
    featuredVoicesSection,
    fullWidthImage,
    fullWidthStatement,
    fundingPartners,
    halfPageContent,
    imageCarousel,
    individualPartnerFeature,
    individualPressFeature,
    landAcknowledgment,
    landingPage,
    libraryOfExpertsPage,
    libraryOfExpertsSection,
    logline,
    meetOurExperts,
    navigation,
    newsletterCTA,
    offering,
    offeringsPage,
    ourClients,
    ourOfferings,
    outlet,
    page,
    pageDivider,
    pageSeo,
    partner,
    partnerPage,
    partnerSection,
    playbookHome,
    playbookPage,
    playbookQuote,
    playbookSection,
    playbookStructure,
    playbookSubsection,
    playbookThreeColumn,
    playlist,
    playlistsPage,
    press,
    pressHero,
    pressPage,
    pressSection,
    quote,
    quoteCollection,
    resource,
    resourceSection,
    seo,
    socials,
    source,
    spotIllustration,
    standardPagePortableText,
    statement,
    team,
    teamPage,
    teamSection,
    testimonial,
    thirdPageContent,
    threeColumnLayout,
    twoColumnLayout,
    twoWorldsArticle,
    twoWorldsCompareSection,
    twoWorldsSection,
    whyClimateArticle,
    whyClimateTextBlock,
    workshopsPage,
    writtenContent,
    errorPage,
    redirect,
  ]),
});
