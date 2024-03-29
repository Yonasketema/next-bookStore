import Image from "next/image";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import db from "@/utils/db";
import ReviewForm from "@/components/ReviewForm";
import ReviewList from "@/components/ReviewList";
import SaveButton from "@/components/SaveButton";
import UnSaveButton from "@/components/UnSaveButton";

async function getBook(id: string) {
  const book = await db.book.findUnique({
    where: {
      id: id,
    },
  });
  return book;
}

async function savedBook(userId: string, bookId: string) {
  const saved = await db.savedBook.findFirst({
    where: {
      userId,
      bookId,
    },
  });

  return saved;
}

async function Book({ params }) {
  const book = await getBook(params.id);
  const saved = await savedBook("11e3211", book?.id as string);

  return (
    <section className="mb-7 px-14 py-7">
      <div className="mb-7 flex justify-between gap-10">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h1 className="mb-4 text-5xl capitalize text-slate-900">
              {book?.title}
            </h1>
            <span className="flex h-12 w-10   items-center justify-center border text-yellow-800 hover:text-yellow-900 ">
              {Boolean(saved) ? (
                <UnSaveButton
                  id={saved?.id as string}
                  bookId={book?.id as string}
                />
              ) : (
                <SaveButton userId="11e3211" bookId={book?.id as string} />
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

      <ReviewList bookId={book?.id} />
      <ReviewForm bookId={book?.id} />
    </section>
  );
}

export default Book;
