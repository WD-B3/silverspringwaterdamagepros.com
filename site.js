(function(){
  var nav=document.getElementById("sitenav"),b=document.getElementById("burger");
  if(!nav||!b)return;
  function setOpen(o){nav.classList.toggle("open",o);b.setAttribute("aria-expanded",String(o));b.setAttribute("aria-label",o?"Close menu":"Open menu");document.documentElement.style.overflow=(o&&window.innerWidth<=900)?"hidden":"";}
  b.addEventListener("click",function(){setOpen(!nav.classList.contains("open"));});
  var drops=nav.querySelectorAll(".has-drop>button");
  drops.forEach(function(btn){btn.addEventListener("click",function(){var li=btn.parentNode,o=!li.classList.contains("open");drops.forEach(function(x){x.parentNode.classList.remove("open");x.setAttribute("aria-expanded","false");});li.classList.toggle("open",o);btn.setAttribute("aria-expanded",String(o));});});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){setOpen(false);drops.forEach(function(x){x.parentNode.classList.remove("open");});}});
  window.addEventListener("resize",function(){if(window.innerWidth>900)setOpen(false);});
})();
