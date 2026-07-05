/*
 * AI Explorer Academy — service worker.
 * Cache-first voor de app-schil: na één bezoek werkt de app volledig offline.
 * Verhoog VERSION bij elke release zodat gebruikers de nieuwe versie krijgen.
 */
const VERSION = 'aea-v2.0.0';
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './config.js',
  './i18n.js',
  './cards-nl.js',
  './cards-en.js',
  './storage.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (cache) { return cache.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== VERSION) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        // Cache same-origin responses voor offline gebruik.
        if (res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      });
    })
  );
});
