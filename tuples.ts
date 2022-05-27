//What is tuple?
//A tuple is a fixed size list of values. Their types can be different,
//but the number of elements in the list must be the same.
type ThreeDCoordinate = [x: number, y: number, z: number]

//In this example, same type tuple is used to store the coordinates of a point in 3D space.
function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

console.log(add3DCoordinate([1, 2, 3], [10, 20, 30]))

//Tupple with different type
//SimpleStringState is a function that has a input of string and returns a tuple of two functions.
//One of them returns string and the other one returns void.
function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial
  return [
    () => str,
    (v: string) => {
      str = v
    },
  ]
}
//The first function returns the current string.
//The second function takes a string and sets the current string to that value.
const [str1getter, str1setter] = simpleStringState("hello")
const [str2getter, str2setter] = simpleStringState("jack")
console.log(str1getter())
console.log(str2getter())
str1setter("goodbye")
console.log(str1getter())
console.log(str2getter())
