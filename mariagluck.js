// 1. Using if-else statement print out the message you get if you want to attend a children-only cinema and will print the film assigned to your age. This week films are (categorized by age):
// Film: "Ponyo" is for 2 years old up to 5 years old. 
// Film: "My Neighbor Totoro" is for 6 years old up to 10 years old.
// Film: "Harry Potter" for 11 years old up to 15 years old.
// print message for clients older than 15 years old.

let age = 10;
    if (age >= 0 && age <= 5) {
    console.log("The film for you today is PONYO!");
  } else  if (age >= 6 && age <= 10) {
    console.log("The film for you today is My Neighbor Totoro!");
  } else  if (age >= 11 && age <= 15) {
        console.log("The film for you today is Harry Potter!");
  } else {
      console.log("You are too old. Go to another cinema!!")
  }
// It prints: The film for you today is My Neighbor Totoro!

//2. There is a "sleep" study going on at a clinic working with 5 study-subjects: "Joe", "Jane"; "lila"; "Pepe", "Gina". Write a function named "hoursSleep" with an "if-else statement" that prints who sleeps more hours each day:
// example: it prints " Pepe slept today the most! 9 hours"

   function hoursSleep(hoursJoe, hoursJane, hoursLila, hoursPepe, hoursGina) {
      if (hoursJoe > hoursJane && hoursJoe > hoursLila && hoursJoe > hoursPepe && hoursJoe > hoursGina)
   {
       console.log(`Joe slept today the most! ${hoursJoe} hours`);
       }
       else if (hoursJane >hoursJoe && hoursJane > hoursLila && hoursJane > hoursPepe && hoursJane > hoursGina)
       {
           console.log(`Jane slept today the most! ${hoursJane} hours`);
       }
       else if (hoursLila > hoursJoe && hoursLila > hoursJane && hoursLila > hoursPepe && hoursLila > hoursGina)
       {
           console.log(`Lila slept today the most! ${hoursLila} hours`);
       }
       else if (hoursPepe > hoursJoe && hoursPepe > hoursLila && hoursPepe > hoursJane && hoursPepe > hoursGina)
       {
           console.log(`Pepe slept today the most! ${hoursPepe} hours`);
       }
       else
       {
           console.log(`Gina slept today the most! ${hoursGina} hours`);
       }

   }
hoursSleep(4, 5, 8, 9, 7); 
// it prints: Pepe slept today the most! 9 hours
   
//3. // Create a multiple case switch program where you can write different food items from the supermarket and it will print if they are fruits or not. A list of fruit cases must be therefore included...
// example: 
// "banana is a real fruit!";
// "Potato is not a fruit" ;       

let fruit = 'banana';
switch(fruit) {
    case "apple":
    case "mango":
    case "pineapple":
    case "tomato":
    case "banana":
      console.log(`${fruit} is a real fruit!`);
        break;
    default:
        console.log(`${fruit} is not a fruit!!`);
        break;
}
//it prints: banana is a real fruit!

//4. Create a javascript program with switch statement where you write the name of a city and it prints something that city has. ex: "San Francisco has the Golden Gate".
let city = "Malaga";

switch (city){
    case "Malaga":
        console.log("There are Palm trees in Malaga");
        break;
    case "Roma":
        console.log("Roma has the Colosseo");
        break;
    case "San Francisco":
        console.log("San Francisco has the Golden Gate");
        break;
    default:
        console.log("Please select another city");
}
//it prints: There are Palm trees in Malaga


// 5. Write a loop (using 2 arrays as variables), that prints every weekday menu like this: "MENU: Monday, we have pizza for lunch at the canteen"

let weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let food = ["pizza", "beans-pot", "veggie-tacos", "salad and fish", "pasta"];

for( i = 0 ; i < weekday.length ; i++){
    console.log(`MENU: ${weekday[i]}, we have ${food[i]} for lunch at the canteen`)};

// It prints:    
// MENU: Monday, we have pizza for lunch at the canteen
// MENU: Tuesday, we have beans-pot for lunch at the canteen
// MENU: Wednesday, we have veggie-tacos for lunch at the canteen
// MENU: Thursday, we have salad and fish for lunch at the canteen
// MENU: Friday, we have pasta for lunch at the canteen

// 6. Write a JavaScript program to print the following pattern: half a pine tree (N.B: use a nested for-loop!!).

// ^
// ^^
// ^^^
// ^^^^
// ^^^^^
// ^^^^^^
// ^^^^^^^
// ^^^^^^^^
// ^^^^^^^^^


let x , y, character = ("");
for( x = 1; x <= 10; x++)
{
   for (y = 1; y < x; y++)
     {
    character = character +("^");        
      }
    console.log(character);
    character = '';    
}

//7. Create a function, give it the name "result". It has 2 integer numbers as arguments. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

function result(number1, number2) {
    if (number1 === number2) {
        return (number1 + number2) * 3;
    } else {
        return number1 + number2;
    }
}
console.log(result(10, 10)); //prints 60


//8.Write a function that takes a string and prints its length. example: it should print "The length of "Wooopiwoo" is: 9"; Write the same functions as an arrow function.
function stringLength(string){
    let length = string.length;
    console.log(`The length of "${string}" is:`, length);
    return length;
}

stringLength("Wooopiwoo"); //The length of "Wooopiwoo" is: 9


const stringLength1 = string => {
    let length = string.length;
    console.log(`The length of "${string}" is:`, length);
    return length;
}
stringLength("Hello, how are you?");//The length of "Hello, how are you?" is: 19

//  9. A fashion brand has designed a unisex jacket and it is going into production.If each size requires 20 cm more of fabric and the prototype "size M" requires 1.8 m. How many fabric rolls do we need to produce 50 jackets of each size, given that each roll has 40 meters. Sizes in production are XS, S, M, L, XL. Round meter numbers and remember production can only buy full rolls!

//  It should print as follows : "The amount of fabric rolls needed is ... "
 
//Hint for sizes:
//  size: XS
//  size: S
//  size: M = 1.8 m
//  SIZE: L
//  size: XL


// **BONUS 1: How many rolls of fabric do we need for the jacket's lining if each jacket lining requires 85% of the amount of the main fabric/per size? Calculate the total meters of lining for all jackets in production given that linign fabric rolls have 50 meters each. i.e. It should print as follows : "The  amount of lining fabric rolls needed is ...

// **BONUS 2: How many rolls do we need if the fabric is double width? Print it as a string and specify how many rolls are lining and how many are main fabric.


function metersOfFabric() {
     const sizes = {
           size_XS: (1.8 - 0.4),
           size_S: (1.8 - 0.2),
           size_M: 1.8,
           size_L: 1.8 + 0.2,
           size_XL: 1.8 + 0.4,
    
     }
    const metersPerSize = {
        XS: (sizes.size_XS * 50),
        S: (sizes.size_S * 50),
        M: (sizes.size_M * 50),
        L: (sizes.size_L * 50),
        XL: Math.round((sizes.size_XL * 50)),
    } 
    //this is one way to calculate the total of meters needed:
    // const totalFabricNeeded = Object.values(metersPerSize).reduce((a, b) => a + b, 0); 
    
    //this is other way to calculate the total of meters needed:
    let totalFabricNeeded = sum( metersPerSize );
    function sum( obj ) {
        let sum = 0;
        for( let metersEachSize in obj ) {
          if( obj.hasOwnProperty( metersEachSize ) ) {
            sum += parseFloat( obj[metersEachSize] );
          }
        }
        return sum;
      }
      
      const totalFabricRolls = Math.ceil(totalFabricNeeded / 40); 
      
      const fabricForLining = (totalFabricNeeded * 0.8);
      const totalLiningFabricRolls = Math.ceil(fabricForLining / 50);
      
        
      //console.log(sizes);//HELPER LOG
      //console.log(metersPerSize);//HELPER LOG
      //console.log( "sum of meters needed: "+ totalFabricNeeded );//HELPER LOG
        console.log("The amount of fabric rolls needed is " + totalFabricRolls);
      //console.log( "sum of lining meters needed: "+ fabricForLining);//HELPER LOG
        console.log("The amount of lining fabric rolls needed is " + totalLiningFabricRolls);
        console.log(`If fabric is double width: all jackets in production require ${totalFabricRolls / 2} rolls of fabric and ${totalLiningFabricRolls / 2} rolls of lining.`);
    };
metersOfFabric();


// 10- Solving problems with JavaScript (problems like we have had, such as counting sports scores or censoring words)

// The owner of famous restaurant called "SuperSandwiches" has asked you to calculate important information about the restaurant's sales. THe restaurant has 3 shifts : morning, afternoon and night shit. It is open 7 days a week.
// Create an object called restaurantSales and calculate :

// how many sandwiches did we sell on average per day? and everyday (in total)?
// how many sandwiches did we sell on average per morning?
// how many sandwiches did we sell on average per evening?
// which was the best day to sell sandwiches?
// which shift sold best on the best day selling sandwiches?
// which was the worst day to sell sandwiches?

//I have to still write the Solution for this one ! so not done yet.

const SandwichesSold = {
    morningShift:  [15,20,25,35,45,100,50],
    afternoonShift:  [15,20,25,35,45,100,50],
    eveningShift: [15,20,25,35,45,100,50],
    

};


  
