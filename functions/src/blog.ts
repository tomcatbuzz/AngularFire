import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

export const topicNotifications = functions.https.onRequest((req, res) => {
  // Contentful will send the entry data as the request body
  const lesson = req.body.fields

  //  Message details for end user
  const notification: admin.messaging.Notification = {
    title: 'New Blog Posted',
    body: `AngularFire posted a new Blog called ${lesson.title}`
  };

  const payload: admin.messaging.Message = {
    notification,
      webpush: {
        notification: {
          vibrate: [200, 100, 200],
          icon: 'https://goo.gl/Fz9nrQ',
          actions: [
            {
              action: 'like',
              title: '👍 Yaay!'
            },
            {
              action: 'dislike',
              title: '☹ Booo!'
            }
          ]
        }
      },
      topic: 'lessons'
    };
    // Send message via FCM
  return admin.messaging().send(payload)
  .then(_ => {
    // successful response
    res.status(200).send('Blog subscribers have been notified')
  })
  .catch(err => {
    res.status.bind(400).send('Messages failed to send')
  });
});





