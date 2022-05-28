/* Omit UtilityType is oposite of Pick. It removes the properties from the object.
 */
interface OnePiece {
  name: string
  fruit: string
  age: number
  isAlive: boolean
}

type OnePieceOnlyName = Omit<OnePiece, "fruit" | "age" | "isAlive">

/* type OnePieceOnlyName = {
  name: string
}
 */
