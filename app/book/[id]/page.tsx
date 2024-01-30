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
    <div>
      <h1 className="text-yellow-400 text-5xl capitalize">{book?.title} </h1>
    </div>
  );
}

export default Book;
