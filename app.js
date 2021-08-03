const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.dynamic-list');
const count = document.querySelector('.count-list');
const deleteBtn = document.querySelectorAll('.cross');
const checkBtn = document.querySelectorAll('.circle');

let amount = 0;

// add a new list to do
form.addEventListener('submit', (e) => {
  e.preventDefault();
  amount++;
  let value = input.value;
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

  countList(amount);
});

// count number of list
const countList = () => {
  count.textContent = `${amount} items left`;
};

// delete the list targeted
deleteBtn.forEach((btn) => {
  console.log(btn);
  let id = btn.parentElement.dataset.id;
  btn.addEventListener('click', (e) => {
    if (e.target.parentElement.dataset.id === id) {
      e.target.parentElement.remove();
    }
  });
});

// completed the list targeted
checkBtn.forEach((btn) => {
  console.log(btn);
  let id = btn.parentElement.parentElement.dataset.id;
  btn.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('check')) {
      e.target.parentElement.parentElement.parentElement.classList.remove(
        'completed'
      );
    }
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

// clear completed
// enlever tous les completed des btns for each des circles

// all
// display all

// active
// filter avec class active

// completed
// filter avec class completed
