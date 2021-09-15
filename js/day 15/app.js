// * Console Methods
/*  --------------------------------

    * log()
    * warn()
    * error()
    * table()
    * time()
    * info()
    * assert()
    * group()
    * count()
    * clear()

   --------------------------------
*/

// * console.log()
// * Showing output on browser console
// console.log('Day 15')
// * Substitution
// console.log('%s %d', "Day", 15)
// * Add css
// console.log("%cDay 15", "color:blue",)
// console.log('%cDay%c %c15%c %cOf%c %cjavascript%c',
// 'color:green','',
// 'color:blue','',
// 'color:red','',
// 'color:yellow','')


// * console.warn()
// console.warn('This is a warning')
// console.warn('Warning is different from error')

// * console.error()
// console.error('This is an error message')
// console.error('We all make mistakes')

// * console.table()

// * Simple Array
// const names = ['Av', 'Bh', 'Gp', 'Rm']
// console.table(names)

// * Simple Object
// const data = {name: "kutty",year: 2021,college: "MRS",}
// console.table(data)

// * Array Of Array
// const number = [[1, 2, 3], [4, 5, 6, 7, 8]]
// console.table(number)

// * Array Of Object
// const data = [{
//     name: "kutty",
//     year: 2021,
//     college: "MRS",
//     subject: [1,2,3,4]
// },{
//     name: "kutty",
//     year: 2021,
//     college: "MRS",
//     subject: null
// }
// ]

// console.table(data)

// * console.time()

// const students = [
//     ["Raks", ["HTM", "CSS", "JS", "React"], [88, 95, 70, 85]],
//     ["John", ["HTM", "CSS", "JS", "Python"], [85, 78, 95, 80]],
//   ];
  
//   function arrayOfObject(data) {
//     const arrayOfObject = [];
  
//     console.time('for of loop')
//     for (const [name, skills, scores] of data) {
//       const obj = { name, skills, scores };
//       arrayOfObject.push(obj);
//     }
//     console.timeEnd('for of loop')
//     return arrayOfObject;
//   }
  
//   console.log(arrayOfObject(students))


// * console.info()

// console.info('Today is day 15')

// * console.assert()

// console.assert(4 > 3, '4 is greater than 3')
// console.assert(3 > 4, '3 is not greater than 4')

// * console.group()

// const ArrayOfArray = [
//     ["Raks", ["HTM", "CSS", "JS", "React"], [88, 95, 70, 85]],
//     ["John", ["HTM", "CSS", "JS", "Python"], [85, 78, 95, 80]],
//   ];

// const ArrayOfObject = [{
//     name: "kutty",
//     year: 2021,
//     college: "MRS",
//     subject: [1,2,3,4]
// },{
//     name: "kutty",
//     year: 2021,
//     college: "MRS",
//     subject: null
// }
// ]

// console.group('Array Of Array')
// console.log(ArrayOfArray)
// console.groupEnd()

// console.group('Array Of Object')
// console.log(ArrayOfObject)
// console.groupEnd()

// * console.count()

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()


// * console.clear()

console.clear()