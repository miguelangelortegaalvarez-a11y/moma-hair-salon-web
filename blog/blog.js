/* Blog MOMA — menú hamburguesa (móvil) + aparición al hacer scroll.
   Compartido por la portada del blog y por cada artículo. */
(function(){
  /* Hamburguesa */
  var nav = document.querySelector('.nav');
  var burger = document.getElementById('burger');
  if(nav && burger){
    function close(){ nav.classList.remove('is-open'); burger.setAttribute('aria-expanded','false'); }
    burger.addEventListener('click', function(){
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function(a){ a.addEventListener('click', close); });
    document.addEventListener('click', function(e){
      if(nav.classList.contains('is-open') && !nav.contains(e.target)) close();
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
  }

  /* Aparición al hacer scroll */
  var items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  if(!('IntersectionObserver' in window)){
    items.forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  items.forEach(function(el){ io.observe(el); });
})();
