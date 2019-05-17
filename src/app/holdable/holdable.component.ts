import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-holdable',
  templateUrl: './holdable.component.html',
  styleUrls: ['./holdable.component.css']
})
export class HoldableComponent {
  customers$;
  docData;

  constructor(private afs: AngularFirestore) {
    this.customers$ =  this.collection$('customers');
    this.docData = {
      name: 'Mike Lee',
      email: 'test@test.com',
      orderTotal: 67
    };
   }

   holdHandler(e) {
     console.log(e);
   }

  seedData() {
    this.afs.collection('customers').add(this.docData)
    .then(function() {
      console.log('Document Successfully written!');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
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
