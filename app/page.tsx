import BookList from "@/components/BookList";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllBook() {
  const books = await prisma.book.findMany({});
  return books;
}

async function Home() {
  const books = await getAllBook();

  return <BookList books={books} />;

  {
    /* new-book best-book-list author-list */
  }
}

export default Home;
