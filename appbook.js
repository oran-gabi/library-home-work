const init = () => {
    let book_ar = [
        {"Name":"Jhon","Date":"2024-05-01","Title And Author":"The wonderful wizard of Oz by Baum, L. Frank","contact":"jhon@gmail.com"},
        {"Name":"Deer","Date":"2024-05-03","Title And Author":"The three-body problem by Liu Cixim","contact":"jhondeer@gmail.com"},
        {"Name":"Messi","Date":"2024-03-05","Title And Author":"The Housemaid Add to Wishlist The Housemaid by Freida McFadden","contact":"num10@gmail.com"},
        {"Name":"mario","Date":"2024-03-05","Title And Author":"THE WOMEN by Kristin Hannah","contact":"mario@gmail.com"},
        {"Name":"Jhony","Date":"2023-12-05","Title And Author":"THE BACKYARD BIRD CHRONICLES  by Amy Tan","contact":"jhony@gmail.com"},
        {"Name":"toni","Date":"2024-05-05","Title And Author":"Dune by Frank Herbert","contact":"toni@gmail.com"},

    ];

    let tbody = document.getElementById('id_tbody');

    book_ar.forEach((book, index) => {
        let row = tbody.insertRow();
        let cellNum = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellDate = row.insertCell(2);
        let cellTitleAuthor = row.insertCell(3);
        let cellContact = row.insertCell(4);
        let cellDelete = row.insertCell(5);

        cellNum.innerHTML = index + 1;
        cellName.innerHTML = book.Name;
        cellDate.innerHTML = book.Date;
        cellTitleAuthor.innerHTML = book['Title And Author'];
        cellContact.innerHTML = book.contact;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            // Delete the parent row of the clicked delete button
            let rowToDelete = deleteButton.parentNode.parentNode;
            tbody.deleteRow(rowToDelete.rowIndex);
        });
        cellDelete.appendChild(deleteButton);
    });
}

init();
