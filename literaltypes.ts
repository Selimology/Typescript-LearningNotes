/* Literal Types
Allows us to define a type that is a fixed set of values.
So we can decide to put a rule stating that the value
has to be exactly the string ,number, boolean.
*/

/* 
Below case we used the numeric literal and made it
so the only numbers accepted are 1 | 2 | 3 (and)
*/
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1
  }
  return pip
}

console.log(rollDice(3))
//Value 4 is not accepted.
console.log(rollDice(4))

function sendEvent(name: "addToCart", data: { cartCount: number }): void
function sendEvent(name: "checkout", data: { productID: number }): void

/* String Literal is basically the same concept
 where we are accepting only a specific string value as
 answer */
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`)
}

/* 
We do this by overload the type of the data like below.
We only accept 2 values now and not any other value.
name: shall be "addToCart" or "checkout" and data
shall match the type of { cartCount: number } 
or { productID: number }
*/

/* Below matches, so no issues */
sendEvent("checkout", { productID: 12123123 })
/*  it the data doesn't match any of the overload, so error
occurs*/
sendEvent("addToCart", { bruh: 12 })
