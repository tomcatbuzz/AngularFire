"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// admin.initializeApp();
// const cors = require('cors')({ origin: true });
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change) => {
    const dataAfterChange = change.after.val();
    // Only send email for new messages.
    if (change.before.val() || !dataAfterChange.name) {
        return;
    }
    const val = dataAfterChange;
    const msg = {
        to: 'tomcatbuzz@yahoo.com',
        from: 'firebase@angularFire.com',
        subject: 'You have a new contact request',
        text: `Your message content. \n
          Sender's Name: ${val.name} \n
          Sender's Email ${val.email} \n
          Subject: ${val.subject} \n
          Content: ${val.message}`
    };
    return sgMail.send(msg)
        .then(() => console.log('email sent!'))
        .catch(err => console.log(err));
});
//# sourceMappingURL=sendgrid.js.map