// Shared navigation: loaded once per page from navigation.html.
(async function loadCoreNavigation(){
 const mount=document.getElementById('core-navigation');if(!mount)return;
 const root=mount.dataset.root||'./';
 try{
  const response=await fetch(root+'navigation.html');if(!response.ok)throw new Error('Navigation HTTP '+response.status);
  mount.innerHTML=await response.text();
  mount.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href');if(href.startsWith('#'))a.setAttribute('href',root+'index.html'+href);else if(!/^(?:[a-z]+:|\/|\/\/)/i.test(href))a.setAttribute('href',root+href)});
  mount.querySelectorAll('img[src]').forEach(img=>{const src=img.getAttribute('src');if(!/^(?:[a-z]+:|\/|\/\/)/i.test(src))img.setAttribute('src',root+src)});
  const menu=mount.querySelector('.menu-toggle'),nav=mount.querySelector('.nav-links'),hosts=[...mount.querySelectorAll('.mega-host')];
  const desktop=()=>window.matchMedia('(min-width:1201px)').matches;
  const closeAll=(except=null)=>hosts.forEach(h=>{if(h!==except){const p=h.querySelector('.mega-panel'),t=h.querySelector('.mega-trigger');p.hidden=true;t.setAttribute('aria-expanded','false')}});
  const setMega=(host,open)=>{closeAll(open?host:null);const panel=host.querySelector('.mega-panel'),trigger=host.querySelector('.mega-trigger');panel.hidden=!open;trigger.setAttribute('aria-expanded',String(open))};
  const closeMobile=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';if(!open)closeAll()});
  // Grace period prevents accidental closure while moving into a large mega-menu.
  const closeTimers=new WeakMap();
  const cancelClose=host=>{const timer=closeTimers.get(host);if(timer)clearTimeout(timer);closeTimers.delete(host)};
  const scheduleClose=host=>{cancelClose(host);closeTimers.set(host,setTimeout(()=>{setMega(host,false);closeTimers.delete(host)},350))};
  hosts.forEach(host=>{
    const trigger=host.querySelector('.mega-trigger'),panel=host.querySelector('.mega-panel');
    host.addEventListener('pointerenter',e=>{if(desktop()&&e.pointerType==='mouse'){cancelClose(host);setMega(host,true)}});
    host.addEventListener('pointerleave',e=>{if(desktop()&&e.pointerType==='mouse')scheduleClose(host)});
    panel.addEventListener('pointerenter',()=>cancelClose(host));
    panel.addEventListener('pointerleave',e=>{if(desktop()&&e.pointerType==='mouse')scheduleClose(host)});
    host.addEventListener('focusin',()=>{if(desktop())setMega(host,true)});
    host.addEventListener('focusout',e=>{if(!host.contains(e.relatedTarget))setMega(host,false)});
    trigger.addEventListener('click',e=>{e.stopPropagation();cancelClose(host);setMega(host,panel.hidden)});
  });
  document.addEventListener('click',e=>{if(!hosts.some(h=>h.contains(e.target)))closeAll()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){const active=hosts.find(h=>!h.querySelector('.mega-panel').hidden);closeAll();if(active)active.querySelector('.mega-trigger').focus();else closeMobile()}});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{closeAll();closeMobile()}));
  window.addEventListener('resize',()=>{closeAll();closeMobile()});
 }catch(error){console.error('Unable to load CORE navigation:',error);mount.innerHTML='<div class="wrap" style="padding:20px"><a href="'+root+'index.html">CORE by fibodo — Home</a></div>'}
})();
