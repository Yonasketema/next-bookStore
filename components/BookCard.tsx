function BookCard({ book }) {
  return (
    <li className="px-2 py-1 bg-slate-50 max-w-max space-y-2">
      <img src={"yon.jpg"} className="h-24 sm:h-52" alt="" />
      <p>{book.title}</p>
      <div className="flex justify-between">
        <p>{book.author}</p>
        <span>{book.rating} ⭐️</span>
      </div>
    </li>
  );
}

export default BookCard;
