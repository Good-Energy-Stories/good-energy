import S from '@sanity/desk-tool/structure-builder';

import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { FaPeopleCarry } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

import { BsFillGridFill } from 'react-icons/bs';
import { MdRecordVoiceOver } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
export const aboutMenu = S.listItem()
  .title('About')
  .id('about')
  .child(
    S.list()
      .title('About')
      .items([
        S.listItem()
          .title('Expert Profiles')
          .child(S.documentTypeList('expertProfile').title('Expert Profiles'))
          .icon(ImBooks),
        S.listItem()
          .title('Featured Voices')
          .child(S.documentTypeList('featuredVoice').title('Featured Voices'))
          .icon(MdRecordVoiceOver),
        S.listItem()
          .title('Partners')
          .child(S.documentTypeList('partner').title('Partners'))
          .icon(FaPeopleCarry),
        S.listItem()
          .title('Partner Sections')
          .child(S.documentTypeList('partnerSection').title('Partner Sections'))
          .icon(BsFillGridFill),
        S.listItem()
          .title('Team Members')
          .child(S.documentTypeList('teamMember').title('Team Members'))
          .icon(RiTeamFill),
      ]),
  )
  .icon(BsFillQuestionCircleFill);
