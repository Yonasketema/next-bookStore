import Image from "next/image";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import db from "@/utils/db";

async function getBook(id: string) {
  const book = await db.book.findUnique({
    where: {
      id: id,
    },
  });
  return book;
}

async function Book({ params }) {
  const book = await getBook(params.id);

  return (
    <section className="px-14 py-7">
      <div className="flex justify-between gap-10">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h1 className="mb-4 text-5xl capitalize text-slate-900">
              {book?.title}
            </h1>
            <span className="text-yellow-800 hover:text-yellow-900 ">
              {book?.rating > 4 ? (
                <BsFillBookmarkFill size={32} />
              ) : (
                <BsBookmark size={32} />
              )}
            </span>
          </div>
          <p className="text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            corporis corrupti ipsam provident quidem numquam! Modi voluptatibus
            quisquam tempore amet, quis quod deserunt placeat, labore iure nihil
            culpa, dolorum hic.
          </p>
          <p className="text-slate-600">{book?.genre}</p>
          <p className="text-slate-600">{book?.author}</p>
          <p className="text-slate-900">{book?.rating} ⭐️</p>
        </div>
        <Image src={book?.img} width={560} height={680} />
      </div>

      <div>Review</div>
    </section>
  );
}

export default Book;
