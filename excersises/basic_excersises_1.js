// 1. készíts egy programot ami az alábbi tömbben eldönti 
// az összes elemről hogy osztható e kettővel vagy nem
// 
const nums = [3,4,9,6,2];

// a kettővel oszthatóság ellenőrzését maradékos osztással
// kell megnézni:
// 8 % 2 === 0 // true mert a maradék nulla
// 3 % 2 === 0 // false mert van maradék
//
//
// az eredményt így írd ki a képernyőre:
// 3: nem osztható
// 4: osztható
// 9: nem osztható
// 6: osztható
// 2: osztható


// 2. készíts egy programot ami kiirja a tömb összes elemét
// de úgy hogy az indexét is pl:
// ebből:
const players = ['Peter', 'Kate', 'John'];

// ezt írja ki:
// 0. Peter
// 1. Kate
// 3. John


// 3. készíts egy fügvényt ami megvizsgálja egy elem 
// összes tipusát, és kigyűjti őket egy új tömbbe.
// pl ebből a tömbből:

const x = ['', 4, true];
// egy ilyen tömböt hoz létre:

// [ 'string', 'number', 'boolean' ]

// Ehhez először hozz létre egy üres tömböt, és a .push 
// függvénnyel add hozzá a típusokat így:
// const test = 3;
// const a = [];
// a.push[typeof(test)]
