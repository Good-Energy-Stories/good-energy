import { BiWorld as icon } from 'react-icons/bi';
export default {
  name: 'climateLensBlock',
  title: 'Climate Lens Block',
  type: 'document',
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
    {
      name: 'showLinkToBookAConsultation',
      title: 'Show Link to Book a Consultation',
      type: 'boolean',
    },
  ],
};
