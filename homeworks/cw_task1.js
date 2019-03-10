/*

  Данные: http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
  Задача.

  1.  Получить данные и в виде простой таблички вывести список компаний. Для начала используем поля:
      Company | Balance | Registered | Показать адресс | Кол-во employers | показать сотрудников

  2.  Сделать сортировку таблицы по количеству сотрудников и балансу. Сортировка должна происходить по клику
      на заголовок столбца

  3.  По клику на показать адресс должна собиратся строка из полей адресса и показываться на экран.

  4.  По клику на показать сотрудников должна показываться другая табличка формата:
      <- Назад к списку компаний | *Название компании*
      input
      Сотрудники:
      Name | Gender | Age | Contacts

  5.  В второй табличке долен быть реализован поиск сотрудников по их имени, а так же сортировка по
      полу и возрасту.

  Примечание: Весь код должен писатся с учетом синтаксиса и возмжность ES6.

*/

// document.addEventListener ('DOMContentLoaded', () => {

// var request = new XMLHttpRequest();

// var url = 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2';

// request.open ('GET', url, true);

// request.onload = () => {
//     var data = JSON.parse(this.response);
// }
// request.send();

// console.log(data);
// });

var url = 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2';

document.addEventListener('DOMContentLoaded', function () { 
  makeRequest(url, 'GET', null);


  // ПОКАЗАТЬ ТАБЛИЦУ ИЛИ АДРЕСС
  let tableEmp = document.getElementById('tableBase');

  // tableEmp.onclick = function (event) {
  //   if (event.target.cellIndex === 3){
  //     //АДРЕСС
  //     console.log(objDom[event.target.parentNode.rowIndex-1])
  //   }
  //   else if (event.target.cellIndex === 5){
  //     //СОТРУДНИКИ
  //     var tableEmp2 = document.getElementById('tableEmployers').children[1];
  //     var objDom2 = objDom[event.target.parentNode.rowIndex-1].employers;
  //     while (tableEmp2.firstChild){
  //       tableEmp2.removeChild(tableEmp2.firstChild);
  //     }
  //     for (key in objDom2){
  //       var node2 = document.createElement('tr');
  //       node2.innerHTML = `
  //           <td>${objDom2[key].name}</td>
  //           <td>${objDom2[key].age}</td>
  //           <td>${objDom2[key].gender}</td>
  //           <td>${objDom2[key].phones.join('<br/>')}</td>   
  //       `;
  //       tableEmp2.appendChild( node2 ); 
  //     };
  //   };
  // }

  let table = document.getElementById('tableBase');
  let rows = table.querySelectorAll('tr');
  console.log('table.rows', table , Array.from( rows ));



});

function doSomethingWithConent(httpRequest) {

  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var obj = JSON.parse(httpRequest.responseText);
      // ГЛАВНАЯ ТАБЛИЦА
      const mainTable = ()=>{
        let thead = document.getElementById('tableBase').querySelector('thead');
        let tbody = document.getElementById('tableBase').querySelectorAll('tbody')[0];
        let node = document.createElement('tr');
        node.innerHTML = `
          <th data-type="string">Company</th>
          <th data-type="string" onclick="sortTableBasse ()">Balance</th>
          <th data-type="string">Registered</th>
          <th data-type="string">Показать адресс</th>
          <th data-type="number" onclick="sortTableBasse ()">Кол-во employers</th>
          <th data-type="string">показать сотрудников</th>
        `;
        thead.appendChild( node );
        for (var key in obj){
          let node = document.createElement('tr');
          node.innerHTML = `
            <td>${obj[key].company}</td>
            <td>${obj[key].balance}</td>
            <td>${obj[key].registered}</td>
            <td>show</td>
            <td>${obj[key].employers.length}</td>
            <td onclick="secondTable()" style="cursor: pointer" onmouseover="this.style.background = 'silver'" onmouseout="this.style.background = ''">show</td>
          `;
          tbody.appendChild( node );
        }
      }
        mainTable ();
      // ВТОРАЯ ТАБЛИЦА
      // const secondTable = ()=>{
      //   const blockTable = document.querySelector('#blockSecondTable');
      //   console.log (blockTable);
      //   blockTable.innerHTML = `
      //     <span><- Назад к списку компаний</span><span>*Название компании*</span><br>
      //     <input type="text" name="find" id="inputFind" value="">
      //     <button onclick="">Find</button>
      //     <p>Сотрудники:</p>
      //   `;
      // }  
      
    } else if (httpRequest.status == 201) {
      var getUrl = url + '/' + JSON.parse(httpRequest.responseText).id;
      makeRequest(getUrl, "GET", null);
    }
    else {
      console.error('С запросом возникла проблема.');
    }
  }
}

function makeRequest(url, method, params) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }

  if (!httpRequest) {
    alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
    return false;
  }
  httpRequest.onreadystatechange = function () { doSomethingWithConent(httpRequest); };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
};

const secondTable = ()=>{
        const blockTable = document.querySelector('#blockSecondTable');
        console.log (blockTable);
        blockTable.innerHTML = `
          <span><- Назад к списку компаний</span><span>*Название компании*</span><br>
          <input type="text" name="find" id="inputFind" value="">
          <button onclick="">Find</button>
          <p>Сотрудники:</p>
        `;
      } 

// var rowsArray = Array.from(table.rows);
// var rowsArray = Array.prototype.slice.call(table.rows);
// var childsArr = [];

// for (var i = 0; i < table.rows.length; i++) {
// 	childsArr[i] = table.rows[i];
// }


// console.log(rowsArray);
// console.log(table.rows);


// function sortTableBasse () {
//   alert ("HI!");
// }



// var grid = document.getElementById('grid');

// grid.onclick = function(e) {
//       if (e.target.tagName != 'TH') return;

//       // Если TH -- сортируем
//       sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
//     };

// function sortGrid(colNum, type) {
//       var tbody = grid.getElementsByTagName('tbody')[0];

//       // Составить массив из TR
//       var rowsArray = [].slice.call(tbody.rows);

//       // определить функцию сравнения, в зависимости от типа
//       var compare;

//       switch (type) {
//         case 'number':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//           };
//           break;
//         case 'string':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
//           };
//           break;
//       }

//       // сортировать
//       rowsArray.sort(compare);
//       // rowsArray.sort((a,b)=>a.cells[colNum].innerHTML-b.cells[colNum].innerHTML);


//       // Убрать tbody из большого DOM документа для лучшей производительности
//       grid.removeChild(tbody);

//       // добавить результат в нужном порядке в TBODY
//       // они автоматически будут убраны со старых мест и вставлены в правильном порядке
//       for (var i = 0; i < rowsArray.length; i++) {
//         tbody.appendChild(rowsArray[i]);
//       }

//       grid.appendChild(tbody);

//     }