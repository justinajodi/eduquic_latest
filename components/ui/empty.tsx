import Image from "next/image";
import { MaskContainer } from "./mask";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    // <div className="h-full p-20 flex flex-col items-center justify-center">
    //   <div className="relative h-60 w-60">
    //     <Image src="/empty1.jpg" fill alt="Empty" />
    //   </div>
    //   <p className="text-muted-foreground text-sm text-center">
    //     {label}
    //   </p>
    // </div>

    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden ">
    <MaskContainer

      revealText={
        <p className="max-w-4xl mx-auto text-zinc-700 text-center  text-4xl font-bold ">
          Eduqic is the Best Tool to Upgrade your Learning process!
        </p>
      }
      className="h-[40rem] border rounded-md bg-zinc-900"
    >
      <span className="text-rose-500">Eduqic</span> is the Best Tool to Upgrade your <span className="text-rose-500">Learning</span> process!
    </MaskContainer>
  </div>
  );
};