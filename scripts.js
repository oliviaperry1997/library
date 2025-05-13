const myLibrary = [
    {
        title: "The Communist Manifesto",
        author: "Karl Marx",
        pages: 288,
        read: true,
        id: "book1"
    },
    {
        title: "Imperialism, The Highest Stage of Capitalism",
        author: "Vladimir Lenin",
        pages: 192,
        read: true,
        id: "book2"
    },
    {
        title: "State and Revolution",
        author: "Vladimir Lenin",
        pages: 140,
        read: false,
        id: "book3"
    }
];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    new Book(title, author, pages, read);
};

function createTable() {
    var headers = ["Title", "Author", "Pages", "Read?", "ID"];
    var table = document.createElement("table");

    for(i=0; i<myLibrary.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = myLibrary[i].title;
        row.insertCell(1).innerHTML = myLibrary[i].author;
        row.insertCell(2).innerHTML = myLibrary[i].pages;
        row.insertCell(3).innerHTML = myLibrary[i].read;
        row.insertCell(4).innerHTML = myLibrary[i].id;
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(i=0; i<headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }

    document.body.insertBefore(table, document.body.childNodes[2]);
}

createTable();

const newBook = document.querySelector("#newBook");
newBook.addEventListener("click", function() {
    const newBookForm = document.createElement("form");
    document.body.appendChild(newBookForm);
    const newBookHeader = document.createElement("h2");
    newBookHeader.innerHTML = "New Book";
    document.querySelector("form").appendChild(newBookHeader);
    const newBookTitleLabel = document.createElement("label");
    newBookTitleLabel.setAttribute("for", "title");
    document.querySelector("form").appendChild(newBookTitleLabel);
    const newBookTitleInput = document.createElement("input");
    newBookTitleInput.setAttribute("id", "title");
    newBookTitleInput.setAttribute("name", "title");
    document.querySelector("form").appendChild(newBookTitleInput);
    const newBookAuthorLabel = document.createElement("label");
    newBookAuthorLabel.setAttribute("for", "author");
    document.querySelector("form").appendChild(newBookAuthorLabel);
    const newBookAuthorInput = document.createElement("input");
    newBookAuthorInput.setAttribute("id", "author");
    newBookAuthorInput.setAttribute("name", "author");
    document.querySelector("form").appendChild(newBookAuthorInput);
    const newBookPagesLabel = document.createElement("label");
    newBookPagesLabel.setAttribute("for", "pages");
    document.querySelector("form").appendChild(newBookPagesLabel);
    const newBookPagesInput = document.createElement("input");
    newBookPagesInput.setAttribute("id", "pages");
    newBookPagesInput.setAttribute("name", "pages");
    document.querySelector("form").appendChild(newBookPagesInput);
});