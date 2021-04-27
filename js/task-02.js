//В HTML есть пустой список ul#ingredients.
//<ul id="ingredients"></ul>
//В JS есть массив строк.
//const ingredients = [
//  'Картошка',
//  'Грибы',
//  'Чеснок',
//  'Помидоры',
// 'Зелень',
//  'Приправы',
//];
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients. 
//Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*const ulList = document.createElement('ul');
ulList.id = 'ingredients';
ulList.textContent = "Ингредиенты:";*/

/*const li1 = document.createElement('li');
 li1.textContent = ingredients[0];
 const li2 = document.createElement('li');
 li2.textContent = ingredients[1];
 const li3 = document.createElement('li');
 li3.textContent = ingredients[2];
 const li4 = document.createElement('li');
 li4.textContent = ingredients[3];
 const li5 = document.createElement('li');
 li5.textContent = ingredients[4];
 const li6 = document.createElement('li');
 li6.textContent = ingredients[5];


ulList.append(li1, li2, li3, li4, li5, li6);
document.body.appendChild(ulList);*/

const ulList = document.createElement('ul');
ulList.querySelector("#ingredients");
ulList.textContent = "Ингредиенты:";
console.log(ulList);

const createIngredientsList = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  return liItem;
  
});

ulList.append(...createIngredientsList);
document.body.appendChild(ulList);