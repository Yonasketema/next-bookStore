import Link from "next/link";

function BookCard({ book }) {
  return (
    <Link href={`book/${book.id}`}>
      <li className="max-w-max space-y-2 bg-slate-50 hover:shadow-lg">
        <img src={book.img} className="md:h-72" alt="" />

        <div className="flex flex-col justify-between space-y-2 p-3">
          <p className="text-sm font-semibold text-slate-800">{book.title}</p>
          <p className="font- font-light capitalize text-slate-500">
            by {book.author}
          </p>
          <span className="text-slate-600">{book.rating} ⭐️</span>
        </div>
      </li>
    </Link>
  );
}

export default BookCard;
