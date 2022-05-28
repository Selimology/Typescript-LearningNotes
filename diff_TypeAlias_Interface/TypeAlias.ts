type PointType = {
  x: number
  y: number
}

const getRectangleAreaAliased = (args: PointType) => args.x * args.y

getRectangleAreaAliased({ x: 1 })
/* Argument of type '{ x: number; }' is not assignable to parameter of type 'PointType'.
  Property 'y' is missing in type '{ x: number; }' but required in type 'PointType'.ts(2345) */

//Extending Type to Other Type

//extending type alias to interface
interface ThirdNumber extends PointType {
  z: number
}

//implementing type alias to class
class RectangleShape implements PointType {
  x = 2
  y = 3
}
//implementing type alias to variable
const point2D: PointType = {
  x: 1,
  y: 1,
}

//using an interface that is extended by a type alias
class TriangleShape implements ThirdNumber {
  x = 2
  y = 3
  z = 4
}

//================DIFFERENCES====================

/*
[1] You can't use declaration merging in Type Alias.
It will give an error for being duplicate error.
 */

type bullcat = {
  name: string
}

type bullcat = {
  age: number
}

/* 
[2] You can combine union and intersection (both interface and type) types with type alias.

 Union Type is formed by combining two or more types into one and it
 can have the value of any of the types.

 Intersection Type is formed by combining two or more types into one and it 
 must have the value of all of the types. 
*/

type Human = {
  name: string
  speaks: boolean
}

interface Dog {
  name: string
  barks: boolean
  age: number
}

type HumanAndDog = Human & Dog
//Intersection , must have value of both Human (type) and Dog (interface)

type HumanOrDogOrBoth = Human | Dog
//Union, can have values of  all Human (type) or all Dog (interface) or Both

let humanAndDog: HumanAndDog = {
  name: "findik",
  speaks: true,
  barks: true,
  age: 12,
}

let humandOrDog: HumanOrDogOrBoth = {
  //All the Human properties are filled
  name: "findik",
  speaks: true,
  //One of the Dog properties is filled
  age: 12,
}
