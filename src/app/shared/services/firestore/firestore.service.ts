import { Injectable } from '@angular/core';
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, doc, setDoc, getDoc, getFirestore, updateDoc, collection, getDocs, query, where, onSnapshot, addDoc, deleteDoc, arrayRemove, arrayUnion, serverTimestamp, orderBy, writeBatch } from 'firebase/firestore';
import { firebaseConfig } from '../../../../enviroments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private app: FirebaseApp;
  public firestore: Firestore;
  private assistentSubject = new BehaviorSubject<any[]>([]);
  assistentSubject$ = this.assistentSubject.asObservable();
  private selfSubject = new BehaviorSubject<any[]>([]);
  selfSubject$ = this.selfSubject.asObservable();

  constructor() { 
   this.app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
  }


loadAssistent() {
  const userRef = collection(this.firestore, 'assistent');  
  onSnapshot(userRef, (querySnapshot) => {
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    this.assistentSubject.next(data);
  }, (error) => {
    console.error('Fehler beim Überwachen der "assistent"-Collection:', error);
  });
}

 loadSelf() {  
  const userRef = collection(this.firestore, 'selbst');  
  onSnapshot(userRef, (querySnapshot) => {
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));    
    this.selfSubject.next(data);
  }, (error) => {
    console.error('Fehler beim Überwachen der "selbst"-Collection:', error);
  });
}


 async updateCount(acc: string, accID: string): Promise<void> {
  const docRef = doc(this.firestore, `${acc}/${accID}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const currentCount = data['count'] ?? 0;
    await updateDoc(docRef, { count: currentCount + 1 });
  } else {
    console.warn('Dokument existiert nicht');
  }
}

}
