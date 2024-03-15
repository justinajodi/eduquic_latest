"use client";
import * as z from "zod";
import axios from "axios";
import { Heading } from "@/components/heading";
import { useRouter } from "next/navigation";
import { Edit, Layers, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatCompletionAssistantMessageParam, ChatCompletionFunctionMessageParam, ChatCompletionMessageParam, ChatCompletionSystemMessageParam, ChatCompletionToolMessageParam } from "openai/resources/index.mjs";
import { Empty } from "@/components/ui/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { CopyText} from "./_components/copytext";

import { BotAvatar } from "@/components/bot-avatar";
import { Player } from "@lottiefiles/react-lottie-player";
const ConvesationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  //LOADING STATE
  const isLoading = form.formState.isSubmitting;

  //SUBMIT EVENT
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("api/summarizer", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      //OPEN PRO MODEL
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  // const ct = async (messages:ChatCompletionSystemMessageParam | ChatCompletionAssistantMessageParam | ChatCompletionToolMessageParam | ChatCompletionFunctionMessageParam) => {
  //   navigator.clipboard.writeText(String(messages));
  // }
  const ct = async (response:string) => {
    navigator.clipboard.writeText(response);
  }
  return (
    <div className="mt-8">
      <Heading
        title="Summarize"
        description="Our Most Advanced Quill Bot Summarizer"
        icon={Layers}
        iconColor="text-rose-500"
        bgColor="bg-rose-100 dark:bg-rose-100/10"
      />
      <div className="px-4 mt-8  lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus:visible:ring-0 focus:visible:ring-transparent placeholder:text-zinc-500"
                        placeholder="Summarize ..."
                        disabled={isLoading}
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 flex justify-center self-center lg:ml-3">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 lg:p-16 rounded-lg w-full flex items-center justify-center ">
          {/* <Player
            src="https://lottie.host/2a6aa73d-b121-4e4a-b22f-02f128babf56/1aOWrroGgr.json"
            // src="https://lottie.host/b8b9d004-cd30-48b6-80c2-4d675b0ecfad/Fdf80rWWfq.json"
            background="white" style={{ height: "200px", width: "200px" }} loop autoplay
          
          /> */}
          <Loader/>
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No Chat Found!" />
          )}
          <div className="flex flex-col-reverse gap-y-4 ">
            {messages.map((message) => (
              <div
                key={message.content as string}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg  ",
                  message.role === "user"
                    ? "bg-white dark:bg-black"
                    : "bg-muted "
                )}
              >
               
                {message.role === "user" ? <UserAvatar /> :""}
                
                <p className="text-lg font-medium text-zinc-700 dark:text-zinc-50">{message.content as string }</p>
              </div>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvesationPage;
