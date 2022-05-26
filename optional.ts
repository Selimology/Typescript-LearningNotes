//after optional parameter, you can't bring any more parameters
//within the code, you'll have to use ternary operator ? true : false

function printIngredient(
  quantity: string,
  ingredient: string,
  extra?: string
): void {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : " "}`)
}

printIngredient("1", "flour")
printIngredient("2", "flour")
printIngredient("3", "flour", "and salt")

//Optional Fields
interface User {
  id: string
  info?: {
    email?: string
  }
}

function getEmail(user: User): string {
  if (user.info) {
    // there is a chance of info not being defined (since it is optional)
    //  as well as user.info.email not being defined
    return user.info.email
  }
  return ""
}

//Using coalescing operator in this case means,
// if the right side of the expression is undefined,
// then the left side of the expression is returned which in this case is " ".
function getEmailEasy(user: User): string {
  return user?.info?.email ?? ""
}

//Optional Functiona Calls
//There is a chance of callback function not being defined
//So in the scope we can approach it in two ways
function addWithCallback(x: number, y: number, callback?: () => void): void {
  console.log([x, y])
  //First way, If callback is true, then call the function
  if (callback) {
    callback()
  }
  //Second way, Use function ?. to check if callback is defined

  callback?.()
}
