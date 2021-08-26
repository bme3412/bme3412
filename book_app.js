// Book COnsturctor
function Book(title, author, source) {
    this.title = title;
    this.author = author;
    this.source = source;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    // Creeate tr element
    const row = document.createElement('tr');

    // INsert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.source}</td>
        <td><a href='#' class='delete'>X<a></td>
        `;

    list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    // timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)

}

// Delete Book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('source').value = '';
}

// Event listener to add book
document.getElementById('book-form').addEventListener('submit',function(e) {
    // get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    source = document.getElementById('source').value

    // Instantiate book
    const book = new Book(title, author, source);
 

    // Instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || source === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // SHow success
        ui.showAlert('Book Added!', 'success');

    // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    
    // Instantaitue UI
    const ui = new uI();

    ui.deleteBook(e.target);
    // SHow message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
}) 
