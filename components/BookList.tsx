import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <ul className="grid-cols-2 sm:grid sm:grid-cols-3 sm:gap-9 md:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
