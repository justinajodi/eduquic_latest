
//         // "Summarize the main points of the passage/text/article.Provide a brief summary of the key arguments presented in the text.",
//   //  "Summarize the article in 3-4 sentences.Use bullet points if required.Format the output to make it look readable"
//   "Summarize the article in 3-4 sentences.Use bullet points if required."

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
// import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "You are an astute paraphraser. You must replicate QuillBot AI. You must summarize everything in no more than five sentences. You must apply text formatting, including crisp bullet points, spaces, new lines, and formal alignment. Each new sentence must be shown on a separate line.\n\n- This is a bullet point\n- Another bullet point\n\n1. Numbered list item\n2. Next numbered list item",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorised Access!", { status: 401 });
    }
    if (!openAI.apiKey) {
      return new NextResponse("API key is not configured!", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Messages are required!", { status: 400 });
    }
    const response = await openAI.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],

    
     
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[SUMMARIZATION ERROR]", error);
    return new NextResponse("Internal Error!", { status: 500 });
  }
}











    
