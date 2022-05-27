//What is generics
// Generics are a way to write functions and classes that can work with any type.
//Format of generics is: function<T>(parameters: T): returnType. When parameter is provided,
//whether it is a string, number, boolean, etc. the return type is the same since it is a generic.
const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1]
}

//above we see the parameter is an array with the type of T.
//If last is called with a string, it will return a string.
const l = last([1, 2, 3])
const l2 = last(["a", "b", "c"])

const makeArr = <T, Y = number>(x: T, y: Y): [T, Y] => {
  return [x, y]
}
const v = makeArr(1, "b")
const v2 = makeArr("a", 3)

//you can still overwrite the type of the parameter and return type
const v3 = makeArr<string | null, number>(null, 5)

//we can add a defaul to the generic type  <T, Y=number>
//below we can see that we only overwritten the first parameters type.
const v4 = makeArr<string | null>(null, 5)

//Adding constraints to the generic type, below a new object parameter is added.
// The new object parameter shall have the obj.firstName and lastName. IT IS A MUST!

const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  }
}
const v5 = makeFullName({ firstName: "selim", lastName: "bruh" })

// we add a constraint to the generic type <T extends { firstName: string; lastName: string }>
// This is done incase we dont know how many properties the object will have.
const makePerson = <T extends { firstName: string; age: number }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.age,
  }
}
//This is what we expect
const v6 = makePerson({ firstName: "selim", age: 18 })

//This is what we may get and it shall work now since it is a generic
//and can be any length if firstName and lastName are provided.
const v7 = makePerson({ firstName: "selim", age: 18, lastName: "bruh" })

//Generic Inteface
interface Tab<T> {
  id: string
  position: number
  data: T
}

type numberTab = Tab<number>
//Above is equivalent to saying:
/*
type numberTab = {
  id: string
  position: number
  data: number
}
*/
type stringTab = Tab<string>
