import S from '@sanity/desk-tool/structure-builder';
import { BsGrid3X2GapFill, BsGlobe, BsPersonFill } from 'react-icons/bs';
import { FaHome, FaPeopleCarry } from 'react-icons/fa';

export const pagesMenu = S.listItem()
  .title('Pages')
  .id('pages')
  .child(
    S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Playbook Home Page')
          .child(
            S.document()
              .title('Playbook Home Page')
              .schemaType('playbookHome')
              .documentId('playbookHome'),
          )
          .icon(BsGrid3X2GapFill),
        S.listItem()
          .title('Landing Page')
          .child(
            S.document()
              .title('Landing Page')
              .schemaType('landingPage')
              .documentId('landingPage'),
          )
          .icon(FaHome),
        S.listItem()
          .title('Partners Page')
          .child(
            S.document()
              .title('Partners Page')
              .schemaType('partnersPage')
              .documentId('partnersPage'),
          )
          .icon(FaPeopleCarry),
        S.listItem()
          .title('Character Profiles Page')
          .child(
            S.document()
              .title('Character Profiles Page')
              .schemaType('characterProfilesPage')
              .documentId('characterProfilesPage'),
          )
          .icon(BsPersonFill),
      ]),
  )
  .icon(BsGlobe);
