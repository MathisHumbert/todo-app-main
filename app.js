const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.dynamic-list');
const count = document.querySelector('.count-list');

let amount = 0;

// add a new list to do
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = input.value;
  let content = document.createElement('div');
  content.classList.add('single-list', 'active');
  content.innerHTML = `
              <div class="todo-info">
                <div class="circle">
                  <i class="fas fa-check check"></i>
                </div>
                <p>${value}</p>
              </div>
              <img src="./images/icon-cross.svg" alt="" />
  `;
  list.appendChild(content);
  input.value = '';
  amount++;
  countList(amount);
});

// count number of list
const countList = () => {
  count.textContent = `${amount} items left`;
};

// delete the list targeted
// foreach des btn avec un data id

// completed the list targeted
// foreach des circles avec un data id

// clear completed
// enlever tous les completed des btns for each des circles

// all
// display all

// active
// filter avec class active

// completed
// filter avec class completed
