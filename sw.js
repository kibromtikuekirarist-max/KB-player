self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('kb-player-v1').then((cache) => {
      return cache.addAll(['./index.html', './manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
