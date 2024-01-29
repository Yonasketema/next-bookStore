import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <ul className="sm:grid sm:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
