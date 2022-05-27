/*  Keyof is a type that takes the property of another type
 In the example below , you can see that key shall be a property 
 of the type DataType
 */

function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key])
}

const dogs = [
  { name: "mimi", age: 12 },
  { name: "LG", age: 13 },
]

/* the dogs is the data type, and name/age is the key. */

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  // addToCart is sum of Basevent and {quantity: number,product: string}
  addToCart: BaseEvent & { quantity: number; productID: string }
  checkout: BaseEvent
}
//Name extends keyof EventMap means that Name shall be a property of EventMap
function sendEvent<Name extends keyof EventMap>(
  name: Name,
  //EventMap[Name]  can be EventMap[addToCart] or EventMap[checkout]
  data: EventMap[Name]
): void {
  console.log([name, data])
}

sendEvent("addToCart", { time: 1, user: "mimi", quantity: 2, productID: "123" })
sendEvent("checkout", { time: 1, user: "mimi" })
