// function add(x, y) {
//     const result = x + y;
//     return result
// }
// console.log(add(5, 6));

// function word() {
//     console.log('hello world');
// }
// word()

// function printNumber(x) {
//     console.log('value is', x);
// }
// printNumber(45)


// ES6 ----------
// 1
const add = (x, y) => {
    const result = x + y;
    return result
}
console.log(add(2, 3));


// 2
const add1 = (x, y) => x + y
console.log(add1(4, 5));

// 3
const show = () => {
    console.log('hello');
}
show()


// 4
const showNumber = x => console.log(x);
showNumber(44)