import React from 'react';
import { BsCircleFill as icon } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { GiFootprint } from 'react-icons/gi';

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Section',
      name: 'section',
      type: 'string',
      description:
        'This is used for the breadcrumbs that will appear above the article title',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Introduction', value: 'Introduction' },
          { title: 'The Why', value: 'The Why' },
          { title: 'Climate Storytelling', value: 'Climate Storytelling' },
          { title: "What's Next", value: "What's Next" },
        ],
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''), // Trim - from end of text.slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lede',
      title: 'Lede',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'byline',
      title: 'Byline',
      type: 'string',
    },
    {
      name: 'authorNote',
      type: 'note',
      options: {
        headline: 'Author Note',
        message:
          'If there is an author, expert profile, or featured voice who should be associated with this article, link them here. A card with their information will show up at the bottom of the article',
      },
    },
    {
      title: 'Author',
      name: 'author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'author' },
            { type: 'expertProfile' },
            { type: 'featuredVoice' },
          ],
        },
      ],
    },
    {
      title: 'Project Hero Image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'This will be used as the alt text for the image.',
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
      name: 'includeDropCap',
      title: 'Should Introduction Have a Drop Cap',
      description:
        "Including a drop cap means the first letter of the text will be much larger to begin the story. If the text/quote is short (one to two lines), it's usually better to turn this off.",
      type: 'boolean',
    },
    {
      name: 'introductionNote',
      type: 'note',
      options: {
        headline: 'Introduction Note',
        message:
          'This is the introductory of the article. Remember that you can put multiple paragraphs inside of one section. Leaving this section blank will mean the article will begin with the first item in the article body section below.',
      },
    },
    {
      title: 'Introduction',
      name: 'introduction',
      type: 'array',
      of: [
        { type: 'articleIntroductionSection' },
        { type: 'articleQuote' },
        { type: 'articleBlockQuote' },
      ],
    },
    {
      name: 'bodyNote',
      type: 'note',
      options: {
        headline: 'Article Content Note',
        message:
          'You can build each article out of text blocks, pull quotes, block quotes, and story possibilities. In the text blocks, you can bold, italic, and underline in addition to adding links and footnotes.',
      },
    },
    {
      title: 'Body',
      name: 'body',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        { type: 'articleSection' },
        { type: 'articleQuote' },
        { type: 'articleBlockQuote' },
        { type: 'articleStoryPossibility' },
      ],
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
      title: 'Next Up',
      name: 'nextUp',
      description:
        'The next article in the playbook that you want to see appear after this article. This is used for the "Next Up" section on the article page.',
      type: 'reference',
      to: [{ type: 'article' }],
    },
    {
      title: 'Related',
      name: 'related',
      description:
        'You can add any number of related articles or character profiles here.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }, { type: 'characterProfile' }],
        },
      ],
    },
  ],
};
