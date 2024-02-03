import Review from "./Review";

function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewList;
