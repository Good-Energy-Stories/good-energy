import sanityClient from '@sanity/client';
// lib/sanity.js
import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';
import { config } from './config';

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

export default sanityClient({
  projectId: 'jkhcjumj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
  token: process.env.SANITY_API_TOKEN,
});
