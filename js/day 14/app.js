

// * --- Small Test ---

//    * const students = [
//    *      ['Raks', ['HTM', 'CSS', 'JS', 'React'], [88, 95, 70, 85]],
//    *      ['John', ['HTM', 'CSS', 'JS', 'Python'], [85, 78, 95, 80]]
//    *    ]


//    * Output
//    *   [
//    *   {
//    *     name: 'Raks',
//    *     skills: ['HTM','CSS','JS','React'],
//    *     scores: [98,85,90,95]
//    *   },
//    *   {
//    *     name: 'John',
//    *     skills: ['HTM', 'CSS', 'JS', 'Python'],
//    *     scores: [85, 78, 95, 80]
//    *   }
//    * ]






//    * --- Answer ---
// const students = [
//   ["Raks", ["HTM", "CSS", "JS", "React"], [88, 95, 70, 85]],
//   ["John", ["HTM", "CSS", "JS", "Python"], [85, 78, 95, 80]],
// ];

// function arrayOfObject(data) {
//   const arrayOfObject = [];

//   for (const [name, skills, scores] of data) {
//     const obj = { name, skills, scores };
//     arrayOfObject.push(obj);
//   }
//   return arrayOfObject;
// }

// console.log(arrayOfObject(students));
