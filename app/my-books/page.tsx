import BookList from "@/components/BookList";
import db from "@/utils/db";

async function savedBooks(userId: string) {
  const books = await db.savedBook.findMany({
    where: {
      userId,
    },
    include: {
      book: true,
    },
  });

  return books;
}

async function Page() {
  const data = await savedBooks("11e3211");

  const books = data.map((book) => book.book);

  return (
    <section className="px-14 py-7">
      {books.length > 0 ? <BookList books={books} /> : <h1>save man</h1>}
    </section>
  );
}

export default Page;
