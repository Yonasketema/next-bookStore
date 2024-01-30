import db from "@/utils/db";
import BookList from "@/components/BookList";

async function getAllBook() {
  const books = await db.book.findMany({});
  return books;
}

async function Home() {
  const books = await getAllBook();

  return (
    <section className="p-8  h-screen">
      <BookList books={books} />
    </section>
  );

  {
    /* new-book best-book-list author-list */
  }
}

export default Home;
