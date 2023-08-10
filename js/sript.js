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
]

mainDiv = document.createElement("div");
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
    })

    plusButton.addEventListener("click", ()=>{
        j += 1;
        counter.textContent = j;
    })

    minusButton.addEventListener("click", ()=>{
        if (j - 1 < 1) {
            counter.classList.add("mainButtons");
            addButton.classList.remove("mainButtons");
            plusButton.classList.add("mainButtons");
            minusButton.classList.add("mainButtons");
        }
        else {
            j -= 1;
            counter.textContent = j;
        }
    })
}

let orderButton = document.createElement("button");
orderButton.id = "order";
orderButton.className = "orderButton";
orderButton.textContent = "Order";
mainDiv.appendChild(orderButton);
