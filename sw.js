// Service worker de Gloub : met le jeu en cache pour qu'il marche hors ligne.
// Pour publier une nouvelle version des icônes ou des polices, changer VERSION.
// La page elle-même (index.html) est toujours rechargée depuis le réseau quand il y en a un,
// donc une mise à jour du jeu apparaît dès le lancement suivant, sans toucher à ce fichier.
const VERSION = 'gloub-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './fonts/mochiy-pop-one-latin-400-normal.woff2',
  './fonts/nunito-latin-600-normal.woff2',
  './fonts/nunito-latin-800-normal.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png',
];
const NETWORK_TIMEOUT = 3000;   // au-delà, sur un réseau trop lent, on lance la version en cache

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(SHELL.map(url => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('gloub-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // La page : d'abord le réseau (pour avoir la dernière version), le cache si on est hors ligne
  if (req.mode === 'navigate') {
    event.respondWith(networkFirst(req));
    return;
  }
  // Le reste (polices, icônes, manifeste) : le cache tout de suite, mis à jour en arrière-plan
  event.respondWith(staleWhileRevalidate(event, req));
});

async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  try {
    const res = await Promise.race([
      fetch(req),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NETWORK_TIMEOUT)),
    ]);
    if (res.ok) cache.put('./index.html', res.clone());
    return res;
  } catch (_) {
    return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
  }
}

async function staleWhileRevalidate(event, req) {
  const cache = await caches.open(VERSION);
  const cached = await cache.match(req, { ignoreSearch: true });
  const update = fetch(req)
    .then(res => { if (res.ok) cache.put(req, res.clone()); return res; })
    .catch(() => null);
  if (cached) {
    event.waitUntil(update);
    return cached;
  }
  return (await update) || Response.error();
}
