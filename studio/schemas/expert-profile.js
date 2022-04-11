import React from 'react';
import { CharacterProfilePreview } from '../components';
import { GiBookshelf as icon } from 'react-icons/gi';
export default {
  name: 'expertProfile',
  title: 'Expert Profile',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Expert Type',
      name: 'expertType',
      type: 'string',
      description: 'An expert can be either an individual or an organization',
      options: {
        layout: 'radio',
        list: [
          { title: 'Individual', value: 'individual' },
          { title: 'Organization', value: 'organization' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'includeSpotlightPage',
      title: 'Expert Has Spotlight Page',
      description:
        'Turn this on if this expert should have their own spotlight page with more information.',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "The individual's name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pronouns',
      title: 'Prounouns',
      type: 'string',
      description: 'The individuals pronouns',
      hidden: ({ parent }) => parent?.expertType !== 'individual',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description:
        'The organization this individual is associated with, if any',
      hidden: ({ parent }) => parent?.expertType !== 'individual',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) =>
        Rule.custom((slug, context) => {
          if (
            context.document.expertType === 'individual' &&
            context.document.includeSpotlightPage
          ) {
            if (slug) {
              return true;
            }
            return 'Slug is required';
          }
          return true;
        }),
      hidden: ({ parent }) => !parent?.includeSpotlightPage,
    },

    {
      name: 'links',
      title: 'Links',
      description: 'Any relevant links associated with the individuals',

      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'authorBio',
      title: 'Author Bio',
      validation: (Rule) =>
        Rule.custom((authorBio, context) => {
          if (
            context.document.expertType === 'individual' &&
            context.document.includeSpotlightPage
          ) {
            if (authorBio) {
              return true;
            }
            return 'Author Bio is required';
          }
          return true;
        }),
      hidden: ({ parent }) => !parent?.includeSpotlightPage,
      description:
        'This is the bio you will see on the author card if this expert is linked as the author of an article',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'bio',
      title: 'Bio',
      validation: (Rule) =>
        Rule.custom((bio, context) => {
          if (
            context.document.expertType === 'individual' &&
            context.document.includeSpotlightPage
          ) {
            if (bio) {
              return true;
            }
            return 'Bio is required';
          }
          return true;
        }),
      hidden: ({ parent }) => !parent?.includeSpotlightPage,
      description:
        "The actual bio that will appear on the individual's page in the library of experts",
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      validation: (Rule) =>
        Rule.custom((shortBio, context) => {
          if (
            context.document.expertType === 'individual' &&
            context.document.includeSpotlightPage
          ) {
            if (shortBio) {
              return true;
            }
            return 'Shot Bio is required';
          }
          return true;
        }),
      type: 'string',
      description:
        'A short bio that will be shown on a card prompting a user to read more',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Small Portrait Image',
      name: 'smallPortraitImage',
      type: 'image',
      description:
        'You can use this for a company logo too if this is an organization document',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Full Size Portrait Image',
      name: 'fullSizePortraitImage',
      type: 'image',
      validation: (Rule) =>
        Rule.custom((fullSizePortraitImage, context) => {
          if (
            context.document.expertType === 'individual' &&
            context.document.includeSpotlightPage
          ) {
            if (fullSizePortraitImage) {
              return true;
            }
            return 'Full Size Portrait Image is required';
          }
          return true;
        }),
      hidden: ({ parent }) =>
        !parent?.includeSpotlightPage || parent?.expertType !== 'individual',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      title: 'Next Up',
      name: 'nextUp',
      type: 'reference',
      description: 'Suggestion for expert profile to read next after this one',
      to: [{ type: 'expertProfile' }],
      hidden: ({ parent }) => !parent?.includeSpotlightPage,
    },
    {
      title: 'Related',
      name: 'related',
      description:
        'You can add any number of related articles or character profiles here.',
      hidden: ({ parent }) => !parent?.includeSpotlightPage,
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'article' },
            { type: 'characterProfile' },
            { type: 'expertProfile' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      shortBio: 'shortBio',
      portraitImageUrl: 'smallPortraitImage.asset.url',
    },
    prepare(selection) {
      const { name, shortBio, portraitImageUrl } = selection;

      return {
        title: name,
        subtitle: shortBio,
        media: <CharacterProfilePreview url={portraitImageUrl} />,
      };
    },
  },
};
