import { BsFillQuestionCircleFill as icon } from 'react-icons/bs';

export default {
  name: 'aboutBlock',
  title: 'About Block',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          { title: 'Black', value: 'black' },
          { title: 'White', value: 'white' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
