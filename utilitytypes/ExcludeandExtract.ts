/* 
Exclude Utility Type
Remove One Union Type from Another Union Type (Subtract)
*/

type DrinksAvailable = "coffee" | "tea" | "juice" | "milk" | "water"

let SelimsDrink: DrinksAvailable
SelimsDrink = "coffee"

type DrinksKamilDoesntLike = "milk" | "juice"

/* Below we have removed the milk and juice from the DrinksAvailable 
type using the Exclude utility type. */

let Kamil: Exclude<DrinksAvailable, DrinksKamilDoesntLike>

/* 
Extract Utility Type
Extract One Union Type from Another Union Type (Intersect).
From Available Drinks, we are extracting the drinks that Kamil likes.
*/
type DrinksKamilLikes = "coffee" | "tea" | "water"
let Kamil2: Extract<DrinksAvailable, DrinksKamilLikes>
