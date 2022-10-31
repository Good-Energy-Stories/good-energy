import S from '@sanity/desk-tool/structure-builder';
import { GiBookCover } from 'react-icons/gi';
import { BsPersonFill, BsThermometerHalf } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import { GiQuillInk, GiWorld } from 'react-icons/gi';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaRegListAlt } from 'react-icons/fa';
import { MdOutlineLineStyle } from 'react-icons/md';
import resolveProductionUrl from '../resolveProductionUrl';
import SeoPane from 'sanity-plugin-seo-pane';

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
          .icon(MdOutlineLineStyle),
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
          .title('Two Worlds Article')
          .child(
            S.document()
              .title('Two Worlds Article')
              .schemaType('twoWorldsArticle')
              .documentId('twoWorldsArticle'),
          )
          .icon(GiWorld),
        S.listItem()
          .title('Why Climate Article')
          .child(
            S.document()
              .title('Why Climate Article')
              .schemaType('whyClimateArticle')
              .documentId('whyCliamteArticle'),
          )
          .icon(BsThermometerHalf),
        S.listItem()
          .title('Authors')
          .child(S.documentTypeList('author').title('Authors'))
          .icon(GiQuillInk),
        S.listItem()
          .title('Playbook Sections')
          .child(
            S.documentTypeList('playbookSection').title('Playbook Sections'),
          )
          .icon(FaRegListAlt),
        S.listItem()
          .title('Playlists')
          .child(S.documentTypeList('playlist').title('Playlists'))
          .icon(FaRegListAlt),
        ,
      ]),
  )
  .icon(GiBookCover);
