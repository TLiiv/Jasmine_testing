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
    get fullName(){
      if(this.middleName.length > 0){
        return `${this.firstName} ${this.middleName[0]}. ${this.lastName}}`
      }
      return `${this.firstName} ${this.lastName}}`
    }
  }
  


  


//Tests

describe(`${User.name} Class`,()=> {
  let model;

  beforeEach(()=>{
    model = new User();
  });

    describe("Default values",()=>{
        it('first name defaults to empty',()=>{
            //Assert
            expect(model.firstName).toBe('');
           });
        
        it("last name defaults to empty",()=>{
            //Assert
            expect(model.lastName).toBe('');
        });
        
        it("middle name defaults to empty",()=>{
            //Assert
            expect(model.middleName).toBe('');
         });
    })
    describe("Full name",()=>{
      beforeEach(()=>{
        model = new User({firstName:"Keegi", lastName:"Suvaline"})
      })
      it('middle initial when middleName is defined with first and last',()=>{
        //arrange
        model.middleName = 'Keskmine';
        //act
        const result = model.fullName;
        //assert
        expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}}`)
      })
      it('when no middle name return first name and last name',()=>{
        //arrange
        model.middleName ='';
        //act
        result = model.fullName;
        //assert
        expect(result).toBe(`${model.firstName} ${model.lastName}}`)
      })
    })
})



