"use server";

import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function createBookReview(
  formData: FormData,
  bookId: string,
  userId: string,
) {
  const review_text = formData.get("review");

  await db.review.create({
    data: {
      review: review_text as string,
      bookId,
      userId,
    },
  });

  revalidatePath(`/book/${bookId}`);
}
