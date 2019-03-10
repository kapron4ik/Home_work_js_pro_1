/*
  Arrays Methods
  Docs:
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    Array.from: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    * Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every

*/

  const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
  const NOT_ARRAY = "";

  // -- Проверка является ли массивом: Array.isArray( Arr );
  // console.log ( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log ( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  // -- Преобразование массивоподобного или итерируемо обьекта в массив: Array.from();
  // let listItems = list.querySelectorAll('li');
  // console.log(listItems, Array.isArray(listItems) );
  // let listItemsArray = Array.from( listItems );
  // console.log(listItemsArray, Array.isArray(listItemsArray) );

  // -- Array.forEach
  // const LogName = item => console.log( 'log:', item );
  // ITEA_COURSES.forEach( LogName );
  // console.log('- - - - -');
  // ITEA_COURSES.forEach( (item) => console.log('log:', item) );

  // -- Array.filter
  // Create new array;

  // const StringLength = item => item.length < 15;
  // if expresion === true return item
  // let filtredArray = ITEA_COURSES.filter( StringLength );
  // console.log('filtredArray:', filtredArray, ITEA_COURSES);

  // -- Array.map
  // Create new array;

  // var ReverseName = name => name.split("").reverse().join("");
  // var MappedArray = ITEA_COURSES.map( (item, i) => {
  //   list.innerHTML += `<li>${item}</li>`
  // });
  // console.log(MappedArray);

  // -- every/some

  // var ArraySome = ITEA_COURSES.some( function( item ){
  //   if( item.length <= 6){
  //     return true;
  //   }
  // });

  // console.log('ArraySome', ArraySome);

  // var ArrayEvery = ITEA_COURSES.every( item => item.length < 30);
  // console.log('ArrayEvery', ArrayEvery);

  // -- reduce/reduceRight


  // const Cart = [
  //   {name: 'cat', value: 10},
  //   {name: 'dog', value: 20},
  //   {name: 'parrot', value: 5},
  // ]

  // let resultCart = Cart.reduce( (sum, current)=> {
  //   console.log('sum', sum, 'current', current);
  //   return sum + current.value;
  // }, 0)
  // console.log( resultCart );

  //  const OBJ_ARRAY = [
  //   {id: 0, sum: 20, adr: 'Украина'},
  //   {id: 1, sum: 40, adr: 'Кивеская Обл.'},
  //   {id: 2, sum: 51, adr: 'Ул. Смоленская'},
  //   {id: 3, sum: 85, adr: '31/11'},
  //   {id: 4, sum: 19, adr: '1'}
  // ];

  // let result = OBJ_ARRAY.reduce(
  //   (sum, current) => {
  //     console.log( sum, current );
  //     return `${sum} ${current.adr}`;
  //   },
  //   ''
  // );


  // const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
  // let result = REDUCE_ARRAY.reduce( function( sum, current){
  //   console.log("multiply >:", sum, current);
  //   return sum + current;
  // }, 155);
  // console.log(result);
  
  // var resultReverse = REDUCE_ARRAY.reduceRight( function( sum, current){
  //   console.log("multiply - <:", sum);
  //   return sum + current;
  // });
  // //
  // console.log('resultReverse', resultReverse);



  /*
    Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    arr.sort([compareFunction])

    По умолчани сортирует по Unicode таблице.
    Формула сортировки:
    
    function compare(a, b) {
      if (a меньше b по некоторому критерию сортировки) {
        return -1;
      }
      if (a больше b по некоторому критерию сортировки) {
        return 1;
      }
      // a должно быть равным b
      return 0;
    }

  */

  // let sortedCources = [...ITEA_COURSES].sort();
  // console.log( 'start:', ITEA_COURSES, 'sorted:', sortedCources)

  let nums = [1, 2, 10, 21, 32, 43, 54, 77, 99, 125];
  //     nums.sort();

  // console.log( 'Sorted Nums (default)', nums );

  // const compareIncrease = (a, b) => a - b;
  // nums.sort( compareIncrease );
  // console.log( 'Sorted Nums(increase)', nums );

  // const compareDescending = (a, b) => b - a;
  // nums.sort( compareDescending );
  // console.log( 'Sorted Nums(descending)', nums );

  // const items = [
  //   { name: 'Edward', value: 21 },
  //   { name: 'Sharpe', value: 37 },
  //   { name: 'And', value: 45 },
  //   { name: 'The', value: -15 },
  //   { name: 'Magnetic', value: -55 },
  //   { name: 'Zeros', value: 37 }
  // ];

  // let sortedItems = items.sort(function (a, b) {
  //   console.log('compare iteration:', a, b );
  //   if (a.value > b.value) {
  //     return 1;
  //   }
  //   if (a.value < b.value) {
  //     return -1;
  //   }
  //   // a должно быть равным b
  //   return 0;
  // });

  // console.log('sortedItems:', sortedItems)