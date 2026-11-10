/* ===== Helpers ===== */
function el(tag, attrs, html){var e=document.createElement(tag);if(attrs)for(var k in attrs){if(k==="class")e.className=attrs[k];else e.setAttribute(k,attrs[k]);}if(html!==undefined)e.innerHTML=html;return e}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var ICON={
  gh:'<svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  ext:'<svg viewBox="0 0 24 24"><path d="M7 17L17 7M8 7h9v9"/></svg>',
  doc:'<svg viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/></svg>',
  mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  li:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>'
};

/* ===== Skills ===== */
(function(){
  var g=document.getElementById("skillsGrid");
  SKILLS.forEach(function(c){
    g.appendChild(el("article",{class:"skill"},'<h3>'+esc(c.t)+'</h3><div class="tags">'+c.tags.map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join('')+'</div>'));
  });
})();

/* ===== Projects ===== */
function tagHtml(list){return list.map(function(t){return '<span class="tag">'+esc(t)+'</span>'}).join('')}
(function(){
  var g=document.getElementById("projectsGrid");
  PROJECTS.forEach(function(p){
    var tech=p.tags.map(function(t){return '<div><div class="tech-label">'+esc(t[0])+'</div><div class="tags">'+tagHtml(t[1])+'</div></div>'}).join('');
    var links='<a class="btn ghost" href="'+p.github+'" target="_blank" rel="noopener">'+ICON.gh+' GitHub Repository</a>';
    if(p.demo)links+='<a class="btn primary" href="'+p.demo+'" target="_blank" rel="noopener">Live Demo '+ICON.ext+'</a>';
    var c=el("article",{class:"card"},
      (p.image?'<figure class="shot"><img src="'+p.image.src+'" alt="'+esc(p.image.alt)+'"></figure>':'')+
      '<div><span class="badge'+(p.kind==="team"?' team':'')+'">'+esc(p.type)+'</span>'+
      '<h3><button type="button" data-open="'+p.id+'">'+esc(p.name)+'</button></h3>'+
      '<p>'+esc(p.desc)+'</p>'+
      '<div class="role"><b>My role</b>'+esc(p.role)+'</div>'+
      '<span class="more" aria-hidden="true">View details <span class="arr">&rarr;</span></span></div>'+
      '<aside>'+tech+'<div class="plinks">'+links+'</div></aside>');
    g.appendChild(c);
  });
})();

/* ===== Project detail dialog ===== */
var dlg=document.getElementById("dlg"),lastFocus=null;
function openProject(id){
  var p=PROJECTS.filter(function(x){return x.id===id})[0];if(!p)return;
  lastFocus=document.activeElement;
  document.getElementById("dTitle").textContent=p.name;
  var b=document.getElementById("dBadge");b.textContent=p.type;b.className="badge"+(p.kind==="team"?" team":"");
  var h='<div class="dsec"><h3>Overview</h3>'+p.overview.map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+(p.note?'<div class="note">'+esc(p.note)+'</div>':'')+'</div>';
  if(p.image)h+='<figure class="dfig"><a href="'+p.image.href+'" target="_blank" rel="noopener"><img src="'+p.image.src+'" alt="'+esc(p.image.alt)+'"></a><figcaption><span>'+esc(p.image.caption)+'</span><span>Open full size</span></figcaption></figure>';
  h+='<div class="dsec"><h3>Key Features</h3><ul>'+p.features.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul></div>';
  h+='<div class="dsec"><h3>Technologies Used</h3>'+p.techGroups.map(function(t){return '<div class="tech-label">'+esc(t[0])+'</div><div class="tags">'+tagHtml(t[1])+'</div>'}).join('')+'</div>';
  h+='<div class="dsec"><h3>My Responsibilities</h3><ul>'+p.resp.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul></div>';
  var l='<a class="btn ghost" href="'+p.github+'" target="_blank" rel="noopener">'+ICON.gh+' GitHub Repository</a>';
  if(p.demo)l+='<a class="btn primary" href="'+p.demo+'" target="_blank" rel="noopener">Live Demo '+ICON.ext+'</a>';
  if(p.extraLink)l+='<a class="btn ghost" href="'+p.extraLink.href+'" target="_blank" rel="noopener">'+ICON.doc+' '+esc(p.extraLink.label)+'</a>';
  h+='<div class="dsec"><h3>Links</h3><div class="dlinks">'+l+'</div></div>';
  document.getElementById("dBody").innerHTML=h;
  document.getElementById("dBody").scrollTop=0;
  if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","");
}
function closeProject(){if(dlg.close)dlg.close();else dlg.removeAttribute("open");if(lastFocus&&lastFocus.focus)lastFocus.focus()}
document.addEventListener("click",function(e){
  var o=e.target.closest("[data-open]");if(o){openProject(o.getAttribute("data-open"));return}
  if(e.target===dlg)closeProject();
});
document.getElementById("dClose").addEventListener("click",closeProject);
dlg.addEventListener("close",function(){if(lastFocus&&lastFocus.focus)lastFocus.focus()});

/* ===== Contact ===== */
(function(){
  var c=document.getElementById("contactList");
  var go=ICON.ext.replace('<svg','<svg class="go"');
  if(PROFILE.email){
    var r=el("div",{class:"mail-row"},'<a class="cbtn" href="mailto:'+esc(PROFILE.email)+'">'+ICON.mail+'<span>'+esc(PROFILE.email)+'</span>'+go+'</a><button class="cbtn copy" type="button" id="copyMail">Copy email</button>');
    c.appendChild(r);
    r.querySelector("#copyMail").addEventListener("click",function(){
      var b=this;function done(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy email"},1800)}
      try{navigator.clipboard.writeText(PROFILE.email).then(done,function(){b.textContent="Select the address"})}catch(x){b.textContent="Select the address"}
    });
  }
  if(PROFILE.linkedin)c.appendChild(el("a",{class:"cbtn",href:PROFILE.linkedin,target:"_blank",rel:"noopener"},ICON.li+'<span>LinkedIn</span>'+go));
  c.appendChild(el("a",{class:"cbtn",href:PROFILE.github,target:"_blank",rel:"noopener"},ICON.gh+'<span>GitHub</span>'+go));
})();

/* ===== Navigation, menu, theme ===== */
var links=document.getElementById("links"),menuBtn=document.getElementById("menuBtn");
function setMenu(o){links.classList.toggle("open",o);menuBtn.setAttribute("aria-expanded",o?"true":"false");menuBtn.setAttribute("aria-label",o?"Close menu":"Open menu")}
menuBtn.addEventListener("click",function(){setMenu(!links.classList.contains("open"))});
document.addEventListener("click",function(e){
  var a=e.target.closest("a[data-nav]");if(!a)return;
  var id=a.getAttribute("href").slice(1),t=document.getElementById(id);
  e.preventDefault();setMenu(false);
  if(t)t.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
});
var secs=["about","looking","skills","projects","education","contact"].map(function(i){return document.getElementById(i)});
var bar=document.querySelector(".top"),ind=document.createElement("span"),curId="";
ind.className="ind";ind.setAttribute("aria-hidden","true");links.insertBefore(ind,links.firstChild);
function moveInd(){
  var a=links.querySelector("a.on");
  if(!a||getComputedStyle(ind).display==="none"){ind.style.opacity="0";return}
  ind.style.width=a.offsetWidth+"px";
  ind.style.transform="translateX("+a.offsetLeft+"px)";
  ind.style.opacity="1";
}
var ticking=false;
function spy(){
  var y=window.scrollY+120,cur="";
  secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});
  if(cur!==curId){
    curId=cur;
    [].forEach.call(links.querySelectorAll("a"),function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+cur)});
    moveInd();
  }
  var max=document.documentElement.scrollHeight-window.innerHeight;
  bar.style.setProperty("--p",max>0?Math.min(1,Math.max(0,window.scrollY/max)).toFixed(4):0);
}
window.addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(function(){ticking=false;spy()})}},{passive:true});
window.addEventListener("resize",function(){moveInd()});
spy();moveInd();

var root=document.documentElement,themeBtn=document.getElementById("themeBtn");
function isDark(){var t=root.getAttribute("data-theme");if(t)return t==="dark";return window.matchMedia("(prefers-color-scheme: dark)").matches}
try{var saved=localStorage.getItem("rb-theme");if(saved==="dark"||saved==="light")root.setAttribute("data-theme",saved)}catch(x){}
themeBtn.addEventListener("click",function(){
  var n=isDark()?"light":"dark";
  function apply(){root.setAttribute("data-theme",n);try{localStorage.setItem("rb-theme",n)}catch(x){}}
  if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){apply();return}
  var r=themeBtn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  var R=Math.hypot(Math.max(x,window.innerWidth-x),Math.max(y,window.innerHeight-y));
  var t=document.startViewTransition(apply);
  t.ready.then(function(){
    root.animate({clipPath:["circle(0px at "+x+"px "+y+"px)","circle("+R+"px at "+x+"px "+y+"px)"]},
      {duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",pseudoElement:"::view-transition-new(root)"});
  });
});
