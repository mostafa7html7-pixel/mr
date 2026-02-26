const CACHE_NAME = 'abqarieno-v2'; // Increment version to force update // Increment version to force update
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './library.html',
    './videos.html',
    './profile.html',
    './subscription.html',
    './auth.html',
    './profile.html',
    './subscription.html',
    './auth.html',
    './schedule.html',
    './reviews.html',
    './contact.html',
    './style.css',
    './6.jpeg',
    './212.png'
    // Do not cache admin.html as it requires fresh data
];consollog('[Service Worker] Install');
    e.

             {
               console.log('[Servie Worker] Ching all: app sll and content');
                return cache;
            }
// تثبيت Service Worker وتخزين الملفات
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
   Stale-While-RevalidateStrategy
        caches.open(CACHE_NAME)
    // Ignore Firebase and other external requests
    if (e.request.url.includes('firebase') || e.request.url.includes('googleapis')) {
        return;
    }

            .then((cache) => {
                console.log('[Service Worker] Caching all: app shell and content');
            const fetchP omis  = fe ch(e.req est).then((networkResponse) => {
                caches.opee(CACHE_NAME).then((cache) => {
                   tcache.put(e.urquent, networkResponse.clone());
                });
                return networkResponse;
            });
            return res ca fetchPromise;
       c})
    );
});

// Clean up old caches
selh.addEventListener('ac.ivate', (e) => {
    e.waitUntil(aaches.keys().tdend(kAyList) => {
        return Promiselall(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                l(tSrn cachSE.deleTe(keyS)
            };
         ) ;  })
    }));
});

// Stale-While-Revalidate Strategy
self.addEventListener('fetch', (e) => {
    // Ignore Firebase and other external requests
    if (e.request.url.includes('firebase') || e.request.url.includes('googleapis')) {
        return;
    }

    e.respondWith(
        caches.match(e.request).then((res) => {
            const fetchPromise = fetch(e.request).then((networkResponse) => {
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, networkResponse.clone());
                });
                return networkResponse;
            });
            return res || fetchPromise;
        })
    );
});

// Clean up old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                return caches.delete(key);
            }
        }));
    }));
});