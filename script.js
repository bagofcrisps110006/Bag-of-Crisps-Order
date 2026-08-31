const WA="919582379369";
const menuData=[
{cat:"Momos",note:"All momo varieties are served in 8 pieces per plate",variants:[
["Steamed Momo",{Veg:110,Chicken:130,Paneer:130},"Steamed, straight from the steamer"],
["Fried Momo",{Veg:120,Chicken:140,Paneer:140},"Deep-fried perfection served hot & spicy"],
["Pan-Fried Momo",{Veg:120,Chicken:140,Paneer:140},"Tawa-tossed momos with masala flavor"],
["Crumbly Momo",{Veg:140,Chicken:150,Paneer:150},"Light, crispy crumbs with a juicy surprise"],
["Tandoori Momo",{Chicken:160,Paneer:160},"Smoky, spicy, straight from the tandoor"],
["Chilly Momo",{Chicken:160,Paneer:160},"Chilli momos — fiery, saucy, irresistible"],
["Cheese Baked Momo",{Chicken:170,Paneer:170},"Indulge in the ultimate cheese-loaded momos"],
["Afghani Momo",{Chicken:170,Paneer:170},"Subtle spice, creamy delight in every bite"],
["Makhni Momo",{Chicken:180,Paneer:180},"A perfect blend of buttery richness and bold flavors"]]},
{cat:"Toasts & Wraps",items:[
["Cheesy Toasties",100,"Five toasts, perfectly layered with melted cheese"],
["Corn & Cheese Toasties",110,"Golden toasts loaded with corn, cheesy goodness"],
["Veggie Toasties",120,"Crunchy, colorful, and full of flavor"],
["Spicy Paneer Wrap",120,"Soft paneer patty, fiery spices, and a wrap that hits hard"],
["Chicken Strips Wrap",120,"This wrap doesn't hold back on flavor"],
["Grilled Chicken Wrap",120,"Juicy grilled chicken wrapped with fresh, bold flavors"],
["Golden Fish Wrap",130,"Crispy fish wrapped with creamy tartar and fresh crunch"]],note:"Add cheese slice in wraps @ ₹15"},
{cat:"Salads",items:[
["Veg Salad",120,"A refreshing mix of lettuce, cherry tomatoes, cucumber, purple cabbage, olives & bell peppers — light, crunchy, and full of flavor"],
["Chicken Salad",150,"A wholesome bowl of fresh lettuce, crunchy veggies, and juicy chicken — light, nutritious, and full of flavor"],
["Chicken Caesar Salad",160,"A wholesome bowl of fresh lettuce, crunchy veggies, and crunchy chicken — light, nutritious, and full of flavor"]]},
{cat:"Pasta",items:[
["Alfredo Pasta",110,"Silky smooth Alfredo sauce wrapped around perfectly cooked pasta", "Chicken",140],
["Arrabiata Pasta",110,"The perfect balance of heat and tangy goodness","Chicken",140],
["Pink Sauce Pasta",110,"A delightful fusion of creamy Alfredo and tangy tomato sauce","Chicken",140],
["Mac & Cheese",130,"A timeless comfort dish elevated with premium cheese","Chicken",160]],hasChicken:true},
{cat:"Burgers",items:[
["Aloo Tikki Burger",60,"A wholesome bite full of desi goodness"],
["Loaded Veggie Burger",70,"A hearty veggie patty stacked with fresh veggies and sauces"],
["Minced Chicken Burger",80,"Succulent minced chicken patty seasoned to perfection in a bun"],
["Grilled Chicken Burger",90,"Juicy grilled chicken patty layered with refreshing mint sauce and crisp onions"],
["Chicken Shawarma Burger",90,"Loaded with smoky shawarma chicken and creamy sauces"],
["Crunchy Chicken Burger",90,"Double strips, double crunch, double satisfaction"],
["Golden Fish Burger",90,"Golden fried fish fillet tucked in a soft steamed bun with creamy tartar and spicy jalapeños"],
["Spicy Paneer Burger",90,"Soft paneer infused with bold flavors and a fiery kick"]]},
{cat:"Drinks & Dessert",items:[
["Choco Lava Cupcake",40],
["Fruit Curd (Blueberry/Strawberry/Mango)",60],
["Mocktails (Seasonal)",80,"Virgin/Ginger-Ale/Green Apple/Peach/Blueberry/Strawberry"],
["Cold Coffee",90],
["Milkshake (Banana/Strawberry/Chocolate/Mango/Peanut-butter)",110],
["Smoothies (Blueberry/Strawberry/Mango/Peanut-butter)",120],
["Cold Drink",null,"M.R.P."]]},
{cat:"Quick Bites",items:[
["Veggie Noodles (Maggi Style)",50],["Salsa Nachos",60],["Potato Wedges",90],["Veg Spring Rolls (5 pcs)",110],
["Chicken Spring Rolls (5 pcs)",130],["Veg Pizza Pocket (5 pcs)",130],["Aloo Matar Samosi (6 pcs)",100],["Cheesy Pizza Rolls (6 pcs)",140],
["Chicken Samosi (8 pcs)",130],["Chicken Nuggets (8 pcs)",130],["Chicken Cheesy Balls (8 pcs)",130],["Chicken Fries (15 pcs)",130],
["Chicken Tenders (6 pcs)",140],["Fish Strips (6 pcs)",140],["Crumbly Prawns (8 pcs)",150]]},
{cat:"Fries",items:[
["Salted Fries",70,"The OG fries you can't resist"],["Peri-Peri Fries",80,"Fries with a fiery kick of peri peri"],
["Chilly Lemon Fries",80,"Tangy on the tongue, spicy in every bite"],["Veg Loaded Fries",130,"A colorful burst of flavor on crispy fries"],
["Chicken Loaded Fries",160,"Crispy fries topped with juicy chicken balls"]]},
{cat:"Chinese / Korean",items:[
["Veg Chowmein",140,"Wok-tossed perfection in every bite"],["Chicken Chowmein",160,"Wok-tossed chicken chowmein, full of flavor"],
["Chilli Potato",140,"Indulge in the rich, sticky, flavorful goodness"],["Honey Chilli Potato",160,"A glossy mix of sweetness and heat"],
["Chilli Chicken Balls",160,"Juicy chicken balls tossed in fiery chilli sauce"],["Chicken Korean Strips",160,"Chicken breast strips coated in Korean sauce"],
["Chilli Paneer",170,"Paneer cubes coated in saucy goodness"]]},
{cat:"Pav & Parotta",items:[
["Vada Pav",50,"Crispy vada, soft pav, and that perfect chutney kick"],
["Chicken Galauti Kabab Bun",80,"Soft kabab, spicy attitude"],
["Chicken Galauti Kabab Roll",100,"Melt-in-the-mouth galauti wrapped in a roll of pure indulgence"],
["Chilly Paneer Roll",120,"Spicy chilly paneer wrapped in a roll that hits all the right notes"]]}
];

let cart=[];
const menuEl=document.querySelector("#menu"), search=document.querySelector("#search");

function money(v){return v==null?"MRP":"₹"+v}
function renderMenu(filter=""){
  menuEl.innerHTML="";
  let shown=0;
  menuData.forEach((sec,si)=>{
    const matches=(sec.items||sec.variants).filter(x=>{
      const s=JSON.stringify(x).toLowerCase();
      return !filter || s.includes(filter.toLowerCase()) || sec.cat.toLowerCase().includes(filter.toLowerCase());
    });
    if(!matches.length)return;
    shown+=matches.length;
    const section=document.createElement("section"); section.className="category";
    section.innerHTML=`<h2>${sec.cat}</h2><div class="items"></div>${sec.note?`<p class="desc" style="margin:8px 2px">${sec.note}</p>`:""}`;
    const grid=section.querySelector(".items");
    matches.forEach((x)=>{
      let card=document.createElement("article"); card.className="item";
      if(sec.variants){
        const [name,prices,desc]=x;
        const opts=Object.keys(prices).map(v=>`<option value="${v}">${v} — ₹${prices[v]}</option>`).join("");
        card.innerHTML=`<div class="item-top"><h3>${name}</h3><span class="price" id="p"></span></div><p class="desc">${desc}</p><div class="controls"><select class="select">${opts}</select><button class="add">Add</button></div>`;
        const sel=card.querySelector("select"), p=card.querySelector("#p");
        const sync=()=>p.textContent=money(prices[sel.value]);
        sync(); sel.onchange=sync;
        card.querySelector(".add").onclick=()=>addCart(name+" ("+sel.value+")",prices[sel.value]);
      } else {
        const [name,vegPrice,desc,chickenLabel,chickenPrice]=x;
        let controls="";
        let shownPrice=vegPrice;
        if(chickenLabel&&chickenPrice){
          controls=`<select class="select"><option value="Veg">Veg — ₹${vegPrice}</option><option value="${chickenLabel}">${chickenLabel} — ₹${chickenPrice}</option></select>`;
        }
        const cheese=sec.cat==="Toasts & Wraps" && /Wrap$/.test(name) ? `<label style="font-size:12px;font-weight:700"><input type="checkbox" class="cheese"> Extra cheese +₹15</label>`:"";
        card.innerHTML=`<div class="item-top"><h3>${name}</h3><span class="price">${money(shownPrice)}</span></div>${desc?`<p class="desc">${desc}</p>`:""}<div class="controls">${controls}${cheese}<button class="add">Add</button></div>`;
        const sel=card.querySelector("select"), p=card.querySelector(".price"), cheeseBox=card.querySelector(".cheese");
        if(sel){sel.onchange=()=>{p.textContent=sel.value==="Veg"?money(vegPrice):money(chickenPrice)}}
        card.querySelector(".add").onclick=()=>{
          const variant=sel?` (${sel.value})`:"";
          const extra=cheeseBox&&cheeseBox.checked?15:0;
          addCart(name+variant+(extra?" + Extra cheese":""), (sel&&sel.value!=="Veg"?chickenPrice:vegPrice)||0, extra);
        };
      }
      grid.appendChild(card);
    });
    menuEl.appendChild(section);
  });
  if(!shown) menuEl.innerHTML=`<div class="no-results">No menu item found for “${filter}”.</div>`;
}
function addCart(name,price,extra=0){
  const total=price+extra, key=name+"|"+total;
  const found=cart.find(i=>i.key===key);
  if(found)found.qty++; else cart.push({key,name,price:total,qty:1});
  renderCart(); document.querySelector(".cart-section").scrollIntoView({behavior:"smooth",block:"nearest"});
}
function change(key,d){
  const i=cart.findIndex(x=>x.key===key); if(i<0)return;
  cart[i].qty+=d; if(cart[i].qty<=0)cart.splice(i,1); renderCart();
}
function renderCart(){
  const el=document.querySelector("#cart"), empty=document.querySelector("#cartEmpty");
  el.innerHTML=""; empty.style.display=cart.length?"none":"block";
  let total=0;
  cart.forEach(i=>{total+=i.price*i.qty;
    const row=document.createElement("div");row.className="cart-row";
    row.innerHTML=`<div><div class="cart-name">${i.name}</div><div class="cart-sub">₹${i.price} each</div></div><div class="qty"><button type="button">−</button><b>${i.qty}</b><button type="button">+</button></div><strong class="cart-price">₹${i.price*i.qty}</strong>`;
    row.querySelectorAll("button")[0].onclick=()=>change(i.key,-1);row.querySelectorAll("button")[1].onclick=()=>change(i.key,1);
    el.appendChild(row);
  });
  document.querySelector("#cartTotal").textContent="₹"+total;
}
document.querySelector("#clearCart").onclick=()=>{cart=[];renderCart()};
search.oninput=e=>renderMenu(e.target.value.trim());
document.querySelectorAll('input[name="orderType"]').forEach(r=>r.onchange=()=>{
  document.querySelectorAll(".choice").forEach(c=>c.classList.remove("active"));r.closest(".choice").classList.add("active");
  const delivery=r.value==="Delivery", a=document.querySelector("#address");a.required=delivery;a.disabled=!delivery;if(!delivery)a.value="";
});
const today=new Date(); const local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.querySelector("#date").min=local; document.querySelector("#date").value=local;
document.querySelector("#orderForm").onsubmit=e=>{
  e.preventDefault();
  if(!cart.length){alert("Please add at least one item to your order.");return;}
  const f=new FormData(e.target), type=f.get("orderType");
  const lines=cart.map(i=>`• ${i.name} × ${i.qty} — ₹${i.price*i.qty}`).join("\n");
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const msg=`*NEW ORDER — BAG OF CRISPS* 🍟\n\n*Order Type:* ${type}\n\n*Items:*\n${lines}\n\n*Items Total:* ₹${total}\n\n*Customer Details:*\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nAddress: ${type==="Delivery"?f.get("address"):"Self Pickup"}\nLandmark: ${f.get("landmark")||"—"}\nDate: ${f.get("date")}\nTime: ${f.get("time")}\nNotes: ${f.get("notes")||"—"}\n\n_Please confirm final bill & delivery charges._`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank");
};
renderMenu(); renderCart();
