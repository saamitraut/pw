self.addEventListener("push", (e) => {
  var options = {
    body: "Her is a notification body!",
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    data: { primaryKey: 1 },
  };

  e.waitUntil(self.registration.showNotification("Hello world!", options));
});
