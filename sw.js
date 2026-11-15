const C='peyda-v1',F=['./','index.html','manifest.json','icon-180.png','icon-512.png','fonts/Peyda-Regular.ttf','fonts/Peyda-Medium.ttf','fonts/Peyda-Bold.ttf','fonts/Peyda-Black.ttf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
