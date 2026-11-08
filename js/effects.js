/* ===== Creative Tech layer: decorative motion only ===== */
(function(){
  "use strict";
  var root=document.documentElement;
  root.classList.add("js");
  var mqReduce=window.matchMedia("(prefers-reduced-motion: reduce)");
  var mqDark=window.matchMedia("(prefers-color-scheme: dark)");
  function reduced(){return mqReduce.matches}
  function debounce(fn,ms){var t;return function(){clearTimeout(t);t=setTimeout(fn,ms)}}
  function listen(mq,fn){if(mq.addEventListener)mq.addEventListener("change",fn);else if(mq.addListener)mq.addListener(fn)}

  /* --- terminal line --- */
  (function(){
    var out=document.getElementById("termText");
    if(!out)return;
    var msgs=["Initializing portfolio...","Exploring technology...","Interested in QA / PM / BA","Open to Internship"];
    var i=0,j=0,del=false;
    function tick(){
      if(reduced()){out.textContent=msgs[2];return}
      var m=msgs[i];
      if(!del){
        j++;out.textContent=m.slice(0,j);
        if(j>=m.length){del=true;setTimeout(tick,1900);return}
        setTimeout(tick,42+Math.random()*40);
      }else{
        j--;out.textContent=m.slice(0,j);
        if(j<=0){del=false;i=(i+1)%msgs.length;setTimeout(tick,380);return}
        setTimeout(tick,18);
      }
    }
    out.textContent="";tick();
  })();

  /* --- pointer: mouse light on panels + hero parallax --- */
  var pt={x:-1e4,y:-1e4};
  var stage=document.querySelector(".stage");
  (function(){
    var raf=0,ev=null;
    function apply(){
      raf=0;var e=ev;if(!e)return;
      var el=e.target&&e.target.closest?e.target.closest(".glow"):null;
      if(el){var r=el.getBoundingClientRect();el.style.setProperty("--mx",(e.clientX-r.left)+"px");el.style.setProperty("--my",(e.clientY-r.top)+"px")}
      if(stage&&!reduced()&&window.scrollY<window.innerHeight*1.2){
        stage.style.setProperty("--px",((e.clientX/window.innerWidth-.5)*2).toFixed(3));
        stage.style.setProperty("--py",((e.clientY/window.innerHeight-.5)*2).toFixed(3));
      }
    }
    window.addEventListener("pointermove",function(e){
      if(e.pointerType&&e.pointerType!=="mouse")return;
      pt.x=e.clientX;pt.y=e.clientY;ev=e;
      if(!raf)raf=requestAnimationFrame(apply);
    },{passive:true});
    document.documentElement.addEventListener("mouseleave",function(){pt.x=-1e4;pt.y=-1e4});
    var sraf=0;
    window.addEventListener("scroll",function(){
      if(sraf||!stage)return;
      sraf=requestAnimationFrame(function(){sraf=0;if(!reduced())stage.style.setProperty("--sy",Math.min(window.scrollY,900))});
    },{passive:true});
    var els=document.querySelectorAll(".rec,.card,.look,.areas li,.band,.timeline li.now .t-body");
    for(var k=0;k<els.length;k++)els[k].classList.add("glow");
  })();

  /* --- network background --- */
  (function(){
    var c=document.getElementById("net");
    if(!c||!c.getContext)return;
    var ctx=c.getContext("2d");
    var W=0,H=0,dpr=1,N=[],rgb1="90,200,255",rgb2="46,230,166",am=1,last=0,raf=0;
    function readColors(){
      var cs=getComputedStyle(root);
      rgb1=cs.getPropertyValue("--net-rgb").trim()||rgb1;
      rgb2=cs.getPropertyValue("--net-rgb2").trim()||rgb2;
      am=parseFloat(cs.getPropertyValue("--net-a"))||1;
    }
    function build(k){
      N=[];
      for(var i=0;i<k;i++){
        var a=Math.random()*6.283,s=6+Math.random()*12;
        N.push({x:Math.random()*W,y:Math.random()*H,vx:Math.cos(a)*s,vy:Math.sin(a)*s,r:.8+Math.random()*1.4,z:.3+Math.random()*.9,g:i%5===0,px:0,py:0});
      }
    }
    function size(){
      var ow=W,oh=H;
      dpr=Math.min(window.devicePixelRatio||1,1.5);
      W=window.innerWidth;H=window.innerHeight;
      c.width=Math.round(W*dpr);c.height=Math.round(H*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      var want=Math.round(Math.min(62,Math.max(20,W*H/26000)));
      if(W<700)want=Math.min(want,24);
      if(!N.length||Math.abs(want-N.length)>6)build(want);
      else if(ow&&oh)for(var i=0;i<N.length;i++){N[i].x*=W/ow;N[i].y*=H/oh}
      if(reduced())draw(0);
    }
    function draw(dt){
      ctx.clearRect(0,0,W,H);
      var sy=window.scrollY||0,L=W<700?120:150,L2=L*L,i,j,a,b;
      for(i=0;i<N.length;i++){
        a=N[i];
        if(dt){
          a.x+=a.vx*dt/1000;a.y+=a.vy*dt/1000;
          if(a.x<-20)a.x=W+20;else if(a.x>W+20)a.x=-20;
          if(a.y<-20)a.y=H+20;else if(a.y>H+20)a.y=-20;
        }
        a.px=a.x;a.py=((a.y-sy*a.z*.09)%H+H)%H;
      }
      ctx.lineWidth=1;
      for(i=0;i<N.length;i++){
        a=N[i];
        for(j=i+1;j<N.length;j++){
          b=N[j];
          var dx=a.px-b.px,dy=a.py-b.py,d2=dx*dx+dy*dy;
          if(d2<L2){
            ctx.strokeStyle="rgba("+(a.g||b.g?rgb2:rgb1)+","+((1-Math.sqrt(d2)/L)*.34*am).toFixed(3)+")";
            ctx.beginPath();ctx.moveTo(a.px,a.py);ctx.lineTo(b.px,b.py);ctx.stroke();
          }
        }
        var mx=a.px-pt.x,my=a.py-pt.y,m2=mx*mx+my*my;
        if(m2<36100){
          ctx.strokeStyle="rgba("+rgb2+","+((1-Math.sqrt(m2)/190)*.5*am).toFixed(3)+")";
          ctx.beginPath();ctx.moveTo(a.px,a.py);ctx.lineTo(pt.x,pt.y);ctx.stroke();
        }
      }
      for(i=0;i<N.length;i++){
        a=N[i];
        ctx.fillStyle="rgba("+(a.g?rgb2:rgb1)+","+((a.g?.8:.6)*am).toFixed(2)+")";
        ctx.beginPath();ctx.arc(a.px,a.py,a.r,0,6.283);ctx.fill();
      }
    }
    function loop(t){raf=requestAnimationFrame(loop);if(last&&t-last<30)return;var dt=last?Math.min(90,t-last):0;last=t;draw(dt)}
    function start(){if(raf||reduced()||document.hidden)return;last=0;raf=requestAnimationFrame(loop)}
    function stop(){if(raf){cancelAnimationFrame(raf);raf=0}}
    readColors();size();start();
    window.addEventListener("resize",debounce(size,150));
    document.addEventListener("visibilitychange",function(){if(document.hidden)stop();else start()});
    window.addEventListener("themechange",function(){readColors();if(reduced())draw(0)});
    listen(mqReduce,function(){if(reduced()){stop();draw(0)}else start()});
  })();

  /* --- scroll reveal (content stays visible, it settles into place) --- */
  (function(){
    if(reduced()||!("IntersectionObserver" in window))return;
    var els=[].slice.call(document.querySelectorAll(".sec-head,.about .a-left,.about .a-right,.look,.skill,.card,.timeline li,.band,.divider"));
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting)return;
        var t=en.target;io.unobserve(t);t.classList.add("in");
        setTimeout(function(){t.classList.remove("rv","in");t.style.transitionDelay=""},1200);
      });
    },{rootMargin:"0px 0px -6% 0px",threshold:.06});
    els.forEach(function(el){
      var p=el.parentElement,idx=p?Array.prototype.indexOf.call(p.children,el):0;
      el.classList.add("rv");el.style.transitionDelay=(Math.min(idx,4)*70)+"ms";io.observe(el);
    });
  })();

  /* --- animated light/dark switch --- */
  function isDark(){var t=root.getAttribute("data-theme");return t?t==="dark":mqDark.matches}
  window.__themeToggle=function(btn){
    var n=isDark()?"light":"dark";
    function apply(){
      root.setAttribute("data-theme",n);
      try{localStorage.setItem("rb-theme",n)}catch(x){}
      window.dispatchEvent(new Event("themechange"));
    }
    if(reduced()){apply();return}
    if(document.startViewTransition){
      var r=btn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
      var R=Math.hypot(Math.max(x,window.innerWidth-x),Math.max(y,window.innerHeight-y));
      var vt=document.startViewTransition(apply);
      vt.ready.then(function(){
        root.animate({clipPath:["circle(0px at "+x+"px "+y+"px)","circle("+R+"px at "+x+"px "+y+"px)"]},{duration:650,easing:"cubic-bezier(.4,0,.2,1)",pseudoElement:"::view-transition-new(root)"});
      }).catch(function(){});
    }else{
      root.classList.add("theme-fade");apply();
      setTimeout(function(){root.classList.remove("theme-fade")},650);
    }
  };
  listen(mqDark,function(){window.dispatchEvent(new Event("themechange"))});
})();
