self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("champona").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});
