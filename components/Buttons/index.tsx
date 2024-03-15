"use client";
import React from "react";
import { useQuizConfig } from "@/store";

export default function Button() {
  const changeStatus = useQuizConfig((state:any) => state.changeStatus);
const handleStart = () => {
  changeStatus("start")
}
  return (
    <>
      <button
        onClick={handleStart}
        type="button"
        className="  m-auto  text-lg font-medium text-zinc-900 focus:outline-none bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-rose-700 dark:text-rose-500 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-700 dark:bg-zinc-800  dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700 py-4 px-10 w-1/2  "
      >
        Start
      </button>
    </>
  );
}
