console.log(process.argv)

const returnArgs = (allArgs = process.argv) => allArgs.slice(2)

console.log(returnArgs())
