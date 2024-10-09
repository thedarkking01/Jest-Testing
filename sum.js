// function sum(a,b) {
//     return a + b;
// }
// module.exports =sum;

// function myFunction(input) {
//     if (typeof input!=='number') {
//         throw new Error('Input must be a number');
//     }
// };
// module.exports = myFunction;

function fetchData(callback) {
    setTimeout(()=>{
        callback('Peanut butter');
    },1000);
}
module.exports = fetchData;