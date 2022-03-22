// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';

import quote from './quote';
import quoteCollection from './quoteCollection';

import article from './article';
import articleRelated from './articleRelated';

import characterProfile from './characterProfile';
import characterProfileRelated from './characterProfileRelated';

import playlist from './playlist';
import playlistItem from './playlistItem';

import playbookHome from './playbookHome';
import playbookCard from './playbookCard';

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
    articleRelated,
    characterProfile,
    characterProfileRelated,
    playlist,
    playlistItem,
    playbookHome,
    playbookCard,
    quoteCollection,
    quote,
  ]),
});
