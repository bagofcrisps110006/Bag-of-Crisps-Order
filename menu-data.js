const MENU_DATA=[
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
["Chicken Tenders Salad",{"Chicken":160},"Fresh lettuce, crunchy veggies and chicken"]]],
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
const EXTRAS=[{id:'extra-cheese',name:'Extra Cheese',price:15},{id:'dip',name:'Dip',price:20}];
