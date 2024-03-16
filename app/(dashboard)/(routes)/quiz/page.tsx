import DropdownOptions from "@/components/DropdownOptions";
import InputBox from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";

import Link from "next/link";
export default function Quiz() {
  return (
    <div className="flex flex-col justify-center items-center ml-20 mt-20">

        <h1 className="mb-4 text-4xl font-extrabold  text-zinc-800 md:text-5xl lg:text-6xl dark:text-white">
        Test Yourself !
      </h1>
      <div className="p-10 my-10   justify-center items-center rounded-lg shadow-xl w-[65%]">
        <InputBox />
        <DropdownOptions />
        <Link  href={`/quiz/quizy`} className="flex items-center justify-center">
          <Button  size="lg" className="">start</Button>
        </Link>
      </div>
    </div>
  );
}

