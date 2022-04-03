import S from '@sanity/desk-tool/structure-builder';
import { GiBookCover } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaRegListAlt } from 'react-icons/fa';

export const playbookMenu = S.listItem()
  .title('Playbook')
  .id('playbook')
  .child(
    S.list()
      .title('Playbook')
      .items([
        S.listItem()
          .title('Playbook Structure')
          .child(
            S.document()
              .title('Playbook Structure')
              .schemaType('playbookStructure')
              .documentId('playbookStructure'),
          )
          .icon(BsPersonFill),
        S.listItem()
          .title('Articles')
          .child(S.documentTypeList('article').title('Articles'))
          .icon(BsCircleFill),
        S.listItem()
          .title('Character Profiles')
          .child(
            S.documentTypeList('characterProfile').title('Character Profiles'),
          )
          .icon(BsPersonFill),
        S.listItem()
          .title('Expert Profiles')
          .child(S.documentTypeList('expertProfile').title('Expert Profiles'))
          .icon(GiBookshelf),
        ,
        S.listItem()
          .title('Quote Collections')
          .child(
            S.documentTypeList('quoteCollection').title('Quote Collections'),
          )
          .icon(FaQuoteLeft),
        S.listItem()
          .title('Playlists')
          .child(S.documentTypeList('playlist').title('Playlists'))
          .icon(FaRegListAlt),
        ,
      ]),
  )
  .icon(GiBookCover);
