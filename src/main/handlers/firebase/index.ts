import functions from 'firebase-functions';
import { app } from '../../express';

// Export the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);