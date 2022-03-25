let number_of_transactions = 970
console.log(typeof(number_of_transactions))
//expected result: number
 
console.log(typeof("The ceremony is scheduled at 8am."))
//string
 
console.log(typeof(true))
//boolean
 
console.log(typeof(sept_record))
//undefined



let score = 10
let score1 = "10"
let age = 10
let my_street = "123 Van Nuys St"
let isOpen = true
let camys_st = "123 Mission St"
 
console.log(score === score) //true
console.log(score === score1) //false, this is comparing a number and string
console.log(score === age) //true, the values are the same as well as the types, which are both numbers
console.log(my_street === my_street) //true
console.log(my_street === camys_st) //false, the two strings have different values
console.log(score === isOpen) //false, this is comparing a string to a boolean