import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerComponent } from '../customer/customer.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-holdable',
  templateUrl: './holdable.component.html',
  styleUrls: ['./holdable.component.css']
})
export class HoldableComponent {
  customers$;
  @Input() customer;
  progress = 0;
  docData;

  constructor(private afs: AngularFirestore) {
    this.customers$ =  this.collection$('customers');
    this.docData = {
      name: 'Mike Lee',
      email: 'test@test.com',
      orderTotal: 67
    };
   }

  deleteCustomer(e, cust) {
    this.progress = e / 10;
    if (this.progress > 100) {
      this.afs.doc(`customers/${this.customer.id}`).delete();
    }
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
