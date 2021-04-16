console.log('1. összegzés tétele');

let tomb = [1, 1, 1, 1];
let osszeg = 0;

// a for cikluson belül csinálunk egy lokális változót (i) és azt használjuk
// arra hogy tároljuk az aktuális index értékét. az i értéke minden ciklusban 
// növekszik 1-el (i++)
for (let i=0; i<tomb.length; i++) {
  osszeg = osszeg + tomb[i];
}

console.log('a tomb elemeinek osszege: '+osszeg);

console.log('2. lineáris keresés');
let x = [ 4, 6, 5, 2, 3 ];
let van = false;
let i = 0;
while (i < x.length && x[i] !== 3 ) {
  i = i + 1;
}
if (i < x.length) {
  van = true;
}
console.log(' van találat: '+van);
let sorsz = 0;
if (van) {
  sorsz = i+1;
}
console.log('a(z)'+sorsz+'-ik elem a 3-as');


console.log('3. Megszámlálás tétele');
let scores = [2,4,1];
let db = 0;
for (let i=0; i<scores.length; i++) {
  if (scores[i] % 2 === 0) {
    db = db + 1;
  }
}
console.log(db+' darab páros szám van a scores tömbben');


console.log('3. Maximum kiválasztás tétele');

let y = [4, 2, 9, 10, 3, 5];
let max = 0;
for (let i=1; i<y.length; i++) {
  if (y[i] > y[max]) {
    max = i;
  }
}
console.log('a legnagyobb elem az y tömbben: '+y[max]);

console.log('4. Buborék rendezés');

let buborek = [5, 7, 2, 9, 3];
console.log('a tomb rendezettlenul: '+buborek);

for (let i = buborek.length; i > 1; i--) {
  for (let j = 0; j < i-1; j++) {
    if (buborek[j] > buborek[j+1]) {
      let c = buborek[j];
      buborek[j] = buborek[j+1];
      buborek[j+1] = c;
    }
  }
}
console.log('a tomb rendezetten: '+buborek);


console.log('5. Minimumkiválasztásos rendezés');
let z = [1, 9, 2, 10, 3];
console.log('a tomb rendezettlenul: '+z);
for (let i = 0; i<(z.length -1); i++) {
  let min = i;
  for ( j = (i+1); j < z.length; j++ ) {
    if (z[min] > z[j]) {
      min = j;
    }
  }
  c = z[i];
  z[i] = z[min];
  z[min] = c;
}

console.log('a tomb rendezetten: '+z);


console.log('6. Faktoriális számítása rekurzívan');

function fakt(n) {
  if (n === 0) {
    return 1;
  } else {
    return (n * fakt(n - 1));
  }
}

console.log('4! = '+fakt(4));
