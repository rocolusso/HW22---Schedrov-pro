'use strict';

/*

Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some,
которые работают так же, как одноименные методы массивов.

Алгоритм выполнения:
1. Читаете документацию по методу над которым работаете
2. разбираетесь как он работает и что возвращает
3. пишете функцию которая полностью имитирует работу метода

 */

/////  indexOf


// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const indexOf = ( arr , item) => {
//     for ( let i = 0; i < arr.length; i++) {
//         if ( arr[i] === item ) {
//             return console.log(i);
//         }
//     }
//     return -1;
// }
//
// indexOf(arr, 3);



///// lastIndexOf


// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const lastIndexOf = ( arr, item) => {
//     for ( let i = arr.length; i > -1; i--) {
//         if ( arr[i] === item) {
//             return console.log(i);
//         }
//     }
//     return -1;
// }
//
// lastIndexOf(arr, 6 );



///////findItem

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const findItem = (arr , item) => {
//     for ( let i = 0; i < arr.length; i++) {
//         if (item(arr[i] , i , arr)) {
//             return arr[i];
//         }
//     }
//     return undefined;
// }
//
// findItem(arr ,  (value) => {
//         return value === 3;
//     })



/////findItemIndex

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const  findItemIndex = ( arr , item , index) => {
//     for ( let i = 0; i < arr.length; i++) {
//         if ( item (arr[i] , i , index)) {
//             return i;
//         }
//     }
//     return -1 ;
// }
//
// findItemIndex (arr, (value) => {
//             return value === 3;
//         }
//     )


///// includes

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const includes = ( arr, searchElement , Index = 0) => {
//     for ( let i = Index; i < arr.length; i++) {
//         if (arr[i] === searchElement) {
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }
//
// includes(arr, 3 ,2);
// includes(arr, 11 ,10);



//////every

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const every = ( arr , callback) => {
//     for ( let i = 0; i < arr.length; i++) {
//         if (!callback ( arr[i], i , arr)) {
//             return console.log(false);
//         }
//     }
//     return console.log(true);
// }
//
// every(arr,  (value) => {
//             return  typeof value === 'number';
//         }
//     )



///// some

// const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const some = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i , arr )) {
//             return console.log(true);
//         }
//     }
//     return console.log(false);
// }
//
// some(arr,  (value) => {
//             return   value > 10;
//         }
//     )