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

/* Readonly<T>, means the properties of an interface can't be changed/overwritten */
type makeRequiredStarShip = Readonly<notStarShip>

//Record Utility Type
const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperdrive: true,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperdrive: true,
  },
}

/* Another Example of Record Utility Type */

type LinkPropertyValues = {
  href: string
  type: string
}

type LinkProperties = "timeline" | "user" | "current_user_url" | "past_user"

//Record <The key  name, the value/type of the property>
type Links = Record<LinkProperties, LinkPropertyValues>

const links: Links = {
  timeline: {
    href: "https://api.github.com/users/selimreza/timeline",
    type: "application/json",
  },
  user: {
    href: "https://api.github.com/users/selimreza",
    type: "application/json",
  },
  current_user_url: {
    href: "https://api.github.com/user",
    type: "application/json",
  },
  past_user: {
    href: "https://api.github.com/users/selimreza",
    type: "application/json",
  },
}
