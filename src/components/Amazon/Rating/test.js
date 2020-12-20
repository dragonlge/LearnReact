// //S="aab"
// //aba
// var S = 'aab'

// function reduceS(str) {
//   var array = [...str]

//   var sortedAfter = array.sort(sortArray)

//   var arrayToStr = sortedAfter.toString().replace(/,/g, '')

//   if (arrayToStr==str) {
//     debugger
//     return ''
//   } else {
//     var reducedArray = array.reduce((acc, next) => {
//       return acc.concat(next)
//     }, '')
//     return reducedArray
//   }
// }
// function sortArray(a, b) {
//   if (a > b) {
//     return 1
//   } else if (a < b) {
//     return -1
//   } else if (a === b) {
//     return 0
//   }
// }
// function reduceS(str) {
//   var array = [...str]
//   console.log(array)
//   var arrayToStr = array.toString().replace(/,/g, '')
//   console.log('str', str)

//   console.log('arrayToStr', arrayToStr)

//   if (str == arrayToStr) {
//     return ' '
//   } else {
//     var reducedArray = array.reduce((acc, next) => {
//       return acc.concat(next)
//     }, '')
//     return reducedArray
//   }
// }

// var reorganizeString = function (S) {
//   console.log(S)
//   var array = [...S]

//   var sortedAfter = array.sort(sortArray)

//   var arrayToStr = sortedAfter.toString().replace(/,/g, '')
//   console.log(arrayToStr);
//   if (arrayToStr == S) {
//     debugger
//     return ''
//   } else {
//     var reducedArray = array.reduce((acc, next) => {
//       return acc.concat(next)
//     }, '')
//     return reducedArray
//   }
// }
// function sortArray(a, b) {
//   if (a > b) {
//     return 1
//   } else if (a < b) {
//     return -1
//   } else if (a === b) {
//     return 0
//   }
// }
