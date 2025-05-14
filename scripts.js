const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};

function createTable() {
    var headers = ["Title", "Author", "Pages", "Read?", "ID", "Delete"];
    var table = document.createElement("table");
    table.setAttribute("id", "bookTable");

    for(i=0; i<myLibrary.length; i++) {
        const book = myLibrary[i];
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = myLibrary[i].title;
        row.insertCell(1).innerHTML = myLibrary[i].author;
        row.insertCell(2).innerHTML = myLibrary[i].pages;

        const readCell = row.insertCell(3);
        const readBtn = document.createElement("button");
        readBtn.innerText = book.read ? "Read" : "Unread";
        readBtn.setAttribute("data-id", book.id);
        readBtn.addEventListener("click", function () {
            const bookToToggle = myLibrary.find(b => b.id === this.getAttribute("data-id"));
            if (bookToToggle) {
                bookToToggle.toggleRead();
                document.querySelector("table").remove();
                createTable();
            }
        });
        readCell.appendChild(readBtn);

        row.insertCell(4).innerHTML = myLibrary[i].id;

        const deleteCell = row.insertCell(5);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.setAttribute("data-id", myLibrary[i].id);
        deleteBtn.addEventListener("click", function () {
            deleteBookById(this.getAttribute("data-id"));
        });
        deleteCell.appendChild(deleteBtn);
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(i=0; i<headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }

    document.body.insertBefore(table, document.body.childNodes[2]);
};

function deleteBookById(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
        document.querySelector("table").remove();
        createTable();
    }
};

function toggleReadStatus(id) {
    
}

createTable();

function handleNewButtonClick() {
    const newBookForm = document.createElement("form");
    newBookForm.innerHTML = `
    <h2>New Book</h2>
    <div id="titleDiv">
      <label for="title">Title</label>
      <input id="title" name="title">
    </div>
    <div id="authorDiv">
      <label for="author">Author</label>
      <input id="author" name="author">
    </div>
    <div id="pagesDiv">
      <label for="pages">Number of Pages</label>
      <input id="pages" name="pages" type="number">
    </div>
    <div id="readDiv">
      <label for="read">Have you read this book?</label>
      <input id="read" name="read" type="checkbox">
    </div>
    <button type="button" id="submit">Add Book</button>
  `;
  document.body.appendChild(newBookForm);
  document.querySelector("#newBook").remove();

    const submit = document.querySelector("#submit");
    submit.addEventListener("click", function() {
        addBookToLibrary(
            document.querySelector("#title").value,
            document.querySelector("#author").value,
            document.querySelector("#pages").value,
            document.querySelector("#read").checked
        );
        document.querySelector("form").remove();
        document.querySelector("table").remove();
        const newBook = document.createElement("button")
        newBook.setAttribute("id", "newBook");
        newBook.innerHTML = "New Book";
        createTable();
        document.body.appendChild(newBook);
        newBook.addEventListener("click", handleNewButtonClick);
    });
};

const newBook = document.querySelector("#newBook");
newBook.addEventListener("click", handleNewButtonClick);