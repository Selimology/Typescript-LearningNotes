interface PointInterface {
  x: number
  y: number
}

const getRectangleAreaInterface = (args: PointInterface) => args.x * args.y

/* Gave an error because the type of args is PointInterface
and is missing the property 'y' */
getRectangleAreaInterface({ x: 1 })
/* Argument of type '{ x: number; }' is not assignable to parameter of type 'PointInterface'.
  Property 'y' is missing in type '{ x: number; }' but required in type 'PointInterface'.ts(2345) */

interface PointInterface3D extends PointInterface {
  z: number
}

// Extending interfaces to variable
const point3D: PointInterface3D = {
  x: 1,
  y: 1,
  z: 3,
}

// Extending interfaces to class
class example3D implements PointInterface3D {
  x = 0
  y = 0
  z = 0
}

//================DIFFERENCES====================

/* 
[1] You use the Interface for declaration Merging
Declaration Merging is a feature of TypeScript that allows you to combine multiple interfaces into one.
*/

interface bulldog {
  name: string
}
interface bulldog {
  age: number
}

const findik: bulldog = {
  name: "findik",
  age: 12,
}

/* 
[2] You can't use unions or intersect when combine interface 
and type alias in a interface.
If we want to use | or & with interface , we can't.
*/

interface Bro1 {
  name: string
}

type Bro2 = {
  age: number
}
