import React from "react";

function ReviewForm() {
  return (
    <form className="rounded-mdp-8 mx-auto space-y-4">
      <div className="space-y-1">
        <label className="invisible" htmlFor="review">
          Email
        </label>
        <input
          id="review"
          type="text"
          placeholder=""
          className="h-20 w-full rounded border border-stone-300 px-4 py-2 text-sm font-light outline-stone-600"
        />
      </div>

      <button className="rounded-md border-2 border-current bg-yellow-800 px-2 py-1 text-white hover:bg-yellow-900">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
