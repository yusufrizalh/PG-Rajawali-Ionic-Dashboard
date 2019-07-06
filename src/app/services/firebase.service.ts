import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private snapshotChangesSubscription: any;
  
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  // method untuk melihat semua data people
  getTasks() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser) { // jika ada user dalam firebase auth
          this.snapshotChangesSubscription = 
            this.afs.collection('people')
            .doc(currentUser.uid)
            .collection('tasks')
            .snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }

  // method untuk melihat task tertentu
  getTask(taskId){
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser) { // jika ada user dalam firebase auth
          this.snapshotChangesSubscription = 
            this.afs.doc<any>('people/' + currentUser.uid 
            + '/tasks/' + taskId)
            .valueChanges()
            .subscribe(snapshots => {
              resolve(snapshots);
            }, err => {
              reject(err);
            })
        }
      })
    });
  }

  // untuk unsubscribe perintah
  unsubscribeOnLogOut() {
    this.snapshotChangesSubscription.unsubscribe();
  }

}