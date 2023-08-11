function greeting(someone) {
  const greet = `hello, ${someone}`
  if (someone == null || someone == undefined) {
    return 'hello, guest'
  } 
  return greet
}
const result = greeting("LenGKunG")
console.log(result)

module.exports = greeting
