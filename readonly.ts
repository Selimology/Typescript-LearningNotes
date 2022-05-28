interface Cat {
  readonly name: string //we made the type so it can't be changed
  breed: string
}

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  }
}

/* 
On line 16, we declared a function that takes two parameters.
We provided the parameter name : Aria and breed: Sokakkedisi
*/
const aria = makeCat("Aria", "SokakKedisi")
/* 
We can simply overwrite the default parameters when we call the function.
By using aria.name or aria.breed  = "TYPE HERE"
*/
aria.breed = "Bruh"

console.log(aria.name)

/* 
If we want to make the whole interface readonly, we can use the Readonly<T>
Refer to the utilityTypes for more detail or check the example below
*/

interface Doggy {
  name: string
  breed: string
}

/* You can declare it below like this or declare it within the class,function 

type ReadOnlyDoggy = Readonly<Doggy>
function doggyMake = (name:string, breed:string): ReadOnly<ReadOnlyDoggy>
*/

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}

const coordinate1 = makeCoordinate(10, 20, 30)
//After declaring above we can make a change to the array
coordinate1[0] = 100

/* 
How to make a immutabile array:
While we do declare reallyConst as an const of array of number,
we expect it to not be able to change. However using readonly 
won't make it immutable. We have to declare the array side as const
for it to be readonly.
*/
const reallyConst = [1, 2, 3] as const
reallyConst[0] = 100
