
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
    "You are ChatGPT, a large language model trained by OpenAI.",
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
    console.log("[CONVERSATION ERROR]", error);
    return new NextResponse("Internal Error!", { status: 500 });
  }
}











    
