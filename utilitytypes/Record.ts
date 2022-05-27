//Record Utility Type
//Record <The key  name, the value/type of the property>

interface Starship {
  name: string
  enableHyperdrive: boolean
}

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
