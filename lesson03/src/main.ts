let stringArr: string[] = ['one', 'hey', 'Dave']

let guitars: (string | number)[] = ['Strat', 'Les Paul', 5150]

let mixedData: (string | number | boolean)[] = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test: any = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed: [string, number, boolean] = ['John', 1, false]

myTuple[1] = 42

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj: { prop1: string; prop2: boolean } = {
  prop1: 'Dave',
  prop2: true,
}

exampleObj.prop1 = 'John'

// Interfaces and Types
interface Guitarist {
  name?: string
  active: boolean
  albums: (string | number)[]
}

type Guitarist2 = {
  name?: string
  active: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  active: true,
  albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guitarist: Guitarist): string => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)
