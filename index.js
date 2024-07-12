//30:27

// function insertDashes(str){

// }

// //Test 
// describe('insertDashes()', () => {
//     it('insert dashes in between chars',() => {
//         //arrange
//         const value = "aba caba";

//         //act
//         const result = insertDashes(value);

//         //log
//         console.log(result);

//         //assert
//         expect(result).toBe("a-b-a c-a-b-a")
//     })
// })

// User.js
class User {

    constructor(data = {}) {
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
      this.middleName = data.middleName || '';
    }
  }
  

  


//Tests

describe(`${User.name} Class`,()=> {
    describe("Default values",()=>{
        it('first name defaults to empty',()=>{
            //Arrange
            const data = {firstName: null}
            //Act
            const model = new User(data);
            //Assert
            expect(model.firstName).toBe('');
           });
        
        it("last name defaults to empty",()=>{
            //Arrange
            const data = {lastName:null}
            //Act
            const model = new User(data);
            //Assert
            expect(model.lastName).toBe('');
        });
        
        it("middle name defaults to empty",()=>{
            //Arrange
            const data = {middleName:null};
            //Act
            const model = new User(data);
            //Assert
            expect(model.middleName).toBe('');
         });
    })
})



