//Ternary Operator 
//syntax 
//(condition) ? "what to be done if true" : "what to be done if false"

console.log('*****Ternary Operator*************')
//Long hand
const x  = 5;
let answer;
if (x > 10) {
    answer = "greater than 10";
} else {
    answer =  "less than 10";
}
console.log(`Input : ${x} Answer : ${answer}`);

//Ternary Operator - shorthand

answer = (x>10) ? "greater than 10" :"less than 10" ;
console.log(`Ternary Operator Short Hand Synatx - Input : ${x} Answer  : ${answer}`);

//multiple if's
if(x>1)
{
    if(x===5)
    {
        answer =" Value of X is 5"
    }
}
console.log(`Input : ${x} Answer : ${answer}`);


//Ternary Multiple If's

answer = (x>10) ? (x===5) ? "X value is 5":'' :'';
console.log(`Ternary Operator Short Hand Synatx Multiple if's- Input : ${x} Answer 1 : ${answer}`);
console.log('------------------------------------------------------------------------');
//-------------------------------------------------------------------------------------

/**
 * Short Circuit Evalutation Short hand
 * Syntax
 * (to variable) = (from variable) || (value incase from variable is null or empty)
 */
console.log('*********Short Circuit Evalutation*************')
let variable1=5;
let variable2;

if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
    variable2 = variable1;
}
console.log(`Variable2 : ${variable2}`);

variable1='';
variable2 = variable1 || 10;
console.log(`Short Circuit Evaluation Variable2 : ${variable2}`);
console.log('------------------------------------------------------------------------');
//-------------------------------------------------------------------------------------------------------

/**
 * Declaring variables SHort hand 
 * Syntax :
 * Longhand : let x=3,y=3,z=3; 
 * Short hand :let x, y, z=3;
 */

/**
 * If presence
 * Syntax :
 * Longhand : if (likeJavaScript === true)
 * Short hand :if(likeJavaScript)
 */

/**
 * If presence
 * Syntax :
 * Longhand : if (likeJavaScript === true) ; if (likeJavaScript !== true)
 * Short hand :if(likeJavaScript); if (!likeJavaScript)
 */ 

//----------------------------------------------------------------------------------

/**
 * for loop
 * Syntax :
 * Longhand : for (let i = 0; i < array.length; i++)
 * Short hand : for (let arrayItem of arrayList)
 */ 
console.log('*********For Loop*************')
const numbers = [1,2,3,6,9]
let arraySum=0;
for(let k=0; k<numbers.length; k++){
    arraySum += numbers[k]; 
}
console.log(`For loop long hand syntax - numbersArrayVar ${arraySum}`);

arraySum=0;
for(let item of numbers)
{
    arraySum += item; 
}
console.log(`For loop Short hand syntax - numbersArrayVar ${arraySum}`);

//Also works if we want to access only keys in object
const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
let keysInArray='';
for (let key in obj){
    keysInArray += key+' ';
}
console.log(`For Loop Short Hand Key Rotation keysInArray- ${keysInArray}`);

const array1 = ['a', 'b', 'c'];
let arrayElements = ''; 
array1.forEach(element => arrayElements += element+' ');
console.log(`Array Elements Short Hand For Each ${arrayElements}`);
console.log('------------------------------------------------------------------------');
//----------------------------------------------------------------------------------

/**
 * Decimal base exponents 
 * Syntax :
 * Longhand : for (let i = 0; i < 10000; i++) {}
 * Short hand : for (let i = 0; i < 1e4; i++) {}
 * 1e0 === 1;
 * 1e1 === 10;
 * 1e2 === 100;
 * 1e3 === 1000;
 * 1e4 === 10000;
 * 1e5 === 100000;
 */ 

/**
 * Short Hand Circuit Evalutation
 * Syntax :
 * Longhand : let dbHost; if (process.env.DB_HOST) { dbHost = process.env.DB_HOST;} 
                            else {  dbHost = 'localhost';}
 * Short hand : const dbHost = process.env.DB_HOST || 'localhost';
 */ 

/**
 * Arrow Functions SHort hand 
 * Syntax :
 * Longhand : function(item) {//do your code}
 * Short hand :(item) => {//do your code}
 */
console.log('*********Arrow Functions*************')
function sayHello(){
    console.log(`Saying Hello from long hand function`);
}
sayHello();
sayHello = () => console.log(`Saying Hello from Short hand function`);
sayHello();

console.log(`---------------------------------------------------------------------`)

//------------------------------------------------------------------------------------

/**
 * Implicit Return Short hand 
 * For Arrow Functions having return statment no need to implicitly define the return
 * Syntax :
 * Longhand : function calcCircumference(diameter) {return Math.PI * diameter}
 * Short hand : calcCircumference = diameter => (Math.PI * diameter;)
 */

/**
 * Default Param Short hand 
 * You can use the if statement to define default values for function parameters. 
 * In ES6, you can define the default values in the function declaration itself.
 * Syntax :
 * Longhand : function volume(l, w, h) {  if (w === undefined)    w = 3;
 *   if (h === undefined)    h = 4;  return l * w * h;}
 * Short hand : volume = (l, w = 3, h = 4 ) => (l * w * h);
 */

/**
 * Template Literals Short hand 
 * Syntax :
 * Longhand : const welcome = 'You have logged in as ' + first + ' ' + last + '.'
 * Short hand : volume = const welcome = `You have logged in as ${first} ${last}`;
 */

/**
 * Spread Operator Short hand 
 * Syntax :
 * Longhand : arr1.concat(arr2) 
 * Short hand : arr1...arr2;
 */

console.log(`***************** Spread Operator *****************`)

let a=[1,2,3,4];
let b =[5,6]

let c =a.concat(b);
console.log(`Long Hand Syntax for Joining Arrays ${c}`);


c = [a, ...b];
console.log(`Short Hand Syntax for Joining Arrays a and b is [a, ...b] : ${c}`);

c=[...a];
console.log(`Short Hand Syntax for Cloning Arrays ...arrayName : ${c}`)

const  { f, e, ...z } = { f: 1, e: 2, c: 3, d: 4 };
console.log(`Short hand Array Example : d: ${f} y: ${e}` )
console.log(z)

console.log('-----------------------------------------------------------------');


//---------------------------------------------------------------------------------

/**
 * Mandatory Parameter Short hand 
 * Syntax :
 * Longhand : if(madnatoryParm === undefined){throw new Errpr;}
 * Short hand : mandatoryParam = mandatory()
 */
//Long hand
 function foo(bar) {
    if(bar === undefined) {
      throw new Error('Missing parameter!');
    }
    return bar;
  }

  //Short hand
  mandatory = () => {
    throw new Error('Missing parameter!');
  }
  
  foo = (bar = mandatory()) => {
    return bar;
  }

 let s=3;
 console.log(`Example of Mandatory Param`);
  foo(s);

console.log(`----------------------------------------------------------------`);

/**
 * Array find Short hand 
 * Syntax :
 * Longhand : for loop iterate eacha nd every eleme nt and match input}
 * Short hand : find(callback (element ))
 */

//Long Hand:
let arrayFind =[1,2,3,4,5]

function FindELementInArray(input){
for(i=0; i<arrayFind.length;i++){
    if(arrayFind[i]===input){
    console.log(`Input : ${input} found in Array`);return}
}
}

console.log(`Finding element using long hand Array inout passed is 3`);
FindELementInArray(3);

//Short hand

var result = arrayFind.find(number => number%2 ===0);
console.log(`Finding element using short hand Array  ${result}`)

let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];

console.log(customers.find(c => c.credit===200));
console.log(`----------------------------------------------------------------`);

/**
 * Object [key] Short hand 
 * Syntax :
 * Longhand : 
 * Short hand : 
 */

// object validation rules
const schema = {
    first: {
      required:true
    },
    last: {
      required:true
    }
  }
  
  // universal validation function
  const validate = (schema, values) => {
    for(field in schema) {
      if(schema[field].required) {
        if(!values[field]) {
          return false;
        }
      }
    }
    return true;
  }
  
  
  console.log(validate(schema, {first:'Bruce'})); // false
  console.log(validate(schema, {first:'Bruce',last:'Wayne'})); //true

console.log(`----------------------------------------------------------------`);

/**
 * Exponent Power Short hand 
 * Syntax :
 * Longhand : Math.pow(2,3); // 8
 * Short hand : 2**3 // 8
 */

/**
 * Converting String to Number
 * Syntax :
 * Longhand : const num1 = parseInt("100");
 * Short hand : const num1 = +"100"; // converts to int data type
 * const num2 =  +"100.01"; // converts to float data type
 */

/**
 * Bitwise IndexOf Shorthand
 * Syntax :
 * Longhand : if(arr.indexOf(item) > -1) { // Confirm item IS found
 * Short hand : if(~arr.indexOf(item))
 * const num2 =  +"100.01"; // converts to float data type
 */

/**
 * Object.entries()
 * Covers JSON to Key valu pairs
 * Syntax :
const credits = { producer: 'John', director: 'Jane', assistant: 'Peter' };
const arr = Object.entries(credits);
console.log(arr);

/** Output:
[ [ 'producer', 'John' ],
  [ 'director', 'Jane' ],
  [ 'assistant', 'Peter' ]
]

const arr = Object.values(credits);
console.log(arr);

/** Output:
[ 'John', 'Jane', 'Peter' ]
**/