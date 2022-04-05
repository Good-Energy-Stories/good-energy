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
            'playbookHome',
            'landingPage',
            'partnersPage',
            'characterProfilesPage',
            'playbookStructure',
            'article',
            'characterProfile',
            'quoteCollection',
            'playlist',
            'expertProfile',
            'featuredVoice',
            'partner',
            'partnerSection',
          ].includes(listItem.getId()),
      ),
    ]);
