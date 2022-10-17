import React from 'react';
import { CharacterProfilePreview } from '../components';
import { BsPersonFill as icon } from 'react-icons/bs';
import Page from './page';

export default {
  name: 'characterProfilesPage',
  title: 'Character Profiles Page',
  type: 'document',
  icon,
  fields: Page.fields,
};
