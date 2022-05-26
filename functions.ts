//:number after parameters of the function means return type is number
function addNumbers(a: number, b: number): number {
  return a + b
}
//this function can be imported as import { addNumbers } from "./functions"
export default addNumbers

// string2:string ="" means the default value is an empty string
export const addStrings = (string1: string, string2: string = ""): string =>
  `${string1} ${string2}`

// param: string | number means that the param can be either a string or a number
export const format = (title: string, param: string | number): string =>
  `${title}: ${param}`

//if the return type is void, then the function can be used as a void function
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param))
}

//return type of a function for Promise is the type of the value returned by the function Promise<Type> , in this case it is Promise<string>
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`)

//rest parameters are used to represent an indefinite number of arguments, they are array-like objects
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`
}

// ?. is used to check if the value is not null or undefined called optional chaining
// ?? null coalescing operator means if the value is null or undefined, then return the default value. we can label it with a name. from undefined to "firtName"
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`
}
