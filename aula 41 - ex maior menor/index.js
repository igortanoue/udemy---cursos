function max (x, y) {
    // if ( x > y) return x;
    // return y;
    return x > y ? x : y;
}
// arrow function
const max2 = (x,y) => x > y ? x : y;

console.log(max2(9,14))