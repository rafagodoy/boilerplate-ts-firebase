/* eslint-disable @typescript-eslint/no-var-requires */
import app from '../..';
import { onRequest } from 'firebase-functions/v2/https';

// Export the Express app as a Cloud Function
exports.api = onRequest(app);