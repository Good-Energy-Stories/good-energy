import S from '@sanity/desk-tool/structure-builder';
import {
  BsGrid3X2GapFill,
  BsGlobe,
  BsPersonFill,
  BsFillQuestionCircleFill,
  BsNewspaper,
  BsHammer,
} from 'react-icons/bs';
import { FaHome, FaPeopleCarry, FaSuitcase } from 'react-icons/fa';
import { MdRecordVoiceOver, MdOutlinePlaylistAdd } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { GiLetterBomb } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import SeoPane from 'sanity-plugin-seo-pane';
import resolveProductionUrl from '../resolveProductionUrl';
export const playbookPagesMenu = S.listItem()
  .title('Playbook Pages')
  .id('playbookPages')
  .child(
    S.list()
      .title('Playbook Pages')
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
          .title('Character Profiles Page')
          .child(
            S.document()
              .title('Character Profiles Page')
              .schemaType('characterProfilesPage')
              .documentId('characterProfilesPage'),
          )
          .icon(BsPersonFill),
        S.listItem()
          .title('Playbook Pages')
          .child(S.documentTypeList('playbookPage').title('Playbook Pages'))
          .icon(BsFillQuestionCircleFill),
      ]),
  )
  .icon(BsGlobe);
