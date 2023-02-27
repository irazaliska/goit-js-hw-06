const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

ingredients.forEach(item => {

const listItemEl = document.createElement('li');
listItemEl.textContent = item;
listItemEl.classList.add('item');
listEl.append(listItemEl);

});

console.log(listEl)