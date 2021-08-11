// getElement
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const count = document.querySelector('.count-list');
const list = document.querySelector('.dynamic-list');

const clearAll = document.querySelector('.clear-all');
const all = document.querySelector('.all-p');
const active = document.querySelector('.active-p');
const completed = document.querySelector('.completed-p');

// inital amount of list
let amount = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const textValue = input.value;

  // create the article element
  const element = document.createElement('article');
  element.classList.add('single-list');
  element.innerHTML = `
  <div class="todo-info">
    <div class="circle">
      <i class="fas fa-check check"></i>
    </div>
      <p>${textValue}</p>
  </div>
  <img src="./images/icon-cross.svg" class="cross" />
  `;
  // get the new btn
  const deleteBtn = element.querySelector('.cross');
  const completeBtn = element.querySelector('.circle');

  // delete
  deleteBtn.addEventListener('click', deleteItem);

  // complete
  completeBtn.addEventListener('click', completeItem);

  // display element
  list.appendChild(element);
  const allList = document.querySelectorAll('.single-list');

  // clear completed
  clearAll.addEventListener('click', () => {
    allList.forEach((list) => list.classList.remove('completed'));
  });

  // dislay completed
  completed.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'grid'));
    allList.forEach((list) => {
      if (!list.classList.contains('completed')) {
        list.style.display = 'none';
      }
    });
  });

  // display active
  active.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'grid'));
    allList.forEach((list) => {
      if (list.classList.contains('completed')) {
        list.style.display = 'none';
      }
    });
  });

  // display all
  all.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'grid'));
  });

  // display amount of items
  amount++;
  countList();

  // set back to default
  input.value = '';
});

// functions
const countList = () => {
  count.textContent = `${amount} items left`;
};

const completeItem = (e) => {
  const element = e.target.parentElement.parentElement;
  if (e.target.parentElement.classList.contains('circle')) {
    e.target.parentElement.parentElement.parentElement.classList.remove(
      'completed'
    );
  } else {
    element.classList.toggle('completed');
  }
};

const deleteItem = (e) => {
  const element = e.target.parentElement;
  list.removeChild(element);
  amount--;
  countList();
};

const displayAll = () => {
  allList.forEach((list) => (list.style.display = 'flex'));
};

if (amount === 0) {
}

// css
// ajouter qq chose si il n'y a pas de todo list
// enlever amount lorsque qu'on coche une case et vice versa
// cacher et montrer les crois en full screen

document.body.classList.add('dark');
document.body.style.background = 'hsl(235, 21%, 11%)';
