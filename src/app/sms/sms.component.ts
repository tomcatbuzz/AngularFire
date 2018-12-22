import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent {

  constructor(private db: AngularFireDatabase) { }

  onSubmit(form: NgForm) {
    const value = form.value;
    const phoneNumber = value.phoneNumber;
    const message = value.message;

    const formRequest = { phoneNumber, message};
    this.db.list('/sms').push(formRequest);
    form.resetForm();
  }
}
