let form =document.querySelector('form');
let itemsList = document.querySelector('#items-list');
let icons = document.querySelectorAll('li');


const countItems = () => {
    let count = document.querySelector('#count');
    count.textContent = itemsList.children.length;
}
const deleteItem = e => {
    let item = e.target.parentNode.parentNode;
    itemsList.removeChild(item);
    countItems();
}
icons.forEach(icon => {
    icon.addEventListener('click', deleteItem);
})

const addItem = e => {
    e.preventDefault();
    let newItem = document.querySelector('#new-item');
    if(newItem.value.length){
        let li = document.createElement('li');
        let span = document.createElement('span');
        let icon = document.createElement('i');
        icon.classList.add("fa-solid");
        icon.classList.add("fa-trash-can");
        li.className = 'item';
        li.textContent = newItem.value;
        icon.addEventListener('click', deleteItem);
        span.appendChild(icon);
        li.appendChild(span);
        itemsList.appendChild(li);
        countItems();
        form.reset(); 
    }
}



form.addEventListener('submit', addItem);
countItems();
 


// delete 






//console.log(document.all);

//selecting an elements by Tagname
//let header = document.getElementsByTagName('header')
//let header = document.querySelector('header');
//let title = document.querySelector('h1');



//console.log(title.innerHTML);
//console.log(title.innerText);
//console.log(title.textContent);
//console.log(title.value);

// slecting elements by class name
//let li = document.getElementsByClassName('.item');
//let lis = document.querySelectorAll('.item');

//console.log(lis[0]);

/*count = 1

for(let li of lis) {
    li.textContent = count;
    count++;
}
console.log(lis);
*/



// selecting an element  by id
//let items = document.getElementById('items');
//let items = document.querySelector('#items');

//selecting element by name
//let newItem = document.getElementsByName('item-input');
//let newItem = document.querySelector("input[name = 'item-input']");
//let submitBtn = document.querySelector("input[type = 'submit']");

//let button = document.createElement('button');
//button.textContent = 'Send Message';
//button.style.backgroundColor = '#000000';
//button.style.color = '#fff';

//items.appendChild(button);

//items.removeChild(button);



