/* Readonly<T>, means the properties of an interface can't be changed/overwritten */
interface notStarShip {
  name?: string
  id?: number
}

type makeRequiredStarShip = Readonly<notStarShip>
/* 
  type makeRequiredStarShip = {
      readonly name?: string | undefined;
      readonly id?: number | undefined;
  }
  */
