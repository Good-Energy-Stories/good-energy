import { FaPeopleCarry as icon } from 'react-icons/fa';
export default {
  name: 'newsletterCTA',
  title: 'Newsletter CTA',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'CTAText',
      title: 'CTA Button Text',
      type: 'string',
      description: "What the button should say. ex. 'Book Now', etc.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'CTALink',
      title: 'CTA Button Link',
      type: 'url',
      description: 'Where the button should link to.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
