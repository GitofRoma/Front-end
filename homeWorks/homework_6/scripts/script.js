//1
const arr1 = [];
for (let index = 0; index <= 10; index+=2) {
    const element = index;
    arr1.push(element)
}
console.log(arr1)


//2
const arr2=[]
for (let index = 55; index >= 20; index--) {
    arr2.push(index)
}
console.log(arr2)

//3
const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers)


//4
const numberssquared = [];
for (let index = 0; index < numbers.length; index++) {
    numberssquared.push(numbers[index]**2)
}
console.log(numberssquared)


//5
const lastelem = numberssquared[numberssquared.length-1]
console.log(lastelem)

//6
const user = {
    firstname: 'Ivan', 
    lastname: 'Ivanov', 
    age: 20, 
    salary: 500
}
console.log(`User’s name is ${user.firstname}. He is ${user.age} years old`)    
// console.log(`User’s name is ${user['firstname']}. He is ${user['age']} years old`)    
