class Library {
    #books;

    constructor(initialBooks = []) {
        const uniqueBooks = [...new Set(initialBooks)];
        this.#books = uniqueBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга с названием "${title}" уже существует в списке.`);
        }
        this.#books.push(title);
        this.displayBooks();
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книги с названием "${title}" нет в списке.`);
        }
        this.#books.splice(index, 1);
        this.displayBooks();
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    displayBooks() {
        const libraryInfo = document.getElementById('libraryInfo');
        libraryInfo.innerHTML = '<h2>Список книг:</h2><ul>';
        this.#books.forEach(book => {
            libraryInfo.innerHTML += `<li>${book}</li>`;
        });
        libraryInfo.innerHTML += '</ul>';
    }
}

const library = new Library(['Книга1', 'Книга2', 'Книга3']);
library.displayBooks();

// Пример использования методов класса Library
try {
    library.addBook('Книга4');
    library.removeBook('Книга2');
} catch (error) {
    console.error(error.message);
}