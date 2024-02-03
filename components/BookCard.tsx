import Link from "next/link";

function BookCard({ book }) {
  return (
    <Link href={`book/${book.id}`}>
      <li className="max-w-max space-y-2 bg-slate-50 hover:shadow-lg">
        <img src={book.img} className="sm:h-48 " alt="" />

        <div className="flex justify-between p-3">
          <p className="font-light text-slate-800">{book.title}</p>
          <span className="text-slate-600">{book.rating} ⭐️</span>
        </div>
      </li>
    </Link>
  );
}

export default BookCard;
