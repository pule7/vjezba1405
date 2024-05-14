var x = "neka vrijednost";

function vratiNesto() {
    var x = "lokalna varijabla";
    function f() {
        return x; 
    };
    return f;
}

var y = vratiNesto()();

console.log(y);

/*od funkcije u prvom zadatku stvorite samopozivajucu funksicju koja prima parametar "name" */
/*Kreirajte globalnu varijablu koja tu funkciju koristi i zadaje joj vrijednost */

var x = "John Doe";
function vratiNesto(name) {
    var x = name;
    function f() {
        return x;
    }
    return f;
}

var y = vratiNesto("Jane Doe");
console.log(y); // -- y je psotao funkcija

var z = vratiNesto()(); // -- z = undefined
console.log(z);

z = vratiNesto("test")();
console.log(z);

// 2.
console.log("---------");

var name1 = "Moje ime";

(function vratiNesto2(name1) {
    console.log("invoked vratinesto2(" + name1 + ") ");
    var x = name1;
    function f() {
        console.log("invoked f()");
        return x;
    }
    return f;
}) (name1);

var person = {
    name: "John",
    surname: "Doe",
};

console.log(person);

var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

const quotes = [
    "Im going to my friends.Im going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin."
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

// prototip prototipa == null
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

// constructor Osoba

function Osoba() {
    (this.ime = "Ana"), (this.godine = 25);
}

var osoba1 = new Osoba();
console.log("Osoba1 => ime:" + osoba1.ime + "; ima godina: " + osoba1.godine);

Osoba.prototype.spol = "Žensko";

console.log(
    "Osoba1 => ime:" +
    osoba1.ime + 
    "; ima godina: " +
    osoba1.godine + 
    "; spol: " + 
    osoba1.spol 
);

var osoba2 = new Osoba();
osoba2.brojCipela = 36;
osoba2.godine = 35;
osoba2.ime = "Marko";
osoba2.spol = "Muški";
osoba2.pozdrav = function () {
    return "Ćao"
};
console.log(
    "Osoba2 => ime:" +
    osoba2.ime + 
    "; ima godina: " +
    osoba2.godine + 
    "; spol: " + 
    osoba2.spol +
    "; pozdrav: " +
    osoba2.pozdrav()
)