import React from "react";

function Review({ review }) {
  return (
    <li className="flex gap-3">
      <h6 className="font-semibold capitalize">{review.name}</h6>
      <p className="font-light text-slate-700">{review.review}</p>
    </li>
  );
}

export default Review;
