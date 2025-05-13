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
    const newBookTitleDiv = document.createElement("div");
    newBookTitleDiv.setAttribute("id", "titleDiv");
    document.querySelector("form").appendChild(newBookTitleDiv);
    const newBookTitleLabel = document.createElement("label");
    newBookTitleLabel.innerHTML = "Title";
    newBookTitleLabel.setAttribute("for", "title");
    document.querySelector("#titleDiv").appendChild(newBookTitleLabel);
    const newBookTitleInput = document.createElement("input");
    newBookTitleInput.setAttribute("id", "title");
    newBookTitleInput.setAttribute("name", "title");
    document.querySelector("#titleDiv").appendChild(newBookTitleInput);
    const newBookAuthorDiv = document.createElement("div");
    newBookAuthorDiv.setAttribute("id", "authorDiv");
    document.querySelector("form").appendChild(newBookAuthorDiv);
    const newBookAuthorLabel = document.createElement("label");
    newBookAuthorLabel.innerHTML = "Author";
    newBookAuthorLabel.setAttribute("for", "author");
    document.querySelector("#authorDiv").appendChild(newBookAuthorLabel);
    const newBookAuthorInput = document.createElement("input");
    newBookAuthorInput.setAttribute("id", "author");
    newBookAuthorInput.setAttribute("name", "author");
    document.querySelector("#authorDiv").appendChild(newBookAuthorInput);
    const newBookPagesDiv = document.createElement("div");
    newBookPagesDiv.setAttribute("id", "pagesDiv");
    document.querySelector("form").appendChild(newBookPagesDiv);
    const newBookPagesLabel = document.createElement("label");
    newBookPagesLabel.innerHTML = "Number of Pages";
    newBookPagesLabel.setAttribute("for", "pages");
    document.querySelector("#pagesDiv").appendChild(newBookPagesLabel);
    const newBookPagesInput = document.createElement("input");
    newBookPagesInput.setAttribute("id", "pages");
    newBookPagesInput.setAttribute("name", "pages");
    document.querySelector("#pagesDiv").appendChild(newBookPagesInput);
    const newBookReadDiv = document.createElement("div");
    newBookReadDiv.setAttribute("id", "readDiv");
    document.querySelector("form").appendChild(newBookReadDiv);
    const newBookReadLabel = document.createElement("label");
    newBookReadLabel.innerHTML = "Have you read this book?";
    newBookReadLabel.setAttribute("for", "read");
    document.querySelector("#readDiv").appendChild(newBookReadLabel);
    const newBookReadInput = document.createElement("input");
    newBookReadInput.setAttribute("type", "checkbox");
    newBookReadInput.setAttribute("id", "read");
    newBookReadInput.setAttribute("name", "read");
    document.querySelector("#readDiv").appendChild(newBookReadInput);
    const newBookSubmitButton = document.createElement("button");
    newBookSubmitButton.innerHTML = "Submit"
    newBookSubmitButton.setAttribute("type", "button");
    document.querySelector("form").appendChild(newBookSubmitButton);
});