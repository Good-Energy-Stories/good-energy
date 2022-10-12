import { BsLayoutThreeColumns as icon } from 'react-icons/bs';

export default {
  name: 'threeColumnLayout',
  title: 'Three Column Layout',
  type: 'object',
  icon,
  fields: [
    {
      name: 'layoutNote',
      type: 'note',
      options: {
        headline: 'Important',
        message:
          'The articles put in the left and right columns will appear smaller. Remember to put what you want to highlight in the center column.',
      },
    },
    {
      title: 'Left Column',
      name: 'leftColumn',
      type: 'thirdPageContent',
    },
    {
      title: 'Main Column',
      name: 'mainColumn',
      type: 'thirdPageContent',
    },
    {
      title: 'Right Column',
      name: 'rightColumn',
      type: 'thirdPageContent',
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Three Column Layout',
      };
    },
  },
};
