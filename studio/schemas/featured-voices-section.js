import { MdRecordVoiceOver as icon } from 'react-icons/md';

export default {
  name: 'featuredVoicesSection',
  title: 'Featured Voices Section',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Featured Voices',
      name: 'featuredVoices',
      description:
        'This is where you select the order of the featured voices as they should show up on the partners page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featuredVoice' }],
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Featured Voices Section',
      };
    },
  },
};
