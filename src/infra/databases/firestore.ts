import { firebaseConfig } from '@/config/firebase';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Database } from '@/adapters/repository/protocols';
import { v4 as uuidv4 } from 'uuid';
import { apps } from 'firebase-admin';

export class Firestore<T, U> implements Database<T, U> {

  private readonly db;

  constructor() {
    if (apps.length === 0) {
      initializeApp(firebaseConfig);
    }
    this.db = getFirestore();
  }

  async insert(data: T, entity: string): Promise<U> {
    const uuid = uuidv4();
    const doc = this.db.collection(entity).doc(uuid);

    return doc.set(data);
  }

  async select(filter: T, entity: string): Promise<Array<U>> {
    
    const results = [];
    let docs = this.db.collection(entity);

    if (filter) {
      for (const key of Object.keys(filter)) {
        const value = filter[key];
        docs = docs.where(key, '==', value);
      }
    }

    const docsFound = await docs.get();

    docsFound.forEach(doc => {
      results.push({ id: doc.id, ...doc.data() });
    });

    return results;
  }
}