function c2f(celcious) {
    let far = (celcious * (9 / 5) + 32);
    let far2 = far.toFixed(2);
    return far2;
}


let myCel = 33;
console.log('my Fahrenheit is', c2f(myCel));

let hisCel = 37;
console.log('his Fahrenheit is', c2f(hisCel));