var push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();

let vapidKeys = {
  publicKey:
    "BGwbFX8ROWLBqeATGroTgTaY7bqEsTy0AmjnZXqHrWg0cXXWfT0TtUiJONmULW2ejpSmhhu0FmRGF9XDsuht4_4",
  privateKey: "QBRMaU8Dd1fiuY0KkbwT4fXZFQCbDv2_ciURIAaC2pI",
};
push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys,
  privateKey
);
// console.log(vapidKeys);

let sub = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjY…tJyNcc0pQiDhFLyfK9jZob-UsWPCO440vjAXisHQ4VRrAt6_5y_BEPyvd78c",
  expirationTime: null,
  keys: {
    auth: "BHqxN4I8hXLf7sdoYuI2yA",
    p256dh:
      "BM-x5VybiWBbuH9f9CVqX6HrBMxx5r8ei7AHnylrKgdCmbFy73Pm6EAlh3wdnol89E6D3CN1DBFR5nx9n_lHgPo",
  },
};

push.sendNotification(sub, "test message");
