/* 
Non-Nullable Utility Type
Removes null and undefied from a union type.
*/

interface myCar {
  colors?: "blue" | "red"
}

/*
Using the Non-Nullable Utility Type, 
we remove the possibility of the colors property being null or undefined. 
*/
function paintMyCar(id: number, color: NonNullable<myCar["colors"]>) {
  console.log(`Painting my car with id ${id} in ${color}`)
}

/* This is why below doesn't work :
paintMyCar(1, undefined)
*/

paintMyCar(1, "blue")
