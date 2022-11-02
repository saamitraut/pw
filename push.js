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

let sub = {};

push.sendNotification(sub, "test message");
