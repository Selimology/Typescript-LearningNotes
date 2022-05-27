//Required Utility Type

interface notStarShip {
  name?: string
  id?: number
}

//To make it all the properties of an interface, we use Required<T>

const makeRequiredStarShip = (starship: Required<notStarShip>): notStarShip => {
  return {
    name: "selim",
    id: 1,
  }
}
