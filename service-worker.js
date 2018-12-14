var cacheName = "tienda-v40";
var filesToCache = [
    "/",
    "/index.html",
    "/login.html",
    "/register.html",
    "/tienda.html",
    "/css/main.css",
    "/css/login.css",
    "/css/register.css",
    "/img/Myth of Digital Marketing Edit.jpg",
    "/img/chromebook.jpg",
    "/img/favicon.ico",
    "/img/Lenovo-desktop-legion-y720.jpg",
    "/img/Nueva carpeta/1.jpg",
    "/img/Nueva carpeta/2018-4-best-bezel-less-smartphones-H01.jpg",
    "/img/Nueva carpeta/46426_FUENTE SENTEY 650W REALES EXTREME ROCK POWER.jpg",
    "/img/Nueva carpeta/CS7toO1U8AABGex.jpg",
    "/img/Nueva carpeta/monitor-lg-215-led-hdmi-vga-full-hd-pc-gamer-1920-x-1080-22-D_NQ_NP_978624-MPE27637866023_062018-F.jpg",
    "/img/Nueva carpeta/Xiaomi-Mi-8.jpg",
    "/js/app.js",
    "/js/register.js",
    "/js/tienda.js",


];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key != cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
