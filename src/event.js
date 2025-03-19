const books = [];

function lendBook(title, author, borrower, dueDate, category) {
    const book = { title, author, borrower, dueDate, category, returned: false };
    books.push(book);
    console.log(`📚 Book "${title}" lent to ${borrower}. Due: ${dueDate}`);
}

function categorizeBook(title, category) {
    const book = books.find((b) => b.title === title);
    if (book) {
        book.category = category;
        console.log(`📚 Book "${title}" categorized as ${category}`);
    } else {
        console.log(`❗ Book "${title}" not found.`);
    }
}

function viewBorrowedBooks(filter = {}) {
    return books.filter((book) =>
        Object.keys(filter).every((key) => book[key] === filter[key])
    );
}

module.exports = { lendBook, categorizeBook, viewBorrowedBooks };
