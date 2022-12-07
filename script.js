let Arry = [['black shoes',200],['white shoes',300],['nike shoes',400]];
let overAllPrice=0;
let newArry = [];

function buyShoes1() {
    overAllPrice = overAllPrice +200;
    newArry.push(Arry[0]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv)
    }
    newArry.forEach(check);
}

function buyShoes2() {
    overAllPrice = overAllPrice + 300;
    newArry.push(Arry[1]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv);

    }
    newArry.forEach(check);
}
function buyShoes3() {
    overAllPrice = overAllPrice + 400;
    newArry.push(Arry[2]);
    document.getElementById('cart').innerHTML='';
    function check(x) {
        let newDiv = document.createElement('div');
        let textNode = document.createTextNode(x);
        newDiv.appendChild(textNode);
        document.getElementById('cart').appendChild(newDiv);

    }
    newArry.forEach(check);
}
function removeShoes1(){
    overAllPrice = overAllPrice - 200;
    document.getElementById('cart').innerHTML='';
    let Tshert1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Tshert1 ==false) {
            if (newArry[i].includes('black shoes')) {
                newArry.splice(i,1);
                Tshert1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}

function removeShoes2(){
    overAllPrice = overAllPrice - 300;
    document.getElementById('cart').innerHTML='';
    let Jeans1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Jeans1 ==false) {
            if (newArry[i].includes('white shoes')) {
                newArry.splice(i,1);
                Jeans1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}
function removeShoes3(){
    overAllPrice = overAllPrice - 400;
    document.getElementById('cart').innerHTML='';
    let Shoes1 = false;
    for (let i = 0;i<newArry.length; i++) {
        if (Shoes1 ==false) {
            if (newArry[i].includes('nike shoes')) {
                newArry.splice(i,1);
                Shoes1 = true;
            }
        }
}
function check(x) {
    let newDiv = document.createElement('div');
    let textNode = document.createTextNode(x);
    newDiv.appendChild(textNode);
    document.getElementById('cart').appendChild(newDiv);
}
newArry.forEach(check);
}
console.log(newArry);   

let newDivv = document.createElement('div');
let textNodee = document.createTextNode('you cart is:' + overAllPrice);
newDivv.appendChild(textNodee);
document.body.appendChild(newDivv);

console.log(overAllPrice);

