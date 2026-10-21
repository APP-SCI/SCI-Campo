// SCI Campo: funcionamiento sin conexión.
// Cambie VERSION cada vez que publique una actualización de index.html.
const VERSION = 'sci-campo-v1.1.1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Nunca guardar en caché la IA ni el pronóstico: siempre en vivo.
  if (/generativelanguage\.googleapis\.com|open-meteo\.com/.test(url.host)) return;
  const sameOrFonts = url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com/.test(url.host);
  if (!sameOrFonts) return;
  if (req.mode === 'navigate') {
    // Página: intenta la versión más nueva y, sin red, usa la guardada.
    e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(VERSION).then((c) => c.put('./index.html', cp)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => {
    if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(VERSION).then((c) => c.put(req, cp)); }
    return r;
  })));
});
