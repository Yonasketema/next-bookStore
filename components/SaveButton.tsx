"use client";

import { saveBook } from "@/actions/actions";
import { useTransition } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

function SaveButton({ bookId, userId }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div onClick={() => startTransition(() => saveBook(bookId, userId))}>
      {isPending ? (
        <BiLoaderAlt size={21} className="animate-spin" />
      ) : (
        <BsBookmark size={32} />
      )}
    </div>
  );
}

export default SaveButton;
