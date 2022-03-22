import { FaQuoteLeft as icon } from 'react-icons/fa';
import React from 'react';
import { CharacterProfilePreview } from '../components';
const CHARACTER_PROFILE = 'character-profile';
const ARTICLE = 'article';
export default {
  name: 'articleRelated',
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: ARTICLE },
          { title: 'Character Profile', value: CHARACTER_PROFILE },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Article',
      name: 'article',
      type: 'reference',
      to: [{ type: 'article' }],
      hidden: ({ parent }) => parent?.type !== ARTICLE,
    },
    {
      title: 'Character Profile',
      name: 'characterProfile',
      type: 'reference',
      to: [{ type: 'characterProfile' }],
      hidden: ({ parent }) => parent?.type !== CHARACTER_PROFILE,
    },
  ],
  preview: {
    select: {
      articleTitle: 'article.title',
      articleAuthor: 'article.author',
      articleHeroImage: 'article.heroImage',
      characterProfileName: 'characterProfile.name',
      characterProfileShortBio: 'characterProfile.shortBio',
      characterProfilePortraitImageUrl:
        'characterProfile.portraitImage.asset.url',
      type: 'type',
    },
    prepare(selection) {
      const {
        articleTitle,
        articleAuthor,
        articleHeroImage,
        characterProfileName,
        characterProfileShortBio,
        characterProfilePortraitImageUrl,
        type,
      } = selection;
      let title, subtitle, media;
      if (type === ARTICLE) {
        title = articleTitle;
        subtitle = articleAuthor;
        media = articleHeroImage;
      }
      if (type === CHARACTER_PROFILE) {
        title = characterProfileName;
        subtitle = characterProfileShortBio;
        media = (
          <CharacterProfilePreview url={characterProfilePortraitImageUrl} />
        );
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
