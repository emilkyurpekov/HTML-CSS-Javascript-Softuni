window.addEventListener("load", solve);
 
function solve() {
 
    let del = document.querySelector('.delete');
 
    del.addEventListener('click', (e) => {
        location.reload();
    });
 
    const add = document.getElementById('add-btn');
 
    add.addEventListener('click',  (e) => {
        let preview = document.getElementById('preview-list');
        let liItem = document.createElement('li');
        liItem.classList.add('expense-item');
        let article = document.createElement('article');
 
        const expense = document.getElementById('expense');
        if (!expense.value) return;
        let pExpense = document.createElement('p');
        let expenseValue = expense.value;
        pExpense.textContent = `Type: ${expense.value}`;
        article.appendChild(pExpense);
 
        const amount = document.getElementById('amount');
        if (!amount.value) return;
        let pAmount = document.createElement('p');
        let amountValue = amount.value;
        pAmount.textContent = `Amount: ${amount.value}$`;
        article.appendChild(pAmount);
 
        const date = document.getElementById('date');
        if (!date.value) return;
        let pDate = document.createElement('p');
        let dateValue = date.value;
        pDate.textContent = `Date: ${date.value}`;
        article.appendChild(pDate);
 
        liItem.appendChild(article);
 
        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');
 
        let edit = document.createElement('button');
        edit.classList.add('btn');
        edit.classList.add('edit');
        edit.textContent = 'edit';
        buttonsContainer.appendChild(edit);
 
        let okButton = document.createElement('button');
        okButton.classList.add('btn');
        okButton.classList.add('ok');
        okButton.textContent = 'ok';
        buttonsContainer.appendChild(okButton);
 
        liItem.appendChild(buttonsContainer);
 
        preview.appendChild(liItem);
 
        expense.value = '';
        amount.value = '';
        date.value = '';
 
        add.disabled = true;
 
        edit.addEventListener('click', (e) => {
            expense.value = expenseValue;
            amount.value = amountValue;
            date.value = dateValue;
 
            add.disabled = false;
            preview.innerHTML = '';
        });
 
        okButton.addEventListener('click', (e) => {
            add.disabled = false;
            let li = document.createElement('li');
            li.classList.add('expense-item');
            let previewArticle = preview.querySelector('article');
            li.appendChild(previewArticle);
            let expensesList = document.getElementById('expenses-list');
            expensesList.appendChild(li);
            preview.innerHTML = '';
        });
    });
}