function getFinalAmount(pr, r, t) {
    let a = (pr * (1 + (r * t)));
    return a;
}

let myPrincipal = 100000;
let myInterest = .07;
let myTime = 3;

let myFinalAmount = getFinalAmount(myPrincipal, myInterest, myTime);
console.log('my final amount is', myFinalAmount);

let herPrincipal = 140000;
let herInterest = .09;
let herTime = 2;

let herFinalAmount = getFinalAmount(herPrincipal, herInterest, herTime);
console.log('my final amount is', herFinalAmount);