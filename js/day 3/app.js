// *String and build-In function for string

// *Bad 
// var (Note:try to avoid it)
// var atemp = 10 
// var btemp = 20
// let ctemp = 30

// *Good
// let (Can be changeable) or const  (Can't be changeable)

// let a = 10
// console.log('a:', a)
// a = 12;
// console.log('a:', a)

// const b = 20;
// b = 30

// ********************************
// *Primitive Data Types

// *String
// let wordOne = "javaScript"
//  let wordTwo = 'javaScript' 
// console.log(wordOne == wordTwo)

// *Number
// let numberOne = 3
// let numberTwo = 3

// console.log(numberOne == numberTwo)

// *Boolean
// let lightOn = true
// let lightOff = false

// console.log(lightOn == lightOff)

// ********************************
// *Non-Primitive Data Types

// let numbers = [1, 2, 3]
// numbers[0] = 30

// console.log(numbers)

// if you try to compare it Non-primitive  

// let numOne = [1, 2, 3]
// console.log('numOne:', numOne)
// let numTwo = [1, 2, 3]
// console.log('numTwo:', numTwo)

// console.log(numOne == numTwo)

// const userOne = {name: "Bb"}
// const userTwo = {name: "Bb"}

// console.log(userOne == userTwo)

// it's referred to as reference types

// let numOne = [1, 2, 3]
// console.log('numOne:', numOne)
// let numTwo = numOne
// console.log('numTwo:', numTwo)

// console.log(numOne == numTwo)

// const userOne = {name: "Bb"}
// const userTwo = userOne

// console.log(userOne == userTwo)

// ********************************

// Math Object

// const PI = Math.PI
// console.log("PI Value :",PI) 


// console.log("round to nearest :",Math.round(PI))  

// console.log("floor to nearest down :",Math.floor(PI))                

// console.log("ceil to nearest up :",Math.ceil(PI))    

// let array = [-9, 28,75, 31, 47, 52,35]

// console.log("min value in array :",Math.min(...array))

// console.log("max value in array :",Math.max(...array))

// const randNum = Math.random() 
// console.log("Random Number",randNum)

// console.log("Absolute value :",Math.abs(-10))      

// console.log("Square root :",Math.sqrt(16))    

// console.log("Power :",Math.pow(3, 2))  

// console.log("Logarithm",Math.log(2)) 

// *Trigonometry
// console.log("Sin 0",Math.sin(0))
// console.log("Sin 60",Math.sin(60))

// Math.cos(0)
// Math.cos(60)

// ********************************

// *Escape Sequences in Strings

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

// console.log('Days\t3\t in string')

// console.log('This is a backslash  symbol (\\)')

// console.log('In every programming language it starts with \"Hello, World!\"')

// console.log("In every programming language it starts with \'Hello, World!\'")

// Using a string template

// let a = 20
// let b = 30
// console.log(`${a} is greater than ${b}: ${a > b}`)
// console.log(a+ " is greater than " + b + " : " + (a > b))

// ********************************

// let word = "javaScript"

//  *length: The string length method returns the number of characters in a string included empty space.

// console.log("use length", word.length)

//  *take as the array. start form index is 0 to lenght - 1

// console.log("word[0] :", word[0])

//  *toUpperCase(): this method changes the string to uppercase letters.

// console.log("uppercase letters :",word.toUpperCase())

//  *toLowerCase(): this method changes the string to lowercase letters

// console.log("lowercase letters :",word.toLowerCase())


//  *substr(): It takes two arguments, substr(starting index,number of characters to slice)
//  *j a v a s c r i p t 
//  *0 1 2 3 4 5 6 7 8 9

// console.log("substr() :",word.substr(4,6))


// *substring(): It takes two arguments, substring(starting index, stopping index) 
// *but it doesn't include the character at the stopping index.
// *j a v a s c r i p t 
// *0 1 2 3 4 5 6 7 8 9

// console.log("subString()",word.substring(0,4)) 


//  *trim(): Removes trailing space in the beginning or the end of a string.

// let series = " beginner to intermediate " 
// console.log("before :", series)
// console.log("after :", series.trim())

// *includes(): It takes a substring argument and it checks if substring argument exists in the string.
// *it return boolean value either true or false.
// *syntax: string.includes(substring)

// let series = "beginner to intermediate"
// console.log(series.includes("to"))

// *replace(): takes as a parameter the old substring and a new substring.
// *Syntax: string.replace("oldString", "newString")

// let series = "beginner to intermediate"
// console.log(series.replace("to", "2"));

// *charAt(): Takes index and it returns the value at that index
// *Syntax: string.charAt(indexValue)

// let series = "beginner to intermediate"
// console.log(series.charAt(0))

// *charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
// *Syntax: string.charCodeAt(indexValue)

// let series = "Bbeginner to intermediate"
// console.log(series.charCodeAt(0)) 

// *indexOf(): Takes a substring and if the substring exists in a string it 
// *returns the first position of the substring if does not exist it returns -1
// *Syntax: String.indexOf(subString)
// *Same has lastIndexOf() it check for last index.
// *Syntax: String.lastIndexOf(subString)

// * for(let i=0;i<element; i++){
// *     if(element[i] == compare){
// *         position = i
// *     }
// * }

// *b e g i n n e r   t o     i  n  t  e  r  m  e  d  i  a  t  e
// *0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
// let series = "beginner to intermediate"
// console.log(series.indexOf("t"))
// console.log(series.lastIndexOf("t"))

// *concat(): it takes many substrings and joins them. this will array also
// *Syntax: string.concat(subString)

// *join two string
// let series = "beginner to intermediate"
// console.log(series.concat(" in JS"))
// console.log(series+" in JS")

// *join two array
// let series = ['beginner', 'to', 'intermediate']
// let joinIn = ['in', 'JS']
// console.log(series.concat(joinIn))

// *use spread operator
// *It takes in an iterable (e.g an array) and expands it into individual elements.
// let series = ['beginner', 'to', 'intermediate']
// let joinIn = ['in', 'JS']
// console.log([...series,...joinIn])

// *startsWith / endsWith: it takes a substring as an argument & it checks if the string starts with that specified substring.
// *return boolean value either true or false.
// *Syntax: string.startsWith(subString) / .endsWith(subString)

// let series = "beginner to intermediate .js"
// console.log(series.startsWith("beginner"))
// console.log(series.endsWith(".js"))

// *split(): The split method splits a string at a specified place (Note: by default string change to an array).
// *split()
// *split(separator)
// *split(separator, limit) 
// *or can be use RegExp also

// let series = "beginner to intermediate" 
// console.log("Nothings :", series.split())
// console.log("Split to an array at each letter :", series.split(""))

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  
// console.log(countries.split(', '))

// *join() method joins all elements of an array into a string. (Note: by default separated with a comma)
// *Syntax: join()
// *Syntax: join(separator) 

// let series = "beginner to intermediate"
// let array = series.split(" ")
// console.log(array.join())
// console.log(array.join("-"))

// *slice(): trim the array. it will take two arguments start to end (end not included) index value. original array will not be modified.
// *Syntax: slice()
// *Syntax: slice(start)
// *Syntax: slice(start, end)

// let series = "beginner to intermediate in js"
// let array = series.split(" ")
// console.log('array:', array.slice(1))

// *splice():changes the contents of an array by removing or replacing existing elements and/or adding new elements
// *Syntax: splice(start)
// *Syntax: splice(start, deleteCount)
// *Syntax: splice(start, deleteCount, item1)
// *Syntax: splice(start, deleteCount, item1, item2, itemN)

// let series = "beginner to intermediate in js"
// let array = series.split(" ")

// console.log('array:', array)
// console.log('array splice:', array.splice(2,0,"hello"))
// console.log('array:', array)

// console.log('array:', array)
// console.log('array splice:', array.splice(2,1,"hello"))
// console.log('array:', array)


// *reverse(): it's will reverse it but only with array.

// let series = "beginner to intermediate"
// let array = series.split(" ")
// console.log('array:', array.reverse())


// ********************************

// *Checking Data Types and Casting

// let series = "beginner to intermediate"
// console.log('series:',typeof series)

// let array = series.split(" ")
// console.log('array:', typeof array)

// let number = 2
// console.log('number:',typeof number)

// let userOne = {name: "Bb"}
// console.log('userOne:', typeof userOne)

// let someThing
// console.log('someThing:', typeof someThing)

// *what is typeof null? 

// *Changing Data Type


// /**************************/
// let string = "10"
// let string = "10.30"
// console.log('string:', string)
// console.log('string:',typeof string)
// let number = parseInt(string)
// console.log('number:', number)
// console.log('number:',typeof number)

// String to Int
// * parseInt()   - Syntax: parseInt(number) - example: console.log(parseInt(string)) 
// * Number()     - Syntax: Number(number)   - example: console.log(Number(string)) 
// * Plus sign(+) - Syntax: +number          - example: console.log(+string)


// /**************************/
// let string = "10.30"
// console.log('string:', string)
// console.log('string:',typeof string)
// let number = parseFloat(string)
// console.log('number:', number)
// console.log('number:',typeof number)


// String to Float
// * parseFloat()   - Syntax: parseFloat(number)   - example: console.log(parseFloat(string)) 
// * Number()       - Syntax: Number(number)       - example: console.log(Number(string)) 
// * Plus sign(+)   - Syntax: +number              - example: console.log(+string)


// /**************************/
// let number = parseInt(10.30)
// console.log('number:', number)

// Float to Int
// * parseInt() - Syntax: parseInt(number) - example: console.log(parseInt(string)) 

// /**************************/
// *toFixed(): method converts a number into a string, rounding to a specified number of decimals.
// let number = 5.56789;
// console.log('number:', number)
// let num = number.toFixed(2);
// console.log('num:', num)
// console.log('num:',typeof num)


// -- Small test --

// using one console.log() and escape characters

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125


// --- Answer ---
// console.log('1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125')