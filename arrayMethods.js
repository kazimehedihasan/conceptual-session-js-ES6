//  forEach, map, Find, Filter, // Reduce



const arrb = [1, 2, 3];
for (let item of arrb) {
    console.log('prothom loop',item);
}

for (let i = 0; i<arrb.length; i++) {
    console.log(arrb[i]);
}


// ES6 ----- methods // ForEach
const arr1 = [1, 2, 3];
const ab = (y) => console.log('number',y);
arr1.forEach(ab)

arr1.forEach((y) => console.log('number',y));


// ----------
const fruits = ['mango', 'bango', 'tengo', 'vango'];
fruits.forEach(fruit => console.log('fruits',fruit))

// ----- math 

const arra = [45, 77, 85, 6, 8, 8];
let sum = 0;
arra.forEach(Number => {
    sum += Number;
})
console.log(sum);


// --------------------MAP------------------------
const a = [45, 77, 85, 8];
a.map((math) => {
    console.log(math);
} )


const fore = [1, 2, 3, 4];
const kas = fore.forEach((array1) => array1)
console.log(kas);


const fores = [1, 2, 3, 4];
const kass = fores.map((array11) => array11*7)
console.log(kass);
console.log(fores);



const fruits1 = ['mango', 'bengo', 'chango', 'dengo', 'pengo'];
fruits1.forEach((totalName, a, s) => console.log(totalName, a, ))



// ----------------- faind - methods--------------

const fruits2 = ['mango', 'bengo', 'chango', 'dengo', 'pengo'];

const Find = (fruits2) => {
    for (const kazi of fruits2) {
        if (kazi === 'bengo') {
            return kazi
        }
    }
    return null;
}
const ll = Find(fruits2)
console.log(ll);

// ES6
const fruits3 = ['mango', 'bengo', 'chango', 'dengo', 'pengo' , 'bengo'];
const xy = fruits3.find((ss) => ss === 'bengo');
console.log(xy);



//  ------------------filter -----------------------


// const Numbers1 = [1, 4, 5, 85, 9, 20, 54, 44, 2];
const Numbers1 = [1, , 5, 85, 9, , , , ];

const filter = Numbers1 => {
    const result = [];

    for (const fel of Numbers1) {
        if (fel%2 === 0) {
            result.push(fel)
        }
    }
    return result;
}
console.log(filter(Numbers1));



//    ES6   -----------

// const Numbers3 = [1, 4, 5, 85, 9, 20, 54, 44, 2];
const Numbers3 = [1, , 5, 85, 9, , , , ];
const xa = Numbers3.filter((puk) => puk%2 === 0);
console.log(xa);



// -------------------   Reduce  --------------------
// const arr5 = [1, 2, 3, 4, 5, 6];
/*
previous + current + result 
0        +     1     =   1
1        +     2     =   3
3        +     3     =   6
6        +     4     =   10
10       +     5     =   15
15       +     6     =   21
*/ 


const arr5 = [1, 2, 3, 4, 5, 6];
const totalResult = arr5.reduce((previous, current) => previous + current, 0 );
console.log(totalResult);



//      GUN KORA
// const arr5 = [1, 2, 3, 4, 5, 6];
/*
previous * current = result 
1        *     1     =   1
1        *     2     =   2
2        *     3     =   6
6        *     4     =   24
24       *     5     =   120
120      *     6     =   720
*/ 


const arr6 = [1, 2, 3, 4, 5, 6];
const totalResult1 = arr5.reduce((previous, current) => previous * current, );
console.log(totalResult1);


