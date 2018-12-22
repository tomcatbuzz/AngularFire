import { Component } from '@angular/core';
import { HoldableDirective } from '../holdable.directive';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customers$;
  constructor(private afs: AngularFirestore) {
    this.customers$ =  this.collection$('customers');
  }

  holdHandler(e) {
    console.log(e);
  }


 // Helper to map collection doc IDs to Observable
  collection$(path, query?) {
    return this.afs
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
}
