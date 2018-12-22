"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const twilio = require("twilio");
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const client = new twilio(accountSid, authToken);
const twilioNumber = "+14439608261"; // your twilio phone number "could set the number as env. variable"
/// start cloud function
exports.sendSMS = functions.database
    .ref("/sms/{pushKey}")
    .onWrite((change) => {
    const dataAfterChange = change.after.val();
    // Only send sms for new messages.
    if (change.before.val() || !dataAfterChange.phoneNumber) {
        return;
    }
    const val = dataAfterChange;
    const textMessage = {
        body: `Hello from Tony: ${val.message}`,
        from: twilioNumber,
        to: `${val.phoneNumber}` // Text to this number
    };
    return client.messages.create(textMessage)
        .then(message => console.log(message.sid, "success"))
        .catch(err => console.log(err));
});
//# sourceMappingURL=twilio.js.map