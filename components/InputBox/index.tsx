"use client"
import { useQuizConfig } from '@/store'
import React from 'react'


export default function InputBox() {
    const addQuestionNumber = useQuizConfig((state:any)=>state.addQuestionNumber)

  return (
<><div className="relative">
Number of questions
    <input type="number" defaultValue={10} max={50} min={10} onChange={(e:React.FormEvent<HTMLInputElement>)=>addQuestionNumber(e.currentTarget.value??'')} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-lg font-medium text-zinc-900 bg-zinc-100 rounded-lg border-1 border-zinc-300 appearance-none dark:text-zinc-800 dark:border-zinc-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-600 peer" placeholder=" " />
   
</div></>  )
}
