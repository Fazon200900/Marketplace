"use strict";

let products = [
    {
        name: "Burger",
        price: 4.99,
        path: "media/hamburger.jpg"
    },

    {
        name: "Hot Dog",
        price: 4.99,
        path: "media/hotDog.jpg"
    },

    {
        name: "French Friers",
        price: 1.75,
        path: "media/frenchFriers.jpg"
    },

    {
        name: "Milkshake",
        price: 2.60,
        path: "media/milkshake.jpg"
    },

    {
        name: "Burger",
        price: 4.99,
        path: "media/hamburger.jpg"
    },
];

let order = {};

let orderDiv = document.createElement("div");
orderDiv.id = "orderDiv";
orderDiv.classList.add("mainButtons");
document.body.appendChild(orderDiv);

let orderText = document.createElement("div");
orderText.textContent = "Order";
orderText.className = "orderText";
orderText.id = "orderText";
orderDiv.appendChild(orderText);

let checkDiv = document.createElement("div");
checkDiv.id = "checkDiv";
orderDiv.appendChild(checkDiv);

let table = document.createElement("table");
table.className = "table";
table.id = "table";
checkDiv.appendChild(table);

let count = 0;

function filltable() {
    document.getElementById("table").remove();
    
    let table = document.createElement("table");
    table.className = "table";
    table.id = "table";
    checkDiv.appendChild(table);

    let index = 0;

    for (let i of Object.keys(order)) {
        let tr = document.createElement("tr");
        tr.className = "checkTr";
        tr.id = `tr_${index}`;
        table.appendChild(tr);

        let nameTd = document.createElement("td");
        nameTd.classList.add("nameTd");
        nameTd.classList.add("td");
        nameTd.id = `nameTd_${index}`;
        nameTd.textContent = i.slice(0, i.lastIndexOf(" "));
        tr.appendChild(nameTd);

        let countTd = document.createElement("td");
        countTd.classList.add("countTd");
        countTd.classList.add("td");
        countTd.id = `countTd_${index}`;
        countTd.textContent = order[i];
        tr.appendChild(countTd);

        let priceTd = document.createElement("td");
        priceTd.classList.add("priceTd");
        priceTd.classList.add("td");
        priceTd.id = `priceTd_${index}`;
        priceTd.textContent = +i.slice(i.lastIndexOf(" ") + 2, i.length) * +countTd.textContent //.slice(title.textContent.lastIndexOf(" ")+1, title.textContent.length)
        count += +priceTd.textContent.slice(0, priceTd.textContent.length);
        tr.appendChild(priceTd);
    }
    let priceText = document.createElement("div");
    priceText.textContent = `Price: ${count}`;
    priceText.className = "priceText";
    priceText.id = "priceText";
    orderDiv.appendChild(priceText);
}



let mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";
document.body.appendChild(mainDiv);
for (let i = 0; i < products.length; i++) {
    let div = document.createElement("div");
    div.className = "itemDiv";
    div.id = i;
    mainDiv.appendChild(div);

    let counter = document.createElement("p");
    counter.id = `counter_${i}`;
    counter.classList.add("mainButtons");
    counter.classList.add("pCounter");
    div.appendChild(counter);

    let img = document.createElement("img");
    img.src = products[i].path
    img.id = `img_${i}`;
    div.appendChild(img);

    let title = document.createElement("p");
    title.id = `title_${i}`;
    title.textContent = `${products[i].name} $${products[i].price}`;
    title.classList.add("pTitle");
    div.appendChild(title);

    let addButton = document.createElement("button");
    addButton.id = `add_${i}`;
    addButton.className = "addButton";
    addButton.textContent = "Add";
    div.appendChild(addButton);

    let plusButton = document.createElement("button");
    plusButton.id = `plus_${i}`;
    plusButton.textContent = "+";
    plusButton.classList.add("mainButtons");
    plusButton.classList.add("plusButton");
    div.appendChild(plusButton);

    let minusButton = document.createElement("button");
    minusButton.id = `minus_${i}`;
    minusButton.textContent = "-";
    minusButton.classList.add("mainButtons");
    minusButton.classList.add("minusButton");
    div.appendChild(minusButton);

    let j = 1;

    addButton.addEventListener("click", ()=>{
        counter.classList.remove("mainButtons");
        counter.textContent = j;
        addButton.classList.add("mainButtons");
        plusButton.classList.remove("mainButtons");
        minusButton.classList.remove("mainButtons");
        order[title.textContent] = counter.textContent;
        console.log(order)
    })

    plusButton.addEventListener("click", ()=>{
        j += 1;
        counter.textContent = j;
        order[title.textContent] = counter.textContent;
        console.log(order)
    })

    minusButton.addEventListener("click", ()=>{
        if (j - 1 < 1) {
            counter.classList.add("mainButtons");
            addButton.classList.remove("mainButtons");
            plusButton.classList.add("mainButtons");
            minusButton.classList.add("mainButtons");
            delete order[title.textContent];
        }
        else {
            j -= 1;
            counter.textContent = j;
            order[title.textContent] = counter.textContent;
        }
    })
}

let orderButton = document.createElement("button");
orderButton.id = "orderButton";
orderButton.className = "orderButton";
orderButton.textContent = "Order";
orderButton.addEventListener("click", () => {
    orderDiv.classList.remove("mainButtons");
    document.getElementsByClassName("mainDiv")[0].classList.add("mainButtons");
    document.getElementsByClassName("mainDiv")[0].classList.remove("mainDiv");
    filltable();
    order["Price"] = count;
    console.log(order);
    tg.sendData(order);
});
mainDiv.appendChild(orderButton);

let tg = window.Telegram.WebApp;
let init = document.createElement("p");
document.body.appendChild(init);
init.textContent = tg.initDataUnsafe.user.first_name;
console.log(tg.initData);
