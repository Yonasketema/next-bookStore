import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <ul className="sm:grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 sm:gap-9">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
