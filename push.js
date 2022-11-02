const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BGwbFX8ROWLBqeATGroTgTaY7bqEsTy0AmjnZXqHrWg0cXXWfT0TtUiJONmULW2ejpSmhhu0FmRGF9XDsuht4_4",
  privateKey: "QBRMaU8Dd1fiuY0KkbwT4fXZFQCbDv2_ciURIAaC2pI",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription

const pushSubscription = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjYb9lU9VbQ1b4PwDg2Nrn5IYoEPtZT9upfj_P3440j1v4NrPImULg_1xqTVDMpeuHQJN3e-jgA8uJiyk5fXQZE0nDBceknlBHBwvGKsqaGHX0BIU0O3BtJyNcc0pQiDhFLyfK9jZob-UsWPCO440vjAXisHQ4VRrAt6_5y_BEPyvd78c",
  expirationTime: null,
  keys: {
    auth: "BHqxN4I8hXLf7sdoYuI2yA",
    p256dh:
      "BM-x5VybiWBbuH9f9CVqX6HrBMxx5r8ei7AHnylrKgdCmbFy73Pm6EAlh3wdnol89E6D3CN1DBFR5nx9n_lHgPo",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
