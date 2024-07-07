const books = [
    { title: "The Little Prince : Antoine de Saint Exupery", year: 1943 },
    { title: "Animal Farm: George Orwell", year: 1945 },
    { title: "The Count of Monte Cristo : Alexandre Dumas", year: 1844 },
    { title: "The Great Gatsby : F. Scott Fitzgerald", year: 1925 },
    { title: "Hamlet : William Shakespeare", year: 1623 }
];

console.log('Book Information:');
books.forEach(book => {
    console.log(`${book.title} - ${book.year}`);
});

document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    const bookInfo = document.getElementById('bookInfo');

    myButton.addEventListener('click', function() {
        if (bookInfo.textContent === '') {
            const bookList = books.map(book => `<li><strong>${book.title}</strong> - ${book.year}</li>`).join('');
            bookInfo.innerHTML = `<ul>${bookList}</ul>`;
            myButton.textContent = 'Hide Book Info';
            console.log('Book information is now displayed.');
        } else {
            bookInfo.textContent = '';
            myButton.textContent = 'Show Book Info';
            console.log('Book information is now hidden.');
        }
    });
});
