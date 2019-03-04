function addItem() {

  let text = document.getElementById('newItemText').value;
  let itemsListElement = document.getElementById('items');
  let li = document.createElement('li');

  li.textContent=text;

  itemsListElement.appendChild(li)

}