function addItem() {
    const el = document.querySelector('#newItemText');
    const newEl = document.createElement('li');
    newEl.textContent = el.value;
    const ulList = document.querySelector('#items');
    ulList.appendChild(newEl)
}