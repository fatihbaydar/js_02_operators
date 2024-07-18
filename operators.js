
/* ---------------------------------- */
/*              OPERATORS             */
/* ---------------------------------- */

// Aritmetik operatörler

let a = 10
let b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); // üs alma
console.log(a % b); // mod alma - kalan bulma

//saat ve dakika bulma

let sure = 375;
let saat = Math.trunc(375 / 60);
console.log(saat);

let dakika = 375 % 60
console.log(dakika);

let zaman = 450 / 60
console.log(Math.trunc(zaman));

console.log(`375 dakika ${saat} saat ${dakika} dakikadır.`);

let result = 375 / 6
console.log(Math.trunc(result));

/* ---------------------------------- */
/*        INCREMENT / DECREMENT       */
/* ---------------------------------- */

//post ve pre

console.clear()

//post increment

let x = 5
console.log(x++);
console.log(x);
console.log("*********");
console.log(x--);
console.log(x);

//pre decrement

let y = 8
console.log(y);
console.log(++y);
console.log(y);
console.log(++y);
console.log(y);

/* ---------------------------------- */
/*        AASIGNMENT OPERATORS        */
/* ---------------------------------- */

console.clear();
let tasiyici = "atanmis cumle"

let t = 4
let u = 6

// t = u
console.log(t);

console.log(t=t+u);
console.log(t+=u);
console.log(t-=u);
console.log(t*=u);
console.log(t/=u);
console.log(t**=u);
console.log(t%=u);

let w = false
let q = 1
console.log(w||q);

/* ---------------------------------- */
/*        COMPARASION OPERATORS       */
/* ---------------------------------- */
console.clear();
//karşılaştırma operatörleri boolean değer döndürür
let c = 2
let d = "2"

console.log(typeof c);
console.log(typeof d);

console.log("c, d ye deger olarak esit mi?",c == d);
console.log("c, d ye deger ve veri tipi olarak esit mi?",c === d);

console.log(c!=d); // eşit mi değil mi? - false 2 2 ye eşit
console.log(c!==d); // eşit değil mi - true biri string diğeri number olduğu için

console.log(6<7);
console.log(7>6);
console.log(55>=55);
console.log(10<=9);




/* ---------------------------------- */
/*          LOGICAL OPERATORS         */
/* ---------------------------------- */
console.clear();
console.log("5" + 3)
console.log("55" < 56 && 67 === "67" || 253 % 11 && !false);
console.log(Boolean(253 % 11));
console.log(253 % 11 && !false);

//AND 
console.log(Boolean("Merhaba"));
console.log(Boolean(6));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean([]));

// null, undefined, 0, "", (), Nan, false, -0

console.log("elma"&& "armut"&& "çilek"&& "kayısı"); // hepsi true ise en son true yu alır
console.log("elma"&& "armut"&& 0 && "çilek"&& "kayısı");
console.log("elma"&& "armut"&& 0 && "çilek"&& "" && "kayısı");// falseu görünce onu yazar kodun kalanını okumaz.

// OR || bir tanne true olsa bile true döndürür ve o true değeri ekrana yazar
// hepsi false ise en son false döndürür ve son falseu ekrana yansıtır
console.log(false|| false|| true||false);
console.log(false|| false|| "tr"||false||true);
console.log(45|| "aka"|| "tr"||[]||true);
console.log(0 || "" || false || undefined || NaN);

console.log(null);
console.log(!NaN);
console.log(!0);
