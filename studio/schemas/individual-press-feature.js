import { BsFillGridFill as icon } from 'react-icons/bs';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'individualPressFeature',
  title: 'Indivdual Press Feature',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Press',
      name: 'press',
      description: 'The press to highlight',
      type: 'reference',
      to: [{ type: 'press' }],
    },
  ],
  preview: {
    select: {
      title: 'press.title',
      description: 'description',
      logo: 'press.outlet.logo',
    },
    prepare(selection) {
      const { title, description, logo } = selection;

      return {
        title,
        subtitle: toPlainText(description),
        media: logo,
      };
    },
  },
};
