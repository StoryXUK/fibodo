// Shared site chrome: loads navigation.html into #core-navigation and footer.html into the page footer.
(async function siteChrome(){
  const mount=document.getElementById('core-navigation');
  const root=(mount&&mount.dataset.root)||'./';
  const fix=(scope)=>{
    scope.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(!/^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(h))a.setAttribute('href',root+h)});
    scope.querySelectorAll('img[src]').forEach(i=>{const s=i.getAttribute('src');if(!/^(?:[a-z][a-z0-9+.-]*:|\/|data:)/i.test(s))i.setAttribute('src',root+s)});
  };
  const fetchHtml=async f=>{const r=await fetch(root+f);if(!r.ok)throw new Error(f+' '+r.status);return r.text()};

  const footer=document.querySelector('footer#footer,footer#shared-footer,footer[data-site-footer]');
  if(footer){
    fetchHtml('footer.html').then(h=>{footer.classList.add('site-footer');footer.innerHTML=h;fix(footer);footer.querySelectorAll('[data-footer-year]').forEach(e=>e.textContent=new Date().getFullYear())}).catch(e=>console.warn('Footer unavailable',e));
  }
  if(!mount)return;
  if(!document.getElementById('fibodo-nav-css')){const l=document.createElement('link');l.id='fibodo-nav-css';l.rel='stylesheet';l.href=root+'fibodo-nav.css';document.head.appendChild(l)}
  try{
    mount.innerHTML=await fetchHtml('navigation.html');
    fix(mount);
    const nav=mount.querySelector('#site-nav'),toggle=mount.querySelector('.menu-toggle'),panel=mount.querySelector('.nav-panel');
    const triggers=[...mount.querySelectorAll('.nav-links button[aria-controls]')];
    const desktop=()=>window.matchMedia('(min-width:1081px)').matches;

    const here=new URL(location.href);const norm=p=>p.replace(/index\.html$/,'').replace(/\/$/,'');
    const isHere=a=>{const u=new URL(a.href,location.href);return u.origin===here.origin&&norm(u.pathname)===norm(here.pathname)};
    mount.querySelectorAll('.nav-links a').forEach(a=>{if(isHere(a))a.setAttribute('aria-current','page')});
    mount.querySelectorAll('.nav-links>li[data-group]').forEach(li=>{if(li.querySelector('.mega a[aria-current]'))li.querySelector('button').style.boxShadow='inset 0 -3px 0 var(--accent)'});

    const set=(t,open)=>{document.getElementById(t.getAttribute('aria-controls')).hidden=!open;t.setAttribute('aria-expanded',String(open))};
    const closeAll=except=>triggers.forEach(t=>{if(t!==except)set(t,false)});
    const timers=new Map();
    triggers.forEach(t=>{
      const li=t.parentElement;
      t.addEventListener('click',e=>{e.stopPropagation();const o=t.getAttribute('aria-expanded')!=='true';closeAll(t);set(t,o)});
      li.addEventListener('pointerenter',e=>{if(desktop()&&e.pointerType==='mouse'){clearTimeout(timers.get(t));closeAll(t);set(t,true)}});
      li.addEventListener('pointerleave',e=>{if(desktop()&&e.pointerType==='mouse')timers.set(t,setTimeout(()=>set(t,false),250))});
    });
    document.addEventListener('click',e=>{if(!nav.contains(e.target))closeAll()});
    const closeMobile=()=>{panel.classList.remove('open');toggle.setAttribute('aria-expanded','false')};
    toggle.addEventListener('click',()=>{const o=panel.classList.toggle('open');toggle.setAttribute('aria-expanded',String(o));if(!o)closeAll()});
    document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const open=triggers.find(t=>t.getAttribute('aria-expanded')==='true');closeAll();if(open)open.focus();else closeMobile()});
    window.addEventListener('resize',()=>{closeAll();closeMobile()});
  }catch(err){
    console.error('Navigation unavailable',err);
    mount.innerHTML='<div class="wrap" style="padding:24px 0"><a class="fb-logo" href="'+root+'index.html"><img src="'+root+'fibodo-logo.svg" alt="fibodo Business Software" height="56"></a></div>';
  }
})();
