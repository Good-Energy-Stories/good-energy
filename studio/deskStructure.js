import S from '@sanity/desk-tool/structure-builder';
import { pagesMenu } from './desk/pages';
import { playbookMenu } from './desk/playbook';
import { aboutMenu } from './desk/about';
import SeoPane from 'sanity-plugin-seo-pane';
import resolveProductionUrl from './resolveProductionUrl';
import SocialPreview from 'part:social-preview/component';
import { BiLinkAlt, BiNavigation } from 'react-icons/bi';

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (['article'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(
          SocialPreview({
            prepareFunction: ({ title, slug, heroImage }) => {
              return {
                title: title ?? '',
                description: '',
                siteUrl: 'https://www.good--energy.com/',
                ogImage: heroImage ?? '',
                slug: `playbook/${slug?.current}`,
              };
            },
          }),
        )
        .title('SEO'),
    ]);
  }
  return S.document().views([S.view.form()]);
};

const filteredDocuments = [
  'aboutPage',
  'article',
  'author',
  'calloutSection',
  'characterProfile',
  'characterProfilesPage',
  'characterProfilesSection',
  'characterProfilesTeaseSection',
  'climateLensBlock',
  'consultingContactPage',
  'consultingPage',
  'contactPage',
  'endOfYearReportPage',
  'expertProfile',
  'featuredVoice',
  'featuredVoicesPage',
  'individualPartnerFeature',
  'individualPressFeature',
  'landingPage',
  'libraryOfExpertsPage',
  'libraryOfExpertsSection',
  'navigation',
  'offeringsPage',
  'page',
  'partner',
  'partnerSection',
  'partnersPage',
  'playbookHome',
  'playbookPage',
  'playbookSection',
  'playbookStructure',
  'playbookSubsection',
  'playlist',
  'playlistsPage',
  'press',
  'pressPage',
  'pressSection',
  'quoteCollection',
  'resource',
  'socials',
  'teamMember',
  'teamPage',
  'teamSection',
  'testimonial',
  'twoWorldsArticle',
  'whyClimateArticle',
  'workshopsPage',
];

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Navigation')
        .child(
          S.document()
            .title('Navigation')
            .schemaType('navigation')
            .documentId('navigation'),
        )
        .icon(BiNavigation),
      S.divider(),
      pagesMenu,
      S.divider(),
      playbookMenu,
      S.divider(),
      aboutMenu,
      S.divider(),
      S.listItem()
        .title('Socials')
        .child(
          S.document()
            .title('Socials')
            .schemaType('socials')
            .documentId('socials'),
        )
        .icon(BiLinkAlt),
      ...S.documentTypeListItems().filter(
        (listItem) => !filteredDocuments.includes(listItem.getId()),
      ),
    ]);
