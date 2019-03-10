/*
  Задание:
  1. При помощи методов изложеных в arrays.js , переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
  2. Самостоятельно изучить метод Array.sort. Отфильтровать массив ITEA_COURSES по алфавиту.
      + Бонусный бал. Вывести на страничку списком
  3. Реализация функции поиска по массиву ITEA_COURSES.
      + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.

*/

const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];

let ITEA_LENGTH = ITEA_COURSES.map( item => item.length);

console.log (ITEA_LENGTH);

ITEA_COURSES.sort();

ITEA_LENGTH = ITEA_COURSES.map( item => {
	iteaSort.innerHTML += `<li>${item}</li>`;
});

console.log (ITEA_COURSES);

const ITEM = item => item == document.getElementById('inputFind').value;

const FIND_ITEM = () => {
  let a = ITEA_COURSES.findIndex(ITEM);
  if (a > 0){
    document.getElementById('iteaSort').childNodes[a].style.color = "red";
    alert(`Найдено значение '${document.getElementById('inputFind').value}' в массиве ITEA_COURSES под индексом ${a}`);
    document.getElementById('inputFind').value = "";
    setTimeout(()=>document.getElementById('iteaSort').childNodes[a].style.color = "",5000);
  }
  else {alert(`Значение '${document.getElementById('inputFind').value}' не найдено`)}
};

