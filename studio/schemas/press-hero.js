import { BsFillGridFill as icon } from 'react-icons/bs';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'pressHero',
  title: 'Press Hero',
  type: 'document',
  icon,
  fields: [
    {
      name: 'headlinePressLogo',
      title: 'Headline Press Logo',
      description: 'ex. New York Times logo',
      type: 'image',
    },
    {
      name: 'headline',
      title: 'Headline',
      description: 'ex. "Hollywood\'s Climate Advisor"',
      type: 'string',
    },
    {
      name: 'headlinePressLinkTitle',
      title: 'Headline Press Link Title',
      description: 'ex. Read Article',
      type: 'string',
    },
    {
      name: 'headlinePressLinkUrl',
      title: 'Headline Press Link URL',
      description: 'URL to press link',
      type: 'url',
    },
  ],
};
