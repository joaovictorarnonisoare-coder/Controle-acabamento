/* Painel Acadêmico — service worker
   Guarda o app no dispositivo para funcionar sem internet (essencial no iPhone,
   onde o app instalado na tela de início precisa abrir mesmo offline).
   Estratégia: rede primeiro com cópia no cache (para receber atualizações),
   caindo para o cache quando não há conexão. */
const CACHE = 'painel-academico-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './favicon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.allSettled(SHELL.map(u => c.add(new Request(u, {cache:'reload'}))));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const nomes = await caches.keys();
    await Promise.all(nomes.filter(n => n !== CACHE).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* navegação: rede primeiro (atualiza), cache como reserva */
  if (req.mode === 'navigate'){
    e.respondWith((async () => {
      try {
        const rede = await fetch(req);
        const c = await caches.open(CACHE);
        c.put('./index.html', rede.clone());
        return rede;
      } catch (err) {
        const c = await caches.open(CACHE);
        return (await c.match('./index.html')) || (await c.match('./')) || Response.error();
      }
    })());
    return;
  }

  /* demais arquivos: cache primeiro, atualizando em segundo plano */
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const guardado = await c.match(req, {ignoreSearch:true});
    if (guardado){
      fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); }).catch(() => {});
      return guardado;
    }
    try {
      const r = await fetch(req);
      if (r && r.ok && r.type === 'basic') c.put(req, r.clone());
      return r;
    } catch (err) {
      return Response.error();
    }
  })());
});
