/*Object Practice*/

let storeArr = [];

let item1 = { name: "Boat",
                model: "x-3",
                cost: 27000,
                quantity: 1

};

let item2 = { name: "Car",
    model: "Mazda3",
    cost: 10000,
    quantity: 2

};

let item3 = { name: "Plane",
    model: "JT-Fighter Jet",
    cost: 27000,
    quantity: 5

};


storeArr.push(item1, item2, item3);

storeArr[1].model = "Hummer";

console.log(storeArr[1].model);
console.log(storeArr[0].cost);