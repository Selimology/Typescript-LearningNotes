interface Starship {
  name: string
  enableHyperdrive: boolean
}

/* the starship parameter is of type Starship and takes 2 arguments
  ,however using utility type Partial<T> you can pass only the properties you want to pass since
  thre rest of the properties are optional.
   */
/* All the parameters of starship shall be provided */
const updateStarship = (id: number, starship: Starship) => {}

/* The sharship is type Partial<Starship> so all properties of starship are optional */
const updateStarshipOptional = (id: number, starship: Partial<Starship>) => {}

updateStarshipOptional(1, {
  name: "explorer",
})
