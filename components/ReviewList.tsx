import Review from "./Review";
import db from "@/utils/db";

async function getBookReview(id: string) {
  const reviews = await db.review.findMany({
    where: {
      bookId: id,
    },
  });
  return reviews;
}

async function ReviewList({ bookId }) {
  const reviews = await getBookReview(bookId);

  return (
    <ul className="space-y-3">
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewList;
