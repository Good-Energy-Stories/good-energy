import { MdOutlineChatBubbleOutline as icon } from 'react-icons/md';
export default {
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'information',
      title: 'Information',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
