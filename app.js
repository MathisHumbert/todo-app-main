// getElement
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const count = document.querySelector('.count-list');
const list = document.querySelector('.dynamic-list');

const clearAll = document.querySelector('.clear-all');
const all = document.querySelector('.all-p');
const active = document.querySelector('.active-p');
const completed = document.querySelector('.completed-p');

const toggleImg = document.querySelector('.toggle-img');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const light = document.querySelectorAll('.light');
const dark = document.querySelectorAll('.dark');

const noList = document.querySelector('.no-list');

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
    amount = list.childElementCount - 1;
    countList();
  });

  // dislay completed
  completed.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'flex'));
    allList.forEach((list) => {
      if (!list.classList.contains('completed')) {
        list.style.display = 'none';
      }
    });
  });

  // display active
  active.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'flex'));
    allList.forEach((list) => {
      if (list.classList.contains('completed')) {
        list.style.display = 'none';
      }
    });
  });

  // display all
  all.addEventListener('click', () => {
    allList.forEach((list) => (list.style.display = 'flex'));
  });

  // display amount of items
  amount++;
  countList();

  // set back to default
  input.value = '';

  // display no list
  displayNoList(amount);
});

// Function disaply count
const countList = () => {
  count.textContent = `${amount} items left`;
};

// Function complete item
const completeItem = (e) => {
  const element = e.target.parentElement.parentElement;
  console.log(amount);
  if (e.target.parentElement.classList.contains('circle')) {
    e.target.parentElement.parentElement.parentElement.classList.remove(
      'completed'
    );
    amount++;
  } else {
    if (element.classList.contains('completed')) {
      element.classList.remove('completed');
      amount++;
    } else {
      element.classList.add('completed');
      amount--;
    }
  }
  countList();
};

// Function delete item
const deleteItem = (e) => {
  let parentValue = e.target.previousElementSibling.parentElement;
  console.log(parentValue);
  const element = e.target.parentElement;
  list.removeChild(element);
  if (parentValue.classList.contains('completed')) {
    countList();
    displayNoList(amount);
  } else {
    amount--;
    // changer ca
    countList();
    displayNoList(amount);
  }
};

// Function display All
const displayAll = () => {
  allList.forEach((list) => (list.style.display = 'flex'));
};

// Display message
const displayNoList = (amount) => {
  if (amount === 0 && noList.nextElementSibling === null) {
    noList.style.display = 'block';
  } else {
    noList.style.display = 'none';
  }
};
window.addEventListener('DOMContentLoaded', displayNoList(0));

// Color toggle
toggleImg.addEventListener('click', (e) => {
  const imgValue = e.target;
  if (imgValue.classList.contains('moon')) {
    moon.classList.remove('on');
    sun.classList.add('on');
    document.body.style.background = 'hsl(235, 21%, 11%)';
    document.body.classList.add('dark');
    light.forEach((light) => light.classList.remove('on'));
    dark.forEach((dark) => dark.classList.add('on'));
  }
  if (imgValue.classList.contains('sun')) {
    sun.classList.remove('on');
    moon.classList.add('on');
    document.body.style.background = 'hsl(0, 0%, 98%)';
    document.body.classList.remove('dark');
    light.forEach((light) => light.classList.add('on'));
    dark.forEach((dark) => dark.classList.remove('on'));
  }
});

console.log(noList.nextElementSibling);
