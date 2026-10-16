const PRODUCTS = [
  {id:'strat-slate',name:'Stratocaster Slate',category:'Guitarras',price:1299,image:'https://images.pexels.com/photos/15855033/pexels-photo-15855033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Más vendido',description:'Cuerpo de aliso, mástil de arce y tres pastillas single-coil para un tono versátil y definido.'},
  {id:'jazzmaster',name:'Jazzmaster Offset',category:'Guitarras',price:1540,image:'https://images.pexels.com/photos/38561551/pexels-photo-38561551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Novedad',description:'Una silueta con carácter y un circuito expresivo para explorar texturas fuera de lo común.'},
  {id:'acoustic-nova',name:'Nova Acoustic 24',category:'Guitarras',price:690,image:'https://images.pexels.com/photos/26770053/pexels-photo-26770053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Selección',description:'Tapa de abeto y acabado natural. Proyección cálida para tocar en casa, estudio o escenario.'},
  {id:'stage-keys',name:'Stage Keys 88',category:'Teclados',price:1120,image:'https://images.pexels.com/photos/2480397/pexels-photo-2480397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Novedad',description:'88 teclas contrapesadas, respuesta natural y controles directos para tocar sin límites.'},
  {id:'analog-synth',name:'Analog Pulse 4',category:'Teclados',price:840,image:'https://images.pexels.com/photos/11317896/pexels-photo-11317896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Sintetizador compacto de cuatro voces con secuenciador para diseñar tu propia frecuencia.'},
  {id:'studio-drum',name:'Studio Kit 5pc',category:'Baterías',price:1890,image:'https://images.pexels.com/photos/8198158/pexels-photo-8198158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Premium',description:'Kit acústico de cinco piezas con cascos de arce y herrajes preparados para girar.'},
  {id:'red-drum',name:'Redline 22',category:'Baterías',price:980,image:'https://images.pexels.com/photos/8512399/pexels-photo-8512399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Ataque contundente y graves profundos para que cada golpe tenga presencia.'},
  {id:'amp-tube',name:'Tube 30 Combo',category:'Amplificadores',price:760,image:'https://images.pexels.com/photos/33094348/pexels-photo-33094348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Favorito',description:'Amplificador valvular de 30W con respuesta dinámica y ese color cálido que pide el escenario.'},
  {id:'amp-stack',name:'Stage Stack 100',category:'Amplificadores',price:1240,image:'https://images.pexels.com/photos/35985260/pexels-photo-35985260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Cabezal y gabinete de 100W para llenar salas con graves firmes y una presencia enorme.'},
  {id:'mic-pro',name:'Vocal Mic M1',category:'Micrófonos',price:290,image:'https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Esencial',description:'Micrófono dinámico para voces claras, podcasts y directos con confianza.'},
  {id:'mic-ribbon',name:'Ribbon Room R2',category:'Micrófonos',price:620,image:'https://images.pexels.com/photos/5648350/pexels-photo-5648350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Estudio',description:'Captura vocal e instrumental con un detalle suave, abierto y lleno de carácter.'},
  {id:'mic-stage',name:'Stage Condenser C1',category:'Micrófonos',price:410,image:'https://images.pexels.com/photos/8041015/pexels-photo-8041015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Condensador versátil para home studio, streaming y grabaciones con definición.'},
  {id:'headphones',name:'Monitor Headphones H7',category:'Accesorios',price:180,image:'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',tag:'Nuevo',description:'Audífonos cerrados de monitoreo con graves controlados y comodidad para sesiones largas.'},
  {id:'pedal-delay',name:'Echo Delay D3',category:'Accesorios',price:145,image:'https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Delay compacto con tres modos y tap tempo para convertir una frase en un paisaje.'},
  {id:'stand-key',name:'Stand Fold X',category:'Accesorios',price:95,image:'https://images.pexels.com/photos/34577466/pexels-photo-34577466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Soporte plegable y estable para teclados, controladores y sesiones móviles.'},
  {id:'cable-kit',name:'Cable Kit Pro',category:'Accesorios',price:68,image:'https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Set de cables reforzados para conectar tu setup con menos ruido y más libertad.'},
  {id:'bass-slate',name:'Bassline Slate',category:'Bajos',price:980,image:'https://images.pexels.com/photos/33923312/pexels-photo-33923312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Bajo eléctrico de cuatro cuerdas con graves definidos y un perfil cómodo.'},
  {id:'dj-controller',name:'Orbit DJ 2',category:'DJ y Producción',price:560,image:'https://images.pexels.com/photos/1690080/pexels-photo-1690080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',description:'Controlador compacto para mezclar, crear transiciones y producir donde quieras.'}
];

const categories=['Todos','Guitarras','Bajos','Teclados','Baterías','Amplificadores','Micrófonos','Accesorios','DJ y Producción'];
let activeCategory='Todos';
let searchTerm='';
let sortAsc=false;
let cart=JSON.parse(localStorage.getItem('nova-cart')||'[]');
let favorites=JSON.parse(localStorage.getItem('nova-favorites')||'[]');
const $=selector=>document.querySelector(selector);
const $$=selector=>Array.from(document.querySelectorAll(selector));
const money=value=>`$${value.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const isCatalog=document.body.dataset.page==='catalog';

function renderFilters(){
  const node=$('#filterTabs');
  if(!node)return;
  node.innerHTML=categories.map(category=>`<button class="filter-tab ${category===activeCategory?'active':''}" data-category="${category}">${category}</button>`).join('');
  $$('.filter-tab').forEach(button=>button.addEventListener('click',()=>{activeCategory=button.dataset.category;renderFilters();renderProducts()}));
}
function visibleProducts(){
  const filtered=PRODUCTS.filter(product=>(activeCategory==='Todos'||product.category===activeCategory)&&product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const sorted=filtered.sort((a,b)=>sortAsc?a.price-b.price:b.price-a.price);
  return isCatalog?sorted:sorted.slice(0,6);
}
function renderProducts(){
  const grid=$('#productGrid');
  const empty=$('#emptyState');
  if(!grid)return;
  const items=visibleProducts();
  grid.innerHTML=items.map((product,index)=>`<article class="product-card" style="animation-delay:${index*35}ms"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy">${product.tag?`<span class="product-tag">${product.tag}</span>`:''}<button class="favorite-button ${favorites.includes(product.id)?'active':''}" data-favorite="${product.id}" aria-label="Agregar a favoritos">${favorites.includes(product.id)?'♥':'♡'}</button></div><div class="product-info"><p class="product-category">${product.category}</p><h3 class="product-name" title="${product.name}">${product.name}</h3><div class="product-bottom"><p class="product-price">${money(product.price)}</p><div class="product-actions"><button class="quick-button" data-quick="${product.id}">Vista rápida</button><button class="add-button" data-add="${product.id}">+ Añadir</button></div></div></div></article>`).join('');
  if(empty)empty.classList.toggle('visible',items.length===0);
  $$('[data-add]').forEach(button=>button.addEventListener('click',()=>addToCart(button.dataset.add)));
  $$('[data-quick]').forEach(button=>button.addEventListener('click',()=>openQuickView(button.dataset.quick)));
  $$('[data-favorite]').forEach(button=>button.addEventListener('click',()=>toggleFavorite(button.dataset.favorite)));
}
function toggleFavorite(id){favorites=favorites.includes(id)?favorites.filter(item=>item!==id):[...favorites,id];localStorage.setItem('nova-favorites',JSON.stringify(favorites));$$('.favorite-count').forEach(node=>node.textContent=favorites.length);renderProducts();showToast(favorites.includes(id)?'Guardado en favoritos':'Quitado de favoritos')}
function addToCart(id){const existing=cart.find(item=>item.id===id);if(existing)existing.quantity+=1;else cart.push({id,quantity:1});localStorage.setItem('nova-cart',JSON.stringify(cart));renderCart();showToast('Producto agregado al carrito')}
function changeQuantity(id,delta){const item=cart.find(product=>product.id===id);if(!item)return;item.quantity+=delta;if(item.quantity<=0)cart=cart.filter(product=>product.id!==id);localStorage.setItem('nova-cart',JSON.stringify(cart));renderCart()}
function renderCart(){
  const items=$('#cartItems');
  const empty=$('#cartEmpty');
  if(!items||!empty)return;
  const total=cart.reduce((sum,item)=>{const product=PRODUCTS.find(product=>product.id===item.id);return sum+(product?product.price*item.quantity:0)},0);
  $$('.cart-count').forEach(node=>node.textContent=cart.reduce((sum,item)=>sum+item.quantity,0));
  if($('#cartTotal'))$('#cartTotal').textContent=money(total);
  items.innerHTML=cart.map(item=>{const product=PRODUCTS.find(product=>product.id===item.id);return product?`<div class="cart-row"><img src="${product.image}" alt="${product.name}"><div><h4>${product.name}</h4><p>${money(product.price)}</p><div class="qty-control"><button data-qty="${product.id}" data-delta="-1">−</button><span>${item.quantity}</span><button data-qty="${product.id}" data-delta="1">+</button></div></div><strong>${money(product.price*item.quantity)}</strong></div>`:''}).join('');
  empty.style.display=cart.length?'none':'block';
  $$('[data-qty]').forEach(button=>button.addEventListener('click',()=>changeQuantity(button.dataset.qty,Number(button.dataset.delta))));
}
function openCart(){document.body.classList.add('drawer-open');$('#cartDrawer')?.classList.add('open')}
function closeCart(){document.body.classList.remove('drawer-open');$('#cartDrawer')?.classList.remove('open')}
function openQuickView(id){const product=PRODUCTS.find(item=>item.id===id);if(!product||!$('#quickContent'))return;$('#quickContent').innerHTML=`<img src="${product.image}" alt="${product.name}"><div class="quick-info"><p class="product-category">${product.category}</p><h2>${product.name}</h2><p>${product.description}</p><div class="quick-price">${money(product.price)}</div><button class="button button-accent" id="quickAdd">Agregar al carrito <span>→</span></button></div>`;$('#quickAdd').addEventListener('click',()=>{addToCart(product.id);closeQuickView();openCart()});document.body.classList.add('modal-open');$('#quickView')?.classList.add('open')}
function closeQuickView(){document.body.classList.remove('modal-open');$('#quickView')?.classList.remove('open')}
let toastTimer;
function showToast(message){const toast=$('#toast');if(!toast)return;$('#toastMessage').textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300)}
function setupCarousel(){
  const track=$('.spotlight-track');
  const slides=$$('.spotlight-slide');
  if(!track||slides.length<2)return;
  let current=0;
  let timer;
  const update=()=>{track.style.transform=`translateX(-${current*100}%)`;slides.forEach((slide,index)=>slide.classList.toggle('active',index===current));if($('#carouselCurrent'))$('#carouselCurrent').textContent=String(current+1).padStart(2,'0')};
  const next=()=>{current=(current+1)%slides.length;update()};
  const previous=()=>{current=(current-1+slides.length)%slides.length;update()};
  const restart=()=>{clearInterval(timer);timer=setInterval(next,5500)};
  $('.carousel-next')?.addEventListener('click',()=>{next();restart()});
  $('.carousel-prev')?.addEventListener('click',()=>{previous();restart()});
  $('.spotlight-viewport')?.addEventListener('mouseenter',()=>clearInterval(timer));
  $('.spotlight-viewport')?.addEventListener('mouseleave',restart);
  $('.spotlight-viewport')?.addEventListener('touchstart',()=>clearInterval(timer),{passive:true});
  $('.spotlight-viewport')?.addEventListener('touchend',restart,{passive:true});
  update();restart();
}
function setupTheme(){
  let saved=null;
  try{saved=localStorage.getItem('nova-theme')}catch(e){}
  const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark',saved?saved==='dark':prefersDark);
  const button=$('.theme-toggle');
  if(!button)return;
  const update=()=>{const dark=document.documentElement.classList.contains('dark');button.setAttribute('aria-label',dark?'Activar modo claro':'Activar modo oscuro');button.innerHTML=dark?'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>':'<svg viewBox="0 0 24 24"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"></path></svg>'};
  update();
  button.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');try{localStorage.setItem('nova-theme',document.documentElement.classList.contains('dark')?'dark':'light')}catch(e){}update()});
}
function setup(){
  setupTheme();
  setupCarousel();
  const queryCategory=new URLSearchParams(window.location.search).get('categoria');
  if(queryCategory&&categories.includes(queryCategory))activeCategory=queryCategory;
  renderFilters();renderProducts();renderCart();
  $('.cart-trigger')?.addEventListener('click',openCart);$('.drawer-close')?.addEventListener('click',closeCart);$('.drawer-backdrop')?.addEventListener('click',closeCart);$('.modal-backdrop')?.addEventListener('click',closeQuickView);$('.modal-close')?.addEventListener('click',closeQuickView);
  $('.search-trigger')?.addEventListener('click',()=>{$('#searchBar')?.classList.toggle('open');if($('#searchBar')?.classList.contains('open'))$('#searchInput')?.focus()});
  $('.search-close')?.addEventListener('click',()=>{$('#searchBar')?.classList.remove('open');if($('#searchInput'))$('#searchInput').value='';searchTerm='';renderProducts()});
  $('#searchInput')?.addEventListener('input',event=>{searchTerm=event.target.value;renderProducts()});
  $('#sortButton')?.addEventListener('click',()=>{sortAsc=!sortAsc;$('#sortButton').innerHTML=`Ordenar por precio <span>${sortAsc?'↑':'↓'}</span>`;renderProducts()});
  $('#clearFilters')?.addEventListener('click',()=>{activeCategory='Todos';searchTerm='';if($('#searchInput'))$('#searchInput').value='';renderFilters();renderProducts()});
  $('.menu-trigger')?.addEventListener('click',()=>$('#mobileNav')?.classList.toggle('open'));$$('.mobile-nav a').forEach(link=>link.addEventListener('click',()=>$('#mobileNav')?.classList.remove('open')));
  $('.announcement-close')?.addEventListener('click',event=>event.currentTarget.parentElement.remove());
  $('#newsletterForm')?.addEventListener('submit',event=>{event.preventDefault();$('#newsletterMessage').textContent='Listo. Revisa tu bandeja para confirmar tu suscripción.';$('#newsletterEmail').value='';showToast('Suscripción confirmada')});
  window.addEventListener('scroll',()=>$('#siteHeader')?.classList.toggle('scrolled',window.scrollY>20),{passive:true});
}
document.addEventListener('DOMContentLoaded',setup);
