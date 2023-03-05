const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');

const makeListEl = ingredients.map((element) => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = element;
  listItemEl.classList.add('item');
  return listItemEl;
});

listEl.append(...makeListEl);