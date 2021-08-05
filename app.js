// getElement
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.dynamic-list');
const count = document.querySelector('.count-list');

// inital amount of list
let amount = 0;
let items = [];

// add a new list to do
form.addEventListener('submit', (e) => {
  e.preventDefault();
  amount++;
  let value = input.value;
  singleList(value, amount);

  // get new element
  const deleteBtn = document.querySelectorAll('.cross');
  const checkBtn = document.querySelectorAll('.circle');

  // delete the list targeted
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let id = e.target.parentElement.dataset.id;
      let deleteditem = items.filter(
        item,
        (index) => item[index].amount === id
      );
      console.log(deleteditem);
    });
  });
  // complete the list tageted
  checkBtn.forEach((btn) => {
    const id = btn.parentElement.parentElement.dataset.id;

    btn.addEventListener('click', (e) => {
      if (e.target.parentElement.parentElement.dataset.id === id) {
        e.target.parentElement.parentElement.classList.toggle('completed');
      }
    });
  });
  // update number of items
  countList(amount);
});

// create unique item
const singleList = (value, amount) => {
  let item = { value, amount, state: 'active' };
  items.push(item);

  let allItems = items
    .map((item) => {
      return `
    <div class="single-list active" data-id="${item.amount}">
              <div class="todo-info">
                <div class="circle">
                  <i class="fas fa-check check"></i>
                </div>
                <p>${item.value}</p>
              </div>
              <img src="./images/icon-cross.svg" class="cross" />
            </div>
    `;
    })
    .join('');
  list.innerHTML = allItems;
  input.value = '';
};

// count number of list
const countList = () => {
  count.textContent = `${amount} items left`;
};

// clear completed
// enlever tous les completed des btns for each des circles

// all
// display all

// active
// filter les .single-list qui n'ont pas de class completed
// soit en utilisant un filter mais il faut que mes items soit dans un tableau ou avec un if contains

// completed
// filter avec class completed

// bug completed a résoudre en cours
// click event sur le container des 3
// if(textcontent === 'all'), display = "block"
// if(textcontent === 'completed'), display all !classlist.contains display = "none"
// if(textcontent === 'completed'), display all classlist.contains display = "none"
