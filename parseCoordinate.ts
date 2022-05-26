interface Coordinate {
  x: number
  y: number
}

//function that retuns a object which has x and y properties
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  }
}

//function that takes x and y as number parameters and returns a object with x and y properties
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  }
}

//Since both of them returns a object with x and y properties, we can use a function overloading to make it more flexible. We define all the functions with the same name but different parameters.

function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(str: string): Coordinate

// we create a common function that will take either a object or a number and return a object with x and y properties. We can use the typeof the function to determine which function to call

//Also we check the number of parameters, the first function has one parameter while the second has two parameters. For the type of the parameters we use unknown type and for the number of parameter, if it is optional we use ? to indicate that it is optional.

//function name (first argument : unknown type , OPTIONAL second argument : unknown type) : return type is Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }

  if (typeof arg1 === "string") {
    //we first define the arg1 as a string and then we use forEach to iterate through the string. We split the string by the comma and then split it again by the semi-colon. The string is split by key and value. The keey is defined as 'x" and "y" using as. The value is string so we parse it to a number.
    ;(arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":")
      coord[key as "x" | "y"] = parseInt(value, 10)
    })
  }
  //to check the type of parameter we use typeof === "number" or "object"
  else if (typeof arg1 === "object") {
    coord = {
      //the arg1 in this case is still unknown, so we use "as" to define the type of the object
      ...(arg1 as Coordinate),
    }
  } else {
    coord = {
      //we use as again to define the type of the object
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  return coord
}
console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({ x: 52, y: 35 }))
console.log(parseCoordinate("x:12,y:22"))
