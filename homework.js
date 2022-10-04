let myFirstName = "Damian ";
let myLastName = "Olszewski";
console.log("hello! My name is " + myFirstName + myLastName);
let myAge = 27;
let thisYear = 2022;
let birthYear = thisYear - myAge;
console.log("Year of my birth: " + birthYear);

//Extra
let ingrSpaghetti = 400;
let ingrGuanciale = 250;
let ingrVeryFreshEggYolks = 6;
let ingrAgedGratedPecorinoRomanoCheese = 50;
let ingrBlackPepper = 4;
let ingrSalt = 0.3;
ingrVeryFreshEggYolks = ingrVeryFreshEggYolks * 18;

console.log("Mix cheese with egg yolks.");
console.log("Cook pasta.");

let sauce = ingrVeryFreshEggYolks + ingrAgedGratedPecorinoRomanoCheese;

console.log("Weight of sauce: ", sauce, "gm");
console.log("Cook pasta in salted water");

let cookedSpaghetti = ingrSpaghetti * 1.8 + ingrSalt;
console.log("Weight of cooked spaghetti:", cookedSpaghetti, "gm");
console.log("Fry sliced guanciale in a pan");
console.log(
  "Gently add cooked spaghetti in pan with guanciale and add sauce with pepper"
);
let pasta = cookedSpaghetti + sauce + ingrBlackPepper + ingrGuanciale;
console.log("Weight of ready pasta is: ", pasta, " gm");
