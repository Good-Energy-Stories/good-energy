import { BsGrid3X2GapFill as icon } from 'react-icons/bs';

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon,

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Ex. 'Storytelling for Today's Climate'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'showBanner',
      title: 'Show Banner at Top of Page',
      description:
        "Ex. 'We are committed to supporting racial equity and celebrating diversity. Black Lives Matter.'",
      type: 'boolean',
    },
    {
      name: 'bannerCopy',
      title: 'Banner Copy',
      description: 'This is what the banner will say',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
      hidden: ({ parent }) => parent?.showBanner !== true,
    },
    {
      title: 'Banner Image',
      name: 'bannerImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
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
      title: 'Content',
      name: 'content',
      validation: (Rule) => Rule.required(),
      description:
        'This is where you change the rest of the body content on the landing page.',
      type: 'array',
      of: [
        {
          type: 'playbookThreeColumn',
        },
        {
          type: 'emailCapture',
        },
        {
          type: 'playbookQuote',
        },
        {
          type: 'resourceSection',
        },
        {
          type: 'reference',
          to: [{ type: 'playlist' }, { type: 'partnerSection' }],
        },
      ],
    },
  ],
  preview: {},
};
