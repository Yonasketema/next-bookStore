import React from "react";

function Review({ review }) {
  return (
    <li className="flex items-center gap-3">
      <div className="flex h-12 w-12  items-center justify-center rounded-full bg-yellow-700">
        Y
      </div>
      <h6 className="font-semibold capitalize">
        {review.name || "yonas ketema"}
      </h6>
      <p className="font-light text-slate-700">{review.review}</p>
    </li>
  );
}

export default Review;
