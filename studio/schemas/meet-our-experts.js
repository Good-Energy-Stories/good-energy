import { BsGrid3X2GapFill as icon } from 'react-icons/bs';
import expertProfile from './expert-profile';

export default {
  name: 'meetOurExperts',
  title: 'Meet Our Experts',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Section title, Ex. 'Meet Our Experts'",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Supporting text for Meet Our Experts section.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'CTAText',
      title: 'CTA Text',
      type: 'string',
      description:
        'Text for CTA button on clients page, ex. "See More Clients"',
    },
    {
      name: 'CTALink',
      title: 'CTA Link',
      type: 'url',
      description: 'Link for CTA button on clients page',
    },
    {
      name: 'Experts',
      title: 'experts',
      type: 'reference',
      to: [{ type: 'expertProfile' }],
    },
  ],
};
