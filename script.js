/* Bag of Crisps customer ordering */
const menu = Array.isArray(window.MENU_DATA) ? window.MENU_DATA : [];
const extras = Array.isArray(window.EXTRAS) ? window.EXTRAS : [];
let cart=[];
function money(v){return v==null||v===""?"MRP":"₹"+Number(v).toLocaleString('en-IN')}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
function add(name,varn,price,extraObj=null){
  if(price==null||price===""){alert("This item is currently shown as MRP. Please confirm the price with us.");return}
  const extraPrice=extraObj?Number(extraObj.price)||0:0;
  const extraName=extraObj?extraObj.name:"";
  const key=name+"|"+varn+"|"+extraName;
  const f=cart.find(x=>x.key===key);
  if(f) f.qty++; else cart.push({key,name:name+(varn?` (${varn})`:"")+(extraName?` + ${extraName}`:""),price:Number(price)+extraPrice,qty:1});
  renderCart();
}
function change(k,d){const i=cart.findIndex(x=>x.key===k);if(i<0)return;cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCart()}
function renderCats(){const nav=document.querySelector('#cats');nav.innerHTML='';menu.forEach(([cat])=>{const b=document.createElement('button');b.textContent=cat;b.onclick=()=>document.getElementById('cat-'+slug(cat)).scrollIntoView({behavior:'smooth'});nav.appendChild(b)})}
function renderMenu(filter=''){
 const el=document.querySelector('#menu');el.innerHTML='';let count=0;
 menu.forEach(([cat,items,note])=>{
  const matches=items.filter(x=>(cat+' '+JSON.stringify(x)).toLowerCase().includes(filter.toLowerCase())); if(!matches.length)return; count+=matches.length;
  const sec=document.createElement('section');sec.className='category';sec.id='cat-'+slug(cat);
  sec.innerHTML=`<div class="category-title"><h2>${cat}</h2><small>${matches.length} items</small></div><div class="items"></div>${note?`<div class="note">${note}</div>`:''}`;
  const grid=sec.querySelector('.items');
  matches.forEach(x=>{
   const [name,variants,desc]=x,card=document.createElement('article');card.className='item';
   const opts=Object.entries(variants||{}).map(([v,p])=>`<option value="${String(v).replaceAll('"','&quot;')}">${v} — ${money(p)}</option>`).join('');
   const isWrap=cat==='Toasts & Wraps'&&/Wrap$/i.test(name);
   const extraOpts=extras.map(e=>`<option value="${e.id}">${e.name} (+₹${Number(e.price)||0})</option>`).join('');
   card.innerHTML=`<div class="item-top"><h3>${name}</h3><span class="price"></span></div>${desc?`<p class="desc">${desc}</p>`:''}<div class="controls"><select class="select">${opts}</select>${isWrap?`<label class="extra"><input type="checkbox" class="cheese"> +Cheese ₹15</label>`:''}<button class="add">Add</button></div>`;
   const sel=card.querySelector('.select'),price=card.querySelector('.price');
   const sync=()=>price.textContent=money((variants||{})[sel.value]); sync(); sel.onchange=sync;
   card.querySelector('.add').onclick=()=>{let extra=null;if(isWrap&&card.querySelector('.cheese')?.checked) extra={name:'Extra Cheese',price:15};add(name,sel.value,(variants||{})[sel.value],extra);renderCart()};
   grid.appendChild(card);
  }); el.appendChild(sec);
 }); if(!count)el.innerHTML='<div class="no-results">No item found.</div>';
}
function renderCart(){const el=document.querySelector('#cart'),empty=document.querySelector('#cartEmpty');el.innerHTML='';empty.style.display=cart.length?'none':'block';let total=0,count=0;cart.forEach(i=>{total+=i.price*i.qty;count+=i.qty;const r=document.createElement('div');r.className='cart-row';r.innerHTML=`<div><div class="cart-name">${i.name}</div><div class="cart-sub">₹${i.price} each</div></div><div class="cart-actions"><button type="button">−</button><b>${i.qty}</b><button type="button">+</button></div>`;r.querySelectorAll('button')[0].onclick=()=>change(i.key,-1);r.querySelectorAll('button')[1].onclick=()=>change(i.key,1);el.appendChild(r)});document.querySelector('#cartTotal').textContent='₹'+total;document.querySelector('#cartCount').textContent=count}
document.querySelector('#search').oninput=e=>renderMenu(e.target.value.trim());document.querySelector('#viewCart').onclick=()=>document.querySelector('#checkout').scrollIntoView({behavior:'smooth'});document.querySelector('#clearCart').onclick=()=>{cart=[];renderCart()};
document.querySelectorAll('input[name="orderType"]').forEach(r=>r.onchange=()=>{document.querySelectorAll('.choice').forEach(c=>c.classList.remove('active'));r.closest('.choice').classList.add('active');const d=r.value==='Delivery',a=document.querySelector('#address');a.required=d;a.disabled=!d;if(!d)a.value=''});
const now=new Date(),local=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);document.querySelector('#date').min=local;document.querySelector('#date').value=local;
document.querySelector('#orderForm').onsubmit=e=>{e.preventDefault();if(!cart.length){alert('Please add at least one item.');return}const f=new FormData(e.target),type=f.get('orderType'),lines=cart.map(i=>`• ${i.name} × ${i.qty} — ₹${i.price*i.qty}`).join('\n'),total=cart.reduce((s,i)=>s+i.price*i.qty,0);const msg=`*NEW ORDER — BAG OF CRISPS* 🍟\n\n*Order Type:* ${type}\n\n*Items:*\n${lines}\n\n*Items Total:* ₹${total}\n\n*Customer Details:*\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nAddress: ${type==='Delivery'?f.get('address'):'Self Pickup'}\nLandmark: ${f.get('landmark')||'—'}\nDate: ${f.get('date')}\nTime: ${f.get('time')}\nNotes: ${f.get('notes')||'—'}\n\n_Please confirm final bill & delivery charges._`;window.open(`https://wa.me/919582379369?text=${encodeURIComponent(msg)}`,'_blank')};
renderCats();renderMenu();renderCart();
