import { firebaseConfig } from '@/config/firebase';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Database } from '@/adapters/repository/protocols';
import { v4 as uuidv4 } from 'uuid';

export class Firestore<T, U> implements Database<T, U> {

  private readonly db;

  constructor() {
    initializeApp(firebaseConfig);
    this.db = getFirestore();
  }

  async insert(data: T, entity: string): Promise<U> {
    const uuid = uuidv4();
    const doc = this.db.collection(entity).doc(uuid);

    return doc.set(data);
  }
}