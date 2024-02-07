"use client";
import { createBookReview } from "@/actions/actions";

function ReviewForm({ bookId }) {
  return (
    <form
      action={async (formData: FormData) => {
        await createBookReview(formData, bookId, "11e3211");
      }}
      className="mx-auto space-y-4 rounded-md p-8"
    >
      <div className="space-y-1">
        <label className="invisible" htmlFor="review">
          Email
        </label>
        <textarea
          id="review"
          name="review"
          placeholder=""
          className="h-20 w-full rounded border border-stone-300 px-4 py-2  text-sm font-light outline-stone-600"
        />
      </div>

      <button className="rounded-md border-2 border-current bg-yellow-800 px-2 py-1 text-white hover:bg-yellow-900">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
