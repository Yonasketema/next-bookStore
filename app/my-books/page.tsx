import BookList from "@/components/BookList";
import db from "@/utils/db";
async function savedBooks(userId: string) {
  const books = await db.book.findMany({
    where: {
      savedBooks: {
        some: {
          userId,
        },
      },
    },
  });

  return books;
}

async function Page() {
  const books = await savedBooks("11e3211");

  return (
    <section className="px-14 py-7">
      {books.length > 1 ? <BookList books={books} /> : <h1>save man</h1>}
    </section>
  );
}

export default Page;
