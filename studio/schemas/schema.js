// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';

import quote from './quote';
import quoteCollection from './quoteCollection';

import article from './article';

import characterProfile from './character-profile';

import playlist from './playlist';

import playbookHome from './playbook-home';
import playbookThreeColumn from './playbook-three-column';
import playbookQuote from './playbook-quote';

import emailCapture from './email-capture';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',

  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blockContent,
    article,

    characterProfile,

    playlist,
    playbookHome,
    playbookQuote,
    playbookThreeColumn,
    quoteCollection,
    quote,
    emailCapture,
  ]),
});
