"use client";

import { unSaveBook } from "@/actions/actions";
import { useTransition } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

function UnSaveButton({ id, bookId }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div onClick={() => startTransition(() => unSaveBook(id, bookId))}>
      {isPending ? (
        <BiLoaderAlt size={21} className="animate-spin" />
      ) : (
        <BsFillBookmarkFill size={32} />
      )}
    </div>
  );
}

export default UnSaveButton;
