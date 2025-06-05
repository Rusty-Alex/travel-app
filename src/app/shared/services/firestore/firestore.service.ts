import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, doc, setDoc, getDoc, getFirestore, updateDoc, collection, getDocs, query, where, onSnapshot, addDoc, deleteDoc, arrayRemove, arrayUnion, serverTimestamp, orderBy, writeBatch } from 'firebase/firestore';
import { firebaseConfig } from '../../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private app: FirebaseApp;
  public firestore: Firestore;

  constructor() { 
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
  }


 async loadUser(): Promise<any> {
  try {
    const userRef = collection(this.firestore, 'test');
    const querySnapshot = await getDocs(userRef);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Fehler beim Laden der Daten aus Firestore:', error);
    return null;
  }
}
}
