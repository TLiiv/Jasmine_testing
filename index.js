//57.25

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

class UserService {
  getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
}


class User {
  constructor(data, userService) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName || '';
    this.id = data.id;
    this.userService = userService;
  }

  get fullName() {
    if (this.middleName.length > 0) {
      return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }
    return `${this.firstName} ${this.lastName}`;
  }

  async getMyFullUserData() {
    try {
      const userData = await this.userService.getUserById(this.id);
      return userData;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  }
}

  


  


//Tests
describe(`${User.name} Class`, () => {
  let model;
  let mockUserService;

  beforeEach(() => {
    mockUserService = {
      lastId: null,
      user: {},
      getUserById(id) {
        this.lastId = id;
        return Promise.resolve(this.user);
      }
    };
    const data = { firstName: 'Keegi', middleName: 'Keskel', lastName: 'Lõpus', id: 1 };
    model = new User(data, mockUserService);
  });

  //Mock
  describe('getMyFullUserData', () => {
    it('gets user data by id', async () => {
      // arrange
      mockUserService.lastId = null;
     
      // act
      const result = await model.getMyFullUserData();
      // assert
      expect(mockUserService.lastId).toBe(1);
    });
  });
  it('gets full user data',async()=>{
    //arrange
    mockUserService.user = new User({ firstName: 'Kqwegi', middleName: 'KeASdel', lastName: 'KASs', id: 2 });
    //act
    const result = await model.getMyFullUserData();
    //assert
    expect(result.id).toBe(2);
    expect(result.firstName).toBe('Kqwegi');
  })
});



    
// describe(`${User.name} Class`,()=> {
//   let model;

//   beforeEach(()=>{
//     model = new User();
//   });

//     describe("Default values",()=>{
//         it('first name defaults to empty',()=>{
//             //Assert
//             expect(model.firstName).toBe('');
//            });
        
//         it("last name defaults to empty",()=>{
//             //Assert
//             expect(model.lastName).toBe('');
//         });
        
//         it("middle name defaults to empty",()=>{
//             //Assert
//             expect(model.middleName).toBe('');
//          });
//     })
//     describe("Full name",()=>{
//       beforeEach(()=>{
//         model = new User({firstName:"Keegi", lastName:"Suvaline"})
//       })
//       it('middle initial when middleName is defined with first and last',()=>{
//         //arrange
//         model.middleName = 'Keskmine';
//         //act
//         const result = model.fullName;
//         //assert
//         expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}}`)
//       })
//       it('when no middle name return first name and last name',()=>{
//         //arrange
//         model.middleName ='';
//         //act
//         result = model.fullName;
//         //assert
//         expect(result).toBe(`${model.firstName} ${model.lastName}}`)
//       })
//     })
// })