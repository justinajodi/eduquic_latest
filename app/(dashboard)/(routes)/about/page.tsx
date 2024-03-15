
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { StickyScrollRevealDemo } from "./_components/stickydemo";
export default async function AboutusPage() {
  const {userId}=auth();
  if (!userId){
    return redirect("/");
  }
  return (
    // <div className="h-full flex flex-col items-center justify-center p-6 space-y-4">
    //   <Image src="/aboutus.png" width={1000} height={5000} alt="Empty" />
    // </div>
    
      <StickyScrollRevealDemo/>
   
  )
}