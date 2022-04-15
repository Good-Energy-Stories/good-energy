import { BsFillGridFill as icon } from 'react-icons/bs';
import toPlainText from '../utils/toPlainText';
export default {
  name: 'individualPartnerFeature',
  title: 'Indivdual Partner Feature',
  type: 'document',
  icon,
  fields: [
    {
      name: 'description',
      title: 'Description',
      description:
        "Information about why this partner is featured. Ex. 'Good Energy is fiscally sponsored by Creative Visions, a 501c3 nonprofit organization that  supports creative activists, those that use the arts and media to ignite social change.'",
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Partner',
      name: 'partner',
      description: 'The partner to highlight',
      type: 'reference',
      to: [{ type: 'partner' }],
    },
  ],
  preview: {
    select: {
      title: 'partner.title',
      description: 'description',
      logo: 'partner.logo',
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
