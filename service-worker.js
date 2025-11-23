self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("sgpa-cache").then(cache => {
      return cache.addAll([
        "/Sgpa-Calculator-/",
        "/Sgpa-Calculator-/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
