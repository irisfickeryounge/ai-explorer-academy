/*
 * The Neuronauts — service worker.
 * Network-first met cache-vangnet: gebruikers zien altijd de nieuwste content
 * zodra er internet is, en de app blijft volledig offline werken zonder.
 * Verhoog VERSION bij elke release.
 */
const VERSION = 'nn-v1.0.0';
const SHELL = [
  './app.html',
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
  './mascot-ontdekken.png',
  './mascot-samenwerken.png',
  './mascot-controleren.png',
  './mascot-verbeteren.png',
  './mascot-regie-voeren.png',
  './symbol-ontdekken.png',
  './symbol-samenwerken.png',
  './symbol-controleren.png',
  './symbol-verbeteren.png',
  './symbol-regie-voeren.png',
  './badge-ontdekken.png',
  './badge-samenwerken.png',
  './badge-controleren.png',
  './badge-verbeteren.png',
  './badge-regie-voeren.png',
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
    fetch(e.request).then(function (res) {
      // Vers van het net: meteen ook de cache bijwerken voor offline gebruik.
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      // Offline: val terug op de cache.
      return caches.match(e.request, { ignoreSearch: true });
    })
  );
});
