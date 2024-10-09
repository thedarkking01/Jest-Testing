const fetchPromise = require('./promise');
// test('the data is peanut butter', () => { 
//     return expect(fetchPromise()).resolves.toBe('peanut butter');
//  })

// test('the fetch fails with error', () => { 
//     return expect(fetchPromise()).rejects.toThrow('Failed to fetch data');
//  })

test('the data is peanut butter', async() => { 
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
 })