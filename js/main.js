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

console.log(filterRange([17, 4, 23, 33, 6, 2, 102, 44, 6], 40, 10));

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