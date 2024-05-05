const init = () => {
    declarViewEvent();
    populateBookList();
}

const declarViewEvent = () => {
    let form = document.querySelector("#id_form");
    form.addEventListener("submit",(e) => {
        e.preventDefault();

        let bookObj = {
            name:document.querySelector("#name").value,
            date:document.querySelector("#date").value,
            contact:document.querySelector("#contact").value,
            book:document.querySelector("#book").value,
        }

        if (bookObj.name.length < 2){
            return alert("Name too short, minimum 2 characters");
        }
        
        let local_ar = localStorage["book"] ? JSON.parse(localStorage["book"]) : [];
        local_ar.push(bookObj);
        localStorage.setItem("book", JSON.stringify(local_ar));
        populateBookList();
    });
}

const populateBookList = () => {
    let tbody = document.getElementById('id_tbody');
    tbody.innerHTML = '';

    let local_ar = localStorage["book"] ? JSON.parse(localStorage["book"]) : [];

    local_ar.forEach((book, index) => {
        let row = tbody.insertRow();
        let cellNum = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellDate = row.insertCell(2);
        let cellTitleAuthor = row.insertCell(3);
        let cellContact = row.insertCell(4);
        let cellDelete = row.insertCell(5);

        cellNum.innerHTML = index + 1;
        cellName.innerHTML = book.name;
        cellDate.innerHTML = book.date;
        cellTitleAuthor.innerHTML = book.book;
        cellContact.innerHTML = book.contact;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            let rowToDelete = deleteButton.parentNode.parentNode;
            tbody.deleteRow(rowToDelete.rowIndex);

            // Remove the deleted item from local storage
            local_ar.splice(index, 1);
            localStorage.setItem("book", JSON.stringify(local_ar));
        });
        cellDelete.appendChild(deleteButton);
    });
}

init();
