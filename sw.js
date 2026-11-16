const C='peyda-v5',F=['./','index.html','manifest.json','icon-180.png','icon-512.png','fonts/Peyda-Regular.ttf','fonts/Peyda-Medium.ttf','fonts/Peyda-Bold.ttf','fonts/Peyda-Black.ttf'],
 IMG=['c1','c2','c3','c4','t1','t2','t3','t4','v1','v2','v3','v4'].map(n=>'img/'+n+'.jpg');
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F).then(()=>Promise.all(IMG.map(u=>c.add(u).catch(()=>0))))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
