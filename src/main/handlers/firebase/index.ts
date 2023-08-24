/* eslint-disable @typescript-eslint/no-var-requires */
import app from '../..';
import { onRequest } from 'firebase-functions/v2/https';
import { initializeApp, applicationDefault } from 'firebase-admin/app';

initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://fishing-money-48480.firebaseio.com',
});

// Export the Express app as a Cloud Function
exports.api = onRequest(app);