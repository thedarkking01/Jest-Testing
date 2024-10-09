// const sum = require('./sum');
// test('adds 1 +2 to equal 3', () => { 
//     expect(sum(1, 2)).toBe(3);
//  });

const fetchData = require("./sum");


// test for true and false
// test('one is truthy', () => { 
//     const n=1;
//     expect(n).toBeTruthy();
//  })


// test('null is falsy', () => { 
//     const n=null;
//     expect(n).toBeFalsy();
//  })


// test for toThrow

// const myFunction =require('./sum');
// test('throws on invalid input ', () => { 
//     expect(() =>{
//         myFunction('sourabh');
//     }).toThrow();
//  })



// AsyncTest 


test('The data is peanut butter', done => { 
    function callback(data) {
        try{
            expect(data).toBe('Peanut butter');
            done();
        }catch(err){
            done(err);
    }
    
 }
 fetchData(callback);
});