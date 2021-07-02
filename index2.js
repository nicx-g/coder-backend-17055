class User {
    constructor({ name, surname, books, pets }) {
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }
    getFullName = () => `${this.name} ${this.surname}`;
    getPets = () => this.pets.length;
    getBooks = () => {
        let booksName = [];
        this.books.map((book) => booksName.push(book.name));
        return booksName;
    };
    addPet = (pet) => this.pets.push(pet);
    addBook = ({ book, author }) => this.books.push({ name: book, author });
}

const user = new User({
    name: "Nicolás",
    surname: "Gomez",
    books: [
        {
            name: "Book 1",
            author: "Author 1",
        },
        {
            name: "Book 2",
            author: "Author 2",
        },
        {
            name: "Book 3",
            author: "Author 3",
        },
    ],
    pets: ["Gato", "Perro"],
});

user.addBook({ book: "Book 4", author: "Author 4" });
user.addPet("Conejo");
console.log(user.getFullName());
console.log(user.getBooks());
console.log(user.getPets());
