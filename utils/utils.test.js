const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
   it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
   });

   it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
         expect(sum).toBe(7).toBeA('number');
         done();
      });
   });

   it('should square a number', () => {
      var res = utils.square(5);

      expect(res).toBe(25).toBeA('number');
   });

   it('should async square a number', (done) => {
      utils.asyncSquare(3, (square) => {
         expect(square).toBe(9).toBeA('number');
         done();
      });
   });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set first and last names', () => {
   var user = {
      age: 28,
      location: 'Los Angeles'
   };
   var res = utils.setName(user, 'Brent Mercado');

   expect(res).toInclude({
      firstName: 'Brent',
      lastName: 'Mercado'
   });
});


// it('should expect some values', () => {
//    // expect(12).toNotBe(12);
//    // expect({name: 'Brent'}).toNotEqual({name: 'Bren'});
//    // expect([2,3,4]).toExclude(1);
//    expect({
//       name: 'Brent',
//       age: 28,
//       location: "LA"
//    }).toExclude({
//       age: 23
//    });
// });
