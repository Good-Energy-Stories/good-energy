import S from '@sanity/desk-tool/structure-builder';
import { pagesMenu } from './desk/pages';
import { playbookMenu } from './desk/playbook';
import { aboutMenu } from './desk/about';

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
            'expertProfile',
            'featuredVoice',
            'featuredVoicesPage',
            'landingPage',
            'libraryOfExpertsPage',
            'partner',
            'partnerSection',
            'partnersPage',
            'playbookHome',
            'playbookStructure',
            'playlist',
            'quoteCollection',
          ].includes(listItem.getId()),
      ),
    ]);
