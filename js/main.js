camelize("my-short-string");
camelize("list-style-image");
camelize("background-color");
camelize("-webkit-transition");

// changes dash-separated words in to camel-case
function camelize(str) {
    let word = str.split('-');
    let ret = word.map((w, index) => index == 0 ? w : w[0].toUpperCase() + w.slice(1));
    //str = arr.join();
    console.log(ret.join(''));
}

let fArr = [17, 4, 23, 33, 6, 2, 102, 44, 6];
console.log(fArr);
console.log(filterRange(fArr, 40, 10));

// looks for elements with values higher or equal to a AND
// lower or equal to b
// returns a result as an array
function filterRange(arr, a, b) {
    let ret = [];
    arr.forEach(element => {
        if (element >= a || element <= b) {
            ret.push(element);
        }
    });
    return ret;
}

let frArr = [5, 3, 8, 1];
console.log(frArr);
console.log(filterRangeInPlace(frArr, 1, 4));

// takes an array and removes all values except ones that are
// between (includes equal to) a and b - returns array 
// with those values
function filterRangeInPlace(arr, a, b) {
    return ( arr.filter(item => (a <= item && item <=  b)) );
}

let decArr = [34, 66, 11, 3, 74, 8, 10];
console.log(decArr);
console.log(sortInDecreasingOrder(decArr));

// takes an array and returns array sorted in decreasing order
function sortInDecreasingOrder(arr) {
    return arr.sort((a, b) => b - a);
}

let sortArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(sortArr);
console.log(sortArr);
console.log(sorted);

// returns a sorted copy of an arry (original array is untouched)
function copySorted (arr) {
    let ret = arr.slice().sort();
    return ret;
}

let calc = new Calculator;
console.log(calc.calculate("3 + 7"));

// creating an extendable calculator


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a,b) => a * b);
powerCalc.addMethod("/", (a,b) => a / b);
powerCalc.addMethod("**", (a,b) => a ** b);

console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate("12 * 12"));
console.log(powerCalc.calculate("12 / 4"));

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0];
        op = split[1];
        b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}