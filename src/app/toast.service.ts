import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export class Toasts {
  content: string;
  style: string;
  dismissed: false;

  constructor(content, style?) {
    this.content = content;
    this.style = style || 'info';
  }
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private afs: AngularFirestore) { }

  getMessages(): Observable<Toasts[]> {
  }
}
