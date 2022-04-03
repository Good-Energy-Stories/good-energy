import S from '@sanity/desk-tool/structure-builder';
import { pagesMenu } from './desk/pages';
import { playbookMenu } from './desk/playbook';
export default () =>
  S.list()
    .title('Base')
    .items([
      pagesMenu,
      S.divider(),
      playbookMenu,
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
            'expertProfile',
            'quoteCollection',
            'playlist',
          ].includes(listItem.getId()),
      ),
    ]);
