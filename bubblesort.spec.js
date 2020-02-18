
describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(helpers, 'swap').and.callThrough();
  });
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts 1-5', () => {
    expect( bubbleSort([1,2,4,3,5])).toEqual([1,2,3,4,5]);
    expect(helpers.swap.calls.count()).toEqual(1);
  });

  it('doesn\'t change sorted array', () => {
    expect( bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });

  it('sorts array in reverse order', () => {
    expect( bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
  });
});
