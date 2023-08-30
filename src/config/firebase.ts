import { applicationDefault } from 'firebase-admin/app';

export const firebaseConfig = {
  credential: applicationDefault(),
  databaseURL: 'https://fishing-money-48480.firebaseio.com',
  projectId: 'fishing-money-48480',
};