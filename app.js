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
  // let item = { value, state: 'active' };
  // items.push(item);

  // get new element
  const deleteBtn = document.querySelectorAll('.cross');
  const checkBtn = document.querySelectorAll('.circle');

  // delete the list targeted
  deleteBtn.forEach((btn) => {
    let id = btn.parentElement.dataset.id;
    btn.addEventListener('click', (e) => {
      if (e.target.parentElement.dataset.id === id) {
        e.target.parentElement.remove();
        amount--;
      }
      countList(amount);
    });
  });
  // complete the list tageted
  completeUniqueBtn(checkBtn);
  // update number of items
  countList(amount);
  console.log(items);
});

// create unique item
const singleList = (value, amount) => {
  let content = document.createElement('div');
  content.classList.add('single-list', 'active');
  content.setAttribute('data-id', amount);
  content.innerHTML = `
              <div class="todo-info">
                <div class="circle">
                  <i class="fas fa-check check"></i>
                </div>
                <p>${value}</p>
              </div>
              <img src="./images/icon-cross.svg" class="cross" />
  `;
  list.appendChild(content);
  input.value = '';
};

// count number of list
const countList = () => {
  count.textContent = `${amount} items left`;
};

// completed the list targeted
const completeUniqueBtn = (item) => {
  item.forEach((btn) => {
    let id = btn.parentElement.parentElement.dataset.id;
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('check')) {
        e.target.parentElement.parentElement.parentElement.classList.remove(
          'completed'
        );
      }
      console.log(id);
      console.log(e.target.parentElement.parentElement);
      console.log(
        e.target.parentElement.parentElement.classList.contains('completed')
      );
      if (e.target.parentElement.parentElement.dataset.id === id) {
        if (
          e.target.parentElement.parentElement.classList.contains('completed')
        ) {
          e.target.parentElement.parentElement.classList.remove('completed');
        } else {
          e.target.parentElement.parentElement.classList.add('completed');
        }
      }
    });
  });
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

// bug completed a résoudre
// click event sur le container des 3
// if(textcontent === 'all'), display = "block"
// if(textcontent === 'completed'), display all !classlist.contains display = "none"
// if(textcontent === 'completed'), display all classlist.contains display = "none"
