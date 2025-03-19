const { lendBook, categorizeBook, viewBorrowedBooks } = require("./events");

lendBook("2004", "Ali Rizwan", "AR", "2025-03-11", "Adventure");
lendBook("personal persona", "Ali Rizwan", "AR", "2004-01-12", "Software Construction and Development");

categorizeBook("2004", "Ali");

console.log("📚 Books in Adventure:", viewBorrowedBooks({ category: "Adventure" }));

console.log("📚 Books borrowed by Ali:", viewBorrowedBooks({ borrower: "Ali" }));
