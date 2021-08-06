// getElement
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const count = document.querySelector('.count-list');
const clearAll = document.querySelector('.clear-all');
const list = document.querySelector('.dynamic-list');

// inital amount of list
let amount = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  amount++;
  let value = input.value;

  // create the new list

  // get new element
  const deleteBtn = document.querySelector('.cross');
  const checkBtn = document.querySelector('.circle');
  const uniqueList = document.querySelector('.single-list');

  // delete the list targeted
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {});
  });

  // complete the list tageted
  checkBtn.forEach((btn) => {
    const id = btn.parentElement.parentElement.dataset.id;
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('check')) {
        e.target.parentElement.parentElement.parentElement.classList.remove(
          'completed'
        );
      } else {
        if (e.target.parentElement.parentElement.dataset.id === id) {
          e.target.parentElement.parentElement.classList.toggle('completed');
        }
      }
    });
  });

  // update number of items
  countList(amount);

  // cleat all completed
  clearAll.addEventListener('click', () => {
    uniqueList.forEach((list) => {
      list.classList.remove('completed');
    });
  });

  // display the final list
});

// count number of list
const countList = () => {
  count.textContent = `${amount} items left`;
};

// refaire la partie de création de la list et afficher la list en fin

// all
// display all

// active
// filter les .single-list qui n'ont pas de class completed
// soit en utilisant un filter mais il faut que mes items soit dans un tableau ou avec un if contains

// click event sur le container des 3
// if(textcontent === 'all'), display = "block"
// if(textcontent === 'completed'), display all !classlist.contains display = "none"
// if(textcontent === 'completed'), display all classlist.contains display = "none"
