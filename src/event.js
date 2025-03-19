const books = [];

function lendBook(title, author, borrower, dueDate) {
    const book = { title, author, borrower, dueDate, returned: false };
    books.push(book);
    return book;
}
function categorizeBook(title, category) {
    const book = books.find(b => b.title === title);
    if (book) book.category = category;
}
function filterBooks(criteria) {
    return books.filter(book => {
        return Object.keys(criteria).every(key => book[key] === criteria[key]);
    });
}
