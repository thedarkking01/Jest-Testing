test('mock implementation of a basic function', () => { 
    const mock=jest.fn(x=>42+x);
    expect(mock(10)).toBe(52);
    expect(mock).toHaveBeenCalledWith(10); 
 })