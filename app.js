//1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNums = nums.map(num => num * 2);

console.log(doubledNums);

//2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Destructure 
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);  
console.log(secondTopping); 

//3
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Destructure the object
  const { make, model } = car;
  
  console.log(make);  
  console.log(model);

//4

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

//5
const myCar = { ...car };

myCar.model = 'q7';

console.log('Original car:', car);
console.log('Modified myCar:', myCar);

//6
const propertyName = 'username'; 

const userProfile = {
  [propertyName]: 'JohnDoe', 
};


console.log(userProfile);
//8

function describeObject(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  
  describeObject(); 
  
  
  describeObject('dog', 'brown'); 

//9 

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

//10.1 set 

const localLangConfig = null; 


const LANG = localLangConfig || 'english';


console.log('Language setting:', LANG);
// 10.2 Set Website Theme

const userSavedTheme = null; 


const USER_THEME = userSavedTheme || 'dark';

console.log('User theme setting:', USER_THEME);

//11

const adventurer = {
    name: 'Alice',
  };
  
  let cat; 
  
  console.log(cat); 


  

