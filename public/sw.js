
importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/App.js',
       '/App.css',
       '/App.test.js',
       '/index.js',
       '/index.css',
       '/logo.svg',
       '/components/Login.css',
       '/components/Login.js',
       '/components/MyCards.js',
       '/components/TaskApp.css',
       '/components/TaskApp.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
    
    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    })
    
    );
    
    });