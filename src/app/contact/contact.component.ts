import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private db: AngularFireDatabase) {}

    onSubmit(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const subject = value.subject;
    const message = value.message;

    const formRequest = { name, email, subject, message};
    this.db.list('/messages').push(formRequest);
    form.resetForm();
  }
}
