import S from '@sanity/desk-tool/structure-builder';
import { pagesMenu } from './desk/pages';
import { playbookMenu } from './desk/playbook';
import { aboutMenu } from './desk/about';
import SeoPane from 'sanity-plugin-seo-pane';
import resolveProductionUrl from './resolveProductionUrl';
import SocialPreview from 'part:social-preview/component';

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

export default () =>
  S.list()
    .title('Base')
    .items([
      pagesMenu,
      S.divider(),
      playbookMenu,
      S.divider(),
      aboutMenu,
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'article',
            'author',
            'characterProfile',
            'characterProfilesPage',
            'contactPage',
            'expertProfile',
            'featuredVoice',
            'featuredVoicesPage',
            'individualPartnerFeature',
            'landingPage',
            'libraryOfExpertsPage',
            'partner',
            'partnerSection',
            'partnersPage',
            'playbookHome',
            'playbookStructure',
            'playlist',
            'playbookSection',
            'playbookSubsection',
            'quoteCollection',
            'teamMember',
            'teamPage',
            'twoWorldsArticle',
            'whyClimateArticle',
          ].includes(listItem.getId()),
      ),
    ]);
