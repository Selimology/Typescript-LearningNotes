//for parameters that are functions: the type of the function is the type of the return value of the function. If the function has parameters we label it within a ()

//In this example below, callback is a function that has a no parameter and returns a void value.
export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}

//parameters that are functions are labelled in this format in typscript:
// functionName: (param: Type (if they have a param)) => ReturnType
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
  // (v: number) => number
): number[] {
  return numbers.map(mutate)
}

console.log(arrayMutate([1, 2, 3], (v) => v * 2))

//Function as Type in Typescript , anything after a semi-colon is considered a type specification that can be shared with other. In the example above, the mutate function has a parameter that that is a number type and the function returns a number type. We can simplify it using type:

export type MutationFunction = (v: number) => number

// we can even export the type MutateFunction as a type and use it on other functions

//This is incorrect as the function is not returning a number type and parameter is not a number type

// const myNewMutationFunction: MutationFunction = (v: string) => `${v}`
const myNewMutationFunction: MutationFunction = (v: number) => v * 2

//return a function in typescript
export function createAdder(num: number): (val: number) => number {
  return (val: number) => num + val
}
//we can simplify the above function by using type:
export type Adder = (val: number) => number

const addOne = createAdder(1)
console.log(addOne(22))
