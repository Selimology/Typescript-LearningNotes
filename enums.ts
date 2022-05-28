/*
Enum Types are a collection of named constants that have same type

Example: (Collection of const)

const applePrice = 10
const peachPrice = 5 


By default if the values aren't given to the enum, the values will start from 0
and increment by 1. (0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,...
    This is because it takes their index as their value in the array)
*/
enum FruitPrices {
  applePrice,
  peachPrice,
  bananaPrice,
}

console.log(FruitPrices.applePrice)
console.log(FruitPrices.peachPrice)
console.log(FruitPrices.bananaPrice)

/* If the first value is not 0, but another value, it will start from that value
and increment by 1. (100,101...)

However, if the first value is not defined, but second value is defined, it will
start from the second value and increment by 1. (1,2,3...) while first value is
going to be zero.
*/
enum CarPrices {
  Audi, //0
  BMW = 100, //100
  Tesla, //101
}
console.log(CarPrices.BMW)
console.log(CarPrices.Audi)
console.log(CarPrices.Tesla)

enum BusPrices {
  Audi = "hey",
  BMW = "sup",
  Tesla = "hello",
}
console.log(BusPrices.Audi)
console.log(BusPrices.BMW)
console.log(BusPrices.Tesla)

/* 
Consts shall not be editable so we can use const enum.
This will optimise the speed of the code.
Below code will not be able to change the values of the enum.

*/
const enum AnimeNames {
  Naruto = "Naruto",
  Bleach = "Bleach",
  OnePiece = "One Piece",
}

/* In case we want to export the typescript to other files
(since enum is unique to typescript) we can define the enum as a object like below */

const WeebNames = {
  Kirito: "Kirito",
  Shiro: "Shiro",
  Shirogane: "Shirogane",
} as const

/* since we are using const enum, we can't change the values of the enum
So it will give an error since we tried to change the values of the enum */
WeebNames.Kirito = 11
