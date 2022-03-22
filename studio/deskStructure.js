import S from '@sanity/desk-tool/structure-builder';
import { BsGrid3X2GapFill } from 'react-icons/bs';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Playbook Home')
        .child(
          S.document()
            .title('Playbook Home')
            .schemaType('playbookHome')
            .documentId('playbookHome'),
        )
        .icon(BsGrid3X2GapFill),

      ...S.documentTypeListItems().filter(
        (listItem) => !['playbookHome'].includes(listItem.getId()),
      ),
    ]);
