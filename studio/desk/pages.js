import S from '@sanity/desk-tool/structure-builder';
import { BsGrid3X2GapFill, BsGlobe, BsPersonFill } from 'react-icons/bs';
import { FaHome, FaPeopleCarry } from 'react-icons/fa';
import { MdRecordVoiceOver } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
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
        S.listItem()
          .title('Featured Voices Page')
          .child(
            S.document()
              .title('Featured Voices Page')
              .schemaType('featuredVoicesPage')
              .documentId('featuredVoicesPage'),
          )
          .icon(MdRecordVoiceOver),
        S.listItem()
          .title('Library of Experts Page')
          .child(
            S.document()
              .title('Library of Experts Page')
              .schemaType('libraryOfExpertsPage')
              .documentId('libraryOfExpertsPage'),
          )
          .icon(ImBooks),
      ]),
  )
  .icon(BsGlobe);
