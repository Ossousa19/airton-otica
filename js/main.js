(function(){
  var MALL={wk:[600,1320],sun:[780,1260]};
  var MALLS=[
    {id:"ilha",img:1,name:"Shopping da Ilha",note:"Lojas 07 e 08",q:"Airton Ótica Shopping da Ilha São Luís",week:"10h às 22h",sun:"13h às 21h",h:MALL},
    {id:"tropical",img:1,name:"Tropical Shopping",note:"Lojas 01 e 02",q:"Airton Ótica Tropical Shopping São Luís",week:"9h às 21h",sun:"Fechado",h:{wk:[540,1260],sun:null}},
    {id:"slz",img:1,name:"São Luís Shopping",note:"Loja 03",q:"Airton Ótica São Luís Shopping",week:"10h às 22h",sun:"13h às 21h",h:MALL},
    {id:"golden",img:1,name:"Golden Shopping",note:"Loja 05, piso L1, L64",where:"Calhau, piso L1, loja L64",q:"Airton Ótica Golden Shopping Calhau São Luís",week:"10h às 22h",sun:"13h às 21h",h:MALL}
  ];
  var STORES=[
    {n:"07",mall:"ilha",phone:"5598988796143",label:"(98) 98879-6143"},
    {n:"08",mall:"ilha",phone:"5598988993612",label:"(98) 98899-3612"},
    {n:"01",mall:"tropical",phone:"5598988993911",label:"(98) 98899-3911"},
    {n:"02",mall:"tropical",phone:"5598988794436",label:"(98) 98879-4436"},
    {n:"03",mall:"slz",phone:"5598988796305",label:"(98) 98879-6305"},
    {n:"05",mall:"golden",phone:"5598988796266",label:"(98) 98879-6266"}
  ];
  var PRODUCTS=[
    {img:"5089",brand:"Ray-Ban",model:"Clubmaster",info:"lente verde polarizada",type:"sol",top:1},
    {img:"5110",brand:"Carolina Herrera",model:"Acetato tartaruga",info:"armação de grau",type:"grau",top:1},
    {img:"5065",brand:"Ray-Ban",model:"Round Metal",info:"dourado e preto",type:"sol",top:1},
    {img:"5141",brand:"Swarovski",model:"Preto e dourado",info:"detalhes em cristal",type:"grau",top:1},
    {img:"5101",brand:"Carolina Herrera",model:"Gatinho",info:"tartaruga, lente degradê",type:"sol",top:1},
    {img:"5231",brand:"Calvin Klein",model:"Redondo",info:"metal leve",type:"grau",top:1},
    {img:"5225",brand:"Calvin Klein",model:"Retangular",info:"lente azul",type:"sol",top:1},
    {img:"5049",brand:"Santa Lolla",model:"Rosé",info:"acetato translúcido",type:"grau",top:1},
    {img:"5078",brand:"Ray-Ban",model:"Wayfarer",info:"tartaruga polarizado",type:"sol"},
    {img:"5199",brand:"HUGO",model:"Redondo preto",info:"lente degradê",type:"sol"},
    {img:"5148",brand:"Swarovski",model:"Sem aro",info:"metal dourado",type:"grau"},
    {img:"5118",brand:"Carolina Herrera",model:"Metal",info:"dourado e preto",type:"grau"},
    {img:"5242",brand:"Nike",model:"Metal azul",info:"armação esportiva",type:"grau"},
    {img:"5250",brand:"Armani Exchange",model:"Acetato",info:"azul e cristal",type:"grau"}
  ];
  var IMG={"5089": "assets/img/produto-5089.jpg","5110": "assets/img/produto-5110.jpg","5065": "assets/img/produto-5065.jpg","5141": "assets/img/produto-5141.jpg","5101": "assets/img/produto-5101.jpg","5231": "assets/img/produto-5231.jpg","5225": "assets/img/produto-5225.jpg","5049": "assets/img/produto-5049.jpg","5078": "assets/img/produto-5078.jpg","5199": "assets/img/produto-5199.jpg","5148": "assets/img/produto-5148.jpg","5118": "assets/img/produto-5118.jpg","5242": "assets/img/produto-5242.jpg","5250": "assets/img/produto-5250.jpg"};
  var IMG_M={ilha:"assets/img/shopping-ilha.jpg",tropical:"assets/img/shopping-tropical.jpg",slz:"assets/img/shopping-slz.jpg",golden:"assets/img/shopping-golden.jpg"};
  var MOTIVOS=[
    {id:"sol",t:"Óculos de sol",m:"quero ver óculos de sol"},
    {id:"grau",t:"Armação de grau",m:"quero ver armações de grau"},
    {id:"lentes",t:"Orçamento de lentes",m:"quero fazer um orçamento de lentes. Vou mandar a foto da minha receita"},
    {id:"modelo",t:"Consultar um modelo",m:"quero saber se vocês têm um modelo. Vou mandar o print"},
    {id:"ajuste",t:"Ajuste ou conserto",m:"preciso de um ajuste no meu óculos"},
    {id:"outro",t:"Outro assunto",m:"tenho uma dúvida"}
  ];

  function $(id){return document.getElementById(id);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function now(){var d=new Date(Date.now()-3*36e5);return{day:d.getUTCDay(),min:d.getUTCHours()*60+d.getUTCMinutes()};}
  function mall(id){for(var i=0;i<MALLS.length;i++)if(MALLS[i].id===id)return MALLS[i];}
  function store(n){for(var i=0;i<STORES.length;i++)if(STORES[i].n===n)return STORES[i];}
  function isOpen(h){var t=now(),r=t.day===0?h.sun:h.wk;return !!(r&&t.min>=r[0]&&t.min<r[1]);}
  function hm(m){var h=Math.floor(m/60),mm=m%60;return h+"h"+(mm?String(mm).padStart(2,"0"):"");}
  function statusText(h){
    var t=now(), r=t.day===0?h.sun:h.wk;
    if(r&&t.min>=r[0]&&t.min<r[1]) return {on:true,t:"Aberta agora, até as "+hm(r[1])};
    if(r&&t.min<r[0]) return {on:false,t:"Fechada, abre hoje às "+hm(r[0])};
    var nd=(t.day+1)%7, r2=nd===0?h.sun:h.wk;
    if(r2) return {on:false,t:"Fechada, abre amanhã às "+hm(r2[0])};
    return {on:false,t:"Fechada, abre segunda às "+hm(h.wk[0])};
  }
  function wa(s,msg){return "https://wa.me/"+s.phone+"?text="+encodeURIComponent(msg);}
  var WA='<svg aria-hidden="true"><use href="#i-wa"/></svg>';

  /* essenciais */
  var prods=$("prods");
  prods.innerHTML=PRODUCTS.map(function(p,i){
    return '<article class="prod" data-type="'+p.type+'" data-top="'+(p.top?1:0)+'">'+
      '<div class="ph"><img src="'+IMG[p.img]+'" alt="'+esc(p.brand+" "+p.model)+'" loading="lazy"><span class="tag it">'+(p.type==="sol"?"sol":"grau")+'</span></div>'+
      '<h3 class="lbl">'+esc(p.brand)+'</h3><p class="it">'+esc(p.model+", "+p.info)+'</p>'+
      '<button class="ask lbl link" type="button" data-i="'+i+'">Quero esse</button></article>';
  }).join("");
  function filter(f){
    document.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-selected",String(t.getAttribute("data-f")===f));});
    prods.querySelectorAll(".prod").forEach(function(c){
      c.hidden = f==="all" ? c.getAttribute("data-top")!=="1" : c.getAttribute("data-type")!==f;
    });
  }
  filter("all");
  document.querySelectorAll(".tab").forEach(function(t){t.addEventListener("click",function(){filter(t.getAttribute("data-f"));});});
  document.querySelectorAll("[data-tab]").forEach(function(a){a.addEventListener("click",function(){filter(a.getAttribute("data-tab"));closeDrawer();});});

  /* janela de loja para um produto */
  var dlg=$("pick");
  prods.addEventListener("click",function(e){
    var b=e.target.closest(".ask"); if(!b)return;
    var p=PRODUCTS[+b.getAttribute("data-i")];
    $("pick-img").src=IMG[p.img]; $("pick-img").alt=p.brand+" "+p.model;
    $("pick-ctx").textContent=p.brand+" "+p.model;
    $("pick-list").innerHTML=STORES.map(function(s){
      var m=mall(s.mall), on=isOpen(m.h);
      var msg="Olá! Vim pelo Instagram e quero saber se a Loja "+s.n+" tem o "+p.brand+" "+p.model+" ("+p.info+").";
      return '<li><a href="'+wa(s,msg)+'" target="_blank" rel="noopener"><span class="n">'+s.n+'</span><span class="t"><b>'+esc(m.name)+'</b><span>'+s.label+'</span></span><span class="st '+(on?"on":"off")+'">'+(on?"Aberta":"Fechada")+'</span></a></li>';
    }).join("");
    try{dlg.showModal();}catch(err){dlg.setAttribute("open","");}
  });
  $("pick-x").addEventListener("click",function(){dlg.close();});
  dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close();});
  $("pick-list").addEventListener("click",function(e){if(e.target.closest("a"))setTimeout(function(){dlg.close();},150);});

  /* lojas */
  $("stores").innerHTML=MALLS.map(function(m){
    var mine=STORES.filter(function(s){return s.mall===m.id;});
    var btns=mine.map(function(s){
      return '<a class="wa2 lbl" href="'+wa(s,"Olá! Vim pelo Instagram da Airton Ótica e quero falar com a Loja "+s.n+".")+'" target="_blank" rel="noopener" aria-label="WhatsApp da Loja '+s.n+', '+s.label+'">'+WA+'Loja '+s.n+'</a>';
    }).join("");
    var st=statusText(m.h);
    var media=m.img?'<img src="'+IMG_M[m.id]+'" alt="'+esc(m.name)+'" loading="lazy">':'';
    return '<article class="store" id="loja-'+m.id+'">'+
      '<div class="media">'+media+'<span class="shade"></span><div class="cap"><h3>'+esc(m.name)+'</h3><span class="lbl" style="opacity:.85;font-size:11px">'+esc(m.note)+'</span></div></div>'+
      '<div class="body"><span class="st-line'+(st.on?" on":"")+'">'+st.t+'</span>'+
      '<div class="wa-row">'+btns+'</div>'+
      '<div class="foot"><details class="lbl"><summary>Horários</summary><dl class="hrs" style="text-transform:none;letter-spacing:0;font-weight:400"><dt>Seg a sáb</dt><dd>'+m.week+'</dd><dt>Domingo</dt><dd>'+m.sun+'</dd></dl></details>'+
      '<a class="lbl" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(m.q)+'" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-pin"/></svg>Mapa</a></div>'+
      '</div></article>';
  }).join("");
  $("find-mall").innerHTML=MALLS.map(function(m){return '<option value="'+m.id+'">'+esc(m.name)+'</option>';}).join("");
  $("find").addEventListener("submit",function(e){
    e.preventDefault();
    var el=$("loja-"+$("find-mall").value);
    document.querySelectorAll(".store").forEach(function(s){s.classList.toggle("hl",s===el);});
    el.scrollIntoView({behavior:"smooth",block:"center"});
  });
  $("f-lojas").innerHTML=MALLS.map(function(m){return '<li><a href="#loja-'+m.id+'">'+esc(m.name)+'</a></li>';}).join("");

  /* montador de mensagem */
  $("b-motivo").innerHTML=MOTIVOS.map(function(o){return '<option value="'+o.id+'">'+o.t+'</option>';}).join("");
  $("b-loja").innerHTML=MALLS.map(function(m){
    return '<optgroup label="'+esc(m.name)+'">'+STORES.filter(function(s){return s.mall===m.id;}).map(function(s){return '<option value="'+s.n+'">'+esc(m.name)+', loja '+s.n+'</option>';}).join("")+'</optgroup>';
  }).join("");
  function build(){
    var o=MOTIVOS.filter(function(x){return x.id===$("b-motivo").value;})[0], s=store($("b-loja").value);
    $("b-send").href=wa(s,"Olá! Vim pelo Instagram e "+o.m+". (Loja "+s.n+", "+mall(s.mall).name+")");
  }
  $("builder").addEventListener("change",build);
  $("b-motivo").addEventListener("input",build);$("b-loja").addEventListener("input",build);
  $("b-send").addEventListener("click",build);
  $("builder").addEventListener("submit",function(e){e.preventDefault();});
  build();
  document.querySelectorAll("[data-pre]").forEach(function(b){
    b.addEventListener("click",function(){
      $("b-motivo").value=b.getAttribute("data-pre");build();
      $("fale").scrollIntoView({behavior:"smooth"});
    });
  });

  /* faixa de marcas: segunda cópia para o loop infinito */
  (function(){var a=document.querySelector(".mq"),b=$("mq2");b.innerHTML=a.innerHTML;b.querySelectorAll("img").forEach(function(i){i.alt="";});})();

  /* carrossel do topo */
  (function(){
    var box=$("slides"), sl=[].slice.call(box.querySelectorAll(".slide")), dots=$("dots"), i=0, timer=null;
    var still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
    dots.innerHTML=sl.map(function(s,k){return '<button class="dot" type="button" aria-label="Foto '+(k+1)+' de '+sl.length+'"'+(k===0?' aria-current="true"':'')+'></button>';}).join("");
    var db=[].slice.call(dots.children);
    function go(n){sl[i].classList.remove("on");db[i].removeAttribute("aria-current");i=(n+sl.length)%sl.length;sl[i].classList.add("on");db[i].setAttribute("aria-current","true");}
    function play(){if(still)return;stop();timer=setInterval(function(){go(i+1);},4500);}
    function stop(){if(timer)clearInterval(timer);timer=null;}
    db.forEach(function(d,k){d.addEventListener("click",function(){go(k);play();});});
    box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",play);
    box.addEventListener("focusin",stop);box.addEventListener("focusout",play);
    var x0=null;
    box.addEventListener("touchstart",function(e){x0=e.touches[0].clientX;},{passive:true});
    box.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(i+(dx<0?1:-1));play();}x0=null;});
    play();
  })();

  /* menu do celular */
  var mb=$("menu-btn"), dr=$("drawer");
  function closeDrawer(){dr.hidden=true;mb.setAttribute("aria-expanded","false");}
  mb.addEventListener("click",function(){var o=dr.hidden;dr.hidden=!o;mb.setAttribute("aria-expanded",String(o));});
  dr.addEventListener("click",function(e){if(e.target.closest("a"))closeDrawer();});
})();
