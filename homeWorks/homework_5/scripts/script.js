

//1
const input_number = +prompt("Number is ...")/10
console.log(`10% is ${input_number}`); 

//2
const input_number_2_1 = +prompt("Number 2/1 is ...")
const input_number_2_2 = +prompt("Number 2/2 is ...")

if (input_number_2_1 < input_number_2_2){
    console.log(`min is ${input_number_2_1}`); 
}else {
    console.log(`min is  ${input_number_2_2}`); }
//


//3
const input_number_3 = +prompt("Number 3 is ...")
if (input_number_3 < 100){
    console.log("Число меньше 100"); 
}else if(input_number_3 > 100 ){
    console.log("Число больше 100");
 } else{
    console.log("Число равно 100")
 }


//4
const name = prompt("NAME is ...")
const age = +prompt("YEARS is ...")

if (age < 18){
    console.log(`Hi, ${name}`); 
}else{
    console.log(`Hello, ${name}`);
}
