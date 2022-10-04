import S from '@sanity/desk-tool/structure-builder';
import {
  BsGrid3X2GapFill,
  BsGlobe,
  BsPersonFill,
  BsFillQuestionCircleFill,
  BsNewspaper,
} from 'react-icons/bs';
import { FaHome, FaPeopleCarry, FaSuitcase } from 'react-icons/fa';
import { MdRecordVoiceOver, MdOutlinePlaylistAdd } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { GiLetterBomb } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import SeoPane from 'sanity-plugin-seo-pane';
import resolveProductionUrl from '../resolveProductionUrl';
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
              .documentId('playbookHome')
              .views([
                S.view.form(),
                S.view
                  .component(SeoPane)
                  .options({
                    // Retrieve the keywords and synonyms at the given dot-notated strings
                    keywords: `seo.keywords`,
                    synonyms: `seo.synonyms`,
                    url: (doc) => resolveProductionUrl(doc),

                    // Alternatively, specify functions (may be async) to extract values
                    // keywords: doc => doc.seo?.keywords,
                    // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
                    // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
                  })
                  .title('SEO'),
              ]),
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
          .title('About Page')
          .child(
            S.document()
              .title('About Page')
              .schemaType('aboutPage')
              .documentId('aboutPage'),
          )
          .icon(BsFillQuestionCircleFill),
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
          .title('Consulting Page')
          .child(
            S.document()
              .title('Consulting Page')
              .schemaType('consultingPage')
              .documentId('consultingPage'),
          )
          .icon(FaSuitcase),
        S.listItem()
          .title('Press Page')
          .child(
            S.document()
              .title('Press Page')
              .schemaType('pressPage')
              .documentId('pressPage'),
          )
          .icon(BsNewspaper),
        S.listItem()
          .title('Contact Page')
          .child(
            S.document()
              .title('Contact Page')
              .schemaType('contactPage')
              .documentId('contactPage'),
          )
          .icon(GiLetterBomb),
        S.listItem()
          .title('Team Page')
          .child(
            S.document()
              .title('Team Page')
              .schemaType('teamPage')
              .documentId('teamPage'),
          )
          .icon(RiTeamFill),
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
          .title('Playlists Page')
          .child(
            S.document()
              .title('Playlists Page')
              .schemaType('playlistsPage')
              .documentId('playlistsPage'),
          )
          .icon(MdOutlinePlaylistAdd),
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
