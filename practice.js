//...............
//Classes - E6 - E7  {
   
    gender = 'male';
    

    printGender = () = {
        console.log(this.gender);
    }
}

//Inhereitance and Prototypes/ Must include super()

class Person extends Human {
    //Props
  
     name = 'Max'
    
    //Methods
    printMyName = () = {
        console.log(this.name);
    }
 }


 //Properties are like Varibles attached to class/object. ES7

//myProperty = 'Value'

 // Methods are functions attached to classes objects. ES7

 //myMethod = () => {...}

 //..............
 //Spread and Rest operators

 const  numbers = [1,2,3];
 const  newNumbers = [...numbers, 4];

 console.log(newNumbers);

 const person = {
     name: 'Max'
 }

 const newPerson ={
     ...person,
     gender: 'Male'
 }

 console.log(newPerson);


 const numbers = [1,2,3];

 const doubleNumArray = numbers.map((num) => {
     return num * 2;
 })

 