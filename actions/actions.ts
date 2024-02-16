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
      user_name: "yonask",
    },
  });

  revalidatePath(`/book/${bookId}`);
}
export async function saveBook(bookId: string, userId: string) {
  await db.savedBook.create({
    data: {
      bookId,
      userId,
    },
  });

  revalidatePath(`/book/${bookId}`);
}
export async function unSaveBook(id: string, bookId: string) {
  await db.savedBook.delete({
    where: {
      id,
    },
  });

  revalidatePath(`/book/${bookId}`);
}
