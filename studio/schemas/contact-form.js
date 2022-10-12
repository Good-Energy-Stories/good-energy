import { AiOutlineForm as icon } from 'react-icons/ai';
export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Form',
      name: 'form',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          {
            title: 'Consulting Interest Form',
            value: 'consultingInterestForm',
          },
          {
            title: 'Newletter Signup Form',
            value: 'newsletterSignupForm',
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      form: 'form',
    },
    prepare(selection) {
      const { form } = selection;
      return {
        title: 'Contact Form',
      };
    },
  },
};
