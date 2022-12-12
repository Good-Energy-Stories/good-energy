import S from '@sanity/desk-tool/structure-builder';
import {
  BsGrid3X2GapFill,
  BsGlobe,
  BsPersonFill,
  BsFillQuestionCircleFill,
  BsNewspaper,
  BsHammer,
  BsMegaphone,
  BsFillExclamationOctagonFill,
} from 'react-icons/bs';
import { FaHome, FaPeopleCarry, FaSuitcase } from 'react-icons/fa';
import { MdRecordVoiceOver, MdOutlinePlaylistAdd } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { GiLetterBomb } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import SeoPane from 'sanity-plugin-seo-pane';
import resolveProductionUrl from '../resolveProductionUrl';
import { playbookPagesMenu } from './playbookPages';
export const pagesMenu = S.listItem()
  .title('Pages')
  .id('pages')
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Landing Page')
          .child(
            S.document()
              .title('Landing Page')
              .schemaType('landingPage')
              .documentId('landingPage'),
          )
          .icon(FaHome),

        playbookPagesMenu,

        S.listItem()
          .title('Offerings Pages')
          .child(S.documentTypeList('offeringsPage').title('Offerings Pages'))
          .icon(RiTeamFill),
        S.listItem()
          .title('About Pages')
          .child(S.documentTypeList('aboutPage').title('About Pages'))
          .icon(BsFillQuestionCircleFill),
        S.listItem()
          .title('End of Year Report Page')
          .child(
            S.document()
              .title('End of Year Report Page')
              .schemaType('endOfYearReportPage')
              .documentId('endOfYearReportPage'),
          )
          .icon(BsMegaphone),
        S.listItem()
          .title('Error Page')
          .child(
            S.document()
              .title('Error Page')
              .schemaType('errorPage')
              .documentId('errorPage'),
          )
          .icon(BsFillExclamationOctagonFill),
      ]),
  )
  .icon(BsGlobe);
