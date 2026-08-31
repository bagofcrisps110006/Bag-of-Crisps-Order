const WA="919582379369";
const IMG={Momos:"momos.jpg","Toasts & Wraps":"wraps.jpg",Salads:"salads.jpg",Pasta:"pasta.jpg",Burgers:"burgers.jpg","Drinks & Dessert":"drinks.jpg","Quick Bites":"quick-bites.jpg",Fries:"fries.jpg","Chinese / Korean":"chinese.jpg","Pav & Parotta":"pav.jpg"};
const menu=[
["Momos",[
["Steamed Momo",{"Veg":110,"Chicken":130,"Paneer":130},"Steamed, straight from the steamer"],
["Fried Momo",{"Veg":120,"Chicken":140,"Paneer":140},"Deep-fried, hot & spicy"],
["Pan-Fried Momo",{"Veg":120,"Chicken":140,"Paneer":140},"Tawa-tossed with masala"],
["Crumbly Momo",{"Veg":140,"Chicken":150,"Paneer":150},"Crispy crumbs with a juicy surprise"],
["Tandoori Momo",{"Chicken":160,"Paneer":160},"Smoky, spicy, straight from tandoor"],
["Chilly Momo",{"Chicken":160,"Paneer":160},"Fiery, saucy and irresistible"],
["Cheese Baked Momo",{"Chicken":170,"Paneer":170},"Ultimate cheese-loaded momos"],
["Afghani Momo",{"Chicken":170,"Paneer":170},"Subtle spice, creamy delight"],
["Makhni Momo",{"Chicken":180,"Paneer":180},"Buttery richness and bold flavors"]],"All momo varieties are served in 8 pieces per plate"],
["Toasts & Wraps",[
["Cheesy Toasties",{"Veg":100},"Five toasts with melted cheese"],
["Corn & Cheese Toasties",{"Veg":110},"Golden toasts with corn & cheese"],
["Veggie Toasties",{"Veg":120},"Crunchy, colorful and full of flavor"],
["Spicy Paneer Wrap",{"Veg":120},"Soft paneer, fiery spices"],
["Chicken Strips Wrap",{"Chicken":120},"Crispy chicken strips in a wrap"],
["Grilled Chicken Wrap",{"Chicken":120},"Juicy grilled chicken with fresh flavors"],
["Golden Fish Wrap",{"Fish":130},"Crispy fish with creamy tartar"]],"Add cheese slice in wraps +₹15"],
["Salads",[
["Veg Salad",{"Veg":120},"Fresh lettuce, tomatoes, cucumber, cabbage, olives & peppers"],
["Chicken Salad",{"Chicken":150},"Fresh lettuce, crunchy veggies and juicy chicken"],
["Chicken Caesar Salad",{"Chicken":160},"Fresh lettuce, crunchy veggies and chicken"]]],
["Pasta",[
["Alfredo Pasta",{"Veg":110,"Chicken":140},"Silky smooth Alfredo sauce"],
["Arrabiata Pasta",{"Veg":110,"Chicken":140},"Heat and tangy goodness"],
["Pink Sauce Pasta",{"Veg":110,"Chicken":140},"Creamy Alfredo + tangy tomato"],
["Mac & Cheese",{"Veg":130,"Chicken":160},"Comfort pasta with premium cheese"]]],
["Burgers",[
["Aloo Tikki Burger",{"Veg":60},"Desi goodness in a bun"],
["Loaded Veggie Burger",{"Veg":70},"Veggie patty with fresh veggies & sauces"],
["Minced Chicken Burger",{"Chicken":80},"Seasoned minced chicken patty"],
["Grilled Chicken Burger",{"Chicken":90},"Juicy grilled chicken with mint sauce"],
["Chicken Shawarma Burger",{"Chicken":90},"Smoky shawarma chicken & creamy sauces"],
["Crunchy Chicken Burger",{"Chicken":90},"Double strips, double crunch"],
["Golden Fish Burger",{"Fish":90},"Golden fried fish with tartar & jalapeños"],
["Spicy Paneer Burger",{"Paneer":90},"Bold paneer with a fiery kick"]]],
["Drinks & Dessert",[
["Choco Lava Cupcake",{"Veg":40}],["Fruit Curd (Blueberry/Strawberry/Mango)",{"Veg":60}],
["Mocktails (Seasonal)",{"Veg":80},"Virgin/Ginger-Ale/Green Apple/Peach/Blueberry/Strawberry"],
["Cold Coffee",{"Veg":90}],["Milkshake (Banana/Strawberry/Chocolate/Mango/Peanut-butter)",{"Veg":110}],
["Smoothies (Blueberry/Strawberry/Mango/Peanut-butter)",{"Veg":120}],["Cold Drink",{"MRP":null},"M.R.P."]]],
["Quick Bites",[
["Veggie Noodles (Maggi Style)",{"Veg":50}],["Salsa Nachos",{"Veg":60}],["Potato Wedges",{"Veg":90}],
["Veg Spring Rolls (5 pcs)",{"Veg":110}],["Chicken Spring Rolls (5 pcs)",{"Chicken":130}],["Veg Pizza Pocket (5 pcs)",{"Veg":130}],
["Aloo Matar Samosi (6 pcs)",{"Veg":100}],["Cheesy Pizza Rolls (6 pcs)",{"Veg":140}],["Chicken Samosi (8 pcs)",{"Chicken":130}],
["Chicken Nuggets (8 pcs)",{"Chicken":130}],["Chicken Cheesy Balls (8 pcs)",{"Chicken":130}],["Chicken Fries (15 pcs)",{"Chicken":130}],
["Chicken Tenders (6 pcs)",{"Chicken":140}],["Fish Strips (6 pcs)",{"Fish":140}],["Crumbly Prawns (8 pcs)",{"Prawns":150}]]],
["Fries",[
["Salted Fries",{"Veg":70},"The OG fries"],["Peri-Peri Fries",{"Veg":80},"Fiery peri-peri kick"],
["Chilly Lemon Fries",{"Veg":80},"Tangy and spicy"],["Veg Loaded Fries",{"Veg":130},"Colorful burst of flavor"],
["Chicken Loaded Fries",{"Chicken":160},"Crispy fries with juicy chicken balls"]]],
["Chinese / Korean",[
["Veg Chowmein",{"Veg":140},"Wok-tossed perfection"],["Chicken Chowmein",{"Chicken":160},"Wok-tossed chicken chowmein"],
["Chilli Potato",{"Veg":140},"Rich, sticky and flavorful"],["Honey Chilli Potato",{"Veg":160},"Sweetness and heat"],
["Chilli Chicken Balls",{"Chicken":160},"Chicken balls in fiery chilli sauce"],["Chicken Korean Strips",{"Chicken":160},"Chicken breast strips in Korean sauce"],
["Chilli Paneer",{"Paneer":170},"Paneer cubes in saucy goodness"]]],
["Pav & Parotta",[
["Vada Pav",{"Veg":50},"Crispy vada, soft pav & chutney"],["Chicken Galauti Kabab Bun",{"Chicken":80},"Soft kabab, spicy attitude"],
["Chicken Galauti Kabab Roll",{"Chicken":100},"Melt-in-the-mouth galauti roll"],["Chilly Paneer Roll",{"Paneer":120},"Spicy chilly paneer roll"]]]
];

let cart=[];
const money=v=>v==null?"MRP":"₹"+v;
function key(name,varn,extra){return name+"|"+varn+"|"+extra}
function add(name,varn,price,extra=0){
 if(price==null){alert("Please set the MRP for Cold Drink first.");return}
 const k=key(name,varn,extra), f=cart.find(x=>x.key===k);
 if(f)f.qty++;else cart.push({key:k,name:name+(varn?` (${varn})`:"")+(extra?" + Extra cheese":""),price:price+extra,qty:1});
 renderCart();
}
function change(k,d){let i=cart.findIndex(x=>x.key===k);if(i<0)return;cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCart()}
function thumb(cat){return IMG[cat]||"logo.png"}
function renderCats(){
 const nav=document.querySelector("#cats");nav.innerHTML="";
 menu.forEach(([cat])=>{let b=document.createElement("button");b.textContent=cat;b.onclick=()=>document.getElementById("cat-"+slug(cat)).scrollIntoView({behavior:"smooth"});nav.appendChild(b)})
}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
function renderMenu(filter=""){
 const el=document.querySelector("#menu");el.innerHTML="";let count=0;
 menu.forEach(([cat,items,note])=>{
  const matches=items.filter(x=>(cat+" "+JSON.stringify(x)).toLowerCase().includes(filter.toLowerCase()));
  if(!matches.length)return;count+=matches.length;
  const sec=document.createElement("section");sec.className="category";sec.id="cat-"+slug(cat);
  sec.innerHTML=`<div class="category-head"><img src="${thumb(cat)}"><h2>${cat}</h2></div><div class="items"></div>${note?`<div class="note">${note}</div>`:""}`;
  const grid=sec.querySelector(".items");
  matches.forEach(x=>{
   const [name,variants,desc]=x, card=document.createElement("article");card.className="item";
   const opts=Object.entries(variants).map(([v,p])=>`<option value="${v}">${v} — ${money(p)}</option>`).join("");
   const isWrap=cat==="Toasts & Wraps"&&name.endsWith("Wrap");
   card.innerHTML=`<img class="item-thumb" src="${thumb(cat)}"><div class="item-main"><div class="item-top"><h3>${name}</h3><span class="price"></span></div>${desc?`<p class="desc">${desc}</p>`:""}<div class="controls"><select class="select">${opts}</select>${isWrap?`<label class="extra"><input type="checkbox" class="cheese"> +Cheese ₹15</label>`:""}<button class="add">Add</button></div></div>`;
   const sel=card.querySelector(".select"), price=card.querySelector(".price"), cheese=card.querySelector(".cheese");
   const sync=()=>price.textContent=money(variants[sel.value]);sync();sel.onchange=sync;
   card.querySelector(".add").onclick=()=>add(name,sel.value,variants[sel.value],cheese&&cheese.checked?15:0);
   grid.appendChild(card);
  });el.appendChild(sec);
 });
 if(!count)el.innerHTML='<div class="no-results">No item found.</div>';
}
function renderCart(){
 const el=document.querySelector("#cart"),empty=document.querySelector("#cartEmpty");el.innerHTML="";empty.style.display=cart.length?"none":"block";
 let total=0,count=0;cart.forEach(i=>{total+=i.price*i.qty;count+=i.qty;
  const r=document.createElement("div");r.className="cart-row";
  r.innerHTML=`<div><div class="cart-name">${i.name}</div><div class="cart-sub">₹${i.price} each</div></div><div class="cart-actions"><button>−</button><b>${i.qty}</b><button>+</button></div>`;
  r.querySelectorAll("button")[0].onclick=()=>change(i.key,-1);r.querySelectorAll("button")[1].onclick=()=>change(i.key,1);el.appendChild(r);
 });
 document.querySelector("#cartTotal").textContent="₹"+total;document.querySelector("#cartCount").textContent=count;
}
document.querySelector("#search").oninput=e=>renderMenu(e.target.value.trim());
document.querySelector("#viewCart").onclick=()=>document.querySelector("#checkout").scrollIntoView({behavior:"smooth"});
document.querySelector("#clearCart").onclick=()=>{cart=[];renderCart()};
document.querySelectorAll('input[name="orderType"]').forEach(r=>r.onchange=()=>{document.querySelectorAll(".choice").forEach(c=>c.classList.remove("active"));r.closest(".choice").classList.add("active");const d=r.value==="Delivery",a=document.querySelector("#address");a.required=d;a.disabled=!d;if(!d)a.value=""});
const now=new Date(),local=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);document.querySelector("#date").min=local;document.querySelector("#date").value=local;
document.querySelector("#orderForm").onsubmit=e=>{
 e.preventDefault();if(!cart.length){alert("Please add at least one item.");return}
 const f=new FormData(e.target),type=f.get("orderType"),lines=cart.map(i=>`• ${i.name} × ${i.qty} — ₹${i.price*i.qty}`).join("\n"),total=cart.reduce((s,i)=>s+i.price*i.qty,0);
 const msg=`*NEW ORDER — BAG OF CRISPS* 🍟\n\n*Order Type:* ${type}\n\n*Items:*\n${lines}\n\n*Items Total:* ₹${total}\n\n*Customer Details:*\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nAddress: ${type==="Delivery"?f.get("address"):"Self Pickup"}\nLandmark: ${f.get("landmark")||"—"}\nDate: ${f.get("date")}\nTime: ${f.get("time")}\nNotes: ${f.get("notes")||"—"}\n\n_Please confirm final bill & delivery charges._`;
 window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank");
};
renderCats();renderMenu();renderCart();
