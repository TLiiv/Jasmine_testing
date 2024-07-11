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

class User{
    firstName;
    lastName;
    middleName;
}

constructor(data={}){
    this.firstName= data.firstName || '';
    this.lastName = data.lastName || '';
    this.middleName = data.middleName;
}

//Test
describe('User', () => {
    it('')
})