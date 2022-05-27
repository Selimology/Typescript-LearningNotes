/* Pick Utility Type
It takes an interface and returns an interface with only the properties that are specified in the type parameter.
*/
interface OnePiece {
  name: string
  fruit: string
}

type OnePieceName = Pick<OnePiece, "name">
/* type OnePieceName = {
      name: string;} 
  */
