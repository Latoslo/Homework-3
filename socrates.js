/*================
******Statements & Operators Homework****
Let's look at a popular logical argument (a syllogism)
All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal. You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.

* Logical Argument
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
==================*/

const men = {
  isMortal:true,
  containAllmen:true,
};
const socrates = {
  name:'Socrates',
  isMan:true,
}

if ((men.containAllmen)&&(socrates.isMan)&&(men.isMortal)){
  console.log(`${socrates.name} is mortal`);
}


const cakeIsVanilla = true;
const cakeIsChocolate = false;

if ((cakeIsChocolate || cakeIsVanilla)&&(!cakeIsChocolate)){
  console.log(cakeIsVanilla);
}

