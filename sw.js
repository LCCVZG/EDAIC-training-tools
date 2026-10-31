const CACHE='edaic-b-c3e46533';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-512-maskable.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  const isPage=e.request.mode==='navigate'||(url.origin===location.origin&&/\/(index\.html)?$/.test(url.pathname));
  if(isPage){
    // Netzwerk zuerst: neue Versionen kommen sofort an, offline greift der Cache
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(res=>{ const copy=res.clone(); caches.open(CACHE).then(c=>c.put('./index.html',copy)); return res; }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{ const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return res; }).catch(()=>caches.match('./index.html'))));
});