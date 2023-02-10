// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

const vacuumCleaner = (moves: string): boolean => {
  let x = 0
  let y = 0
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "L":
        x--
        break
      case "R":
        x++
        break
      case "U":
        y++
        break
      case "D":
        y--
        break
    }
  }
  return x === 0 && y === 0
}

console.log(vacuumCleaner("LR"))
console.log(vacuumCleaner("URURD"))
console.log(vacuumCleaner("RUULLDRD"))
