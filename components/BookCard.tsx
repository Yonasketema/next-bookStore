import Link from "next/link";

function BookCard({ book }) {
  return (
    <Link href={`book/${book.id}`}>
      <li className="bg-slate-50 max-w-max space-y-2">
        <img src={"yon.jpg"} className="sm:h-48 " alt="" />

        <div className="flex justify-between p-3">
          <p className="text-slate-800 font-light">{book.title}</p>
          <span className="text-slate-600">{book.rating} ⭐️</span>
        </div>
      </li>
    </Link>
  );
}

export default BookCard;
