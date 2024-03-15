"use client";
import { cn } from "@/lib/utils";
import { useQuizConfig } from "@/store";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@/components/ui/button";

type questionT = {
  answers: string[];
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  type: string;
};
export default function Quizy() {
  const [questions, setQuestions] = useState<any>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const config = useQuizConfig((state: any) => state.config);
  const setScore = useQuizConfig((state: any) => state.setScore);
  function decode(text: string) {
    const tag = document.createElement("p");
    tag.innerHTML = text;
    return tag.innerHTML;
  }
  useEffect(() => {
    async function getQuestions() {
      setLoading(true);
      const api_url=`https://opentdb.com/api.php?amount=${config.numberOfQuestion}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
      const { results } = await(await fetch(api_url)).json();
      let shuffledResults = results.map((e: questionT) => {
        let value = [...e.incorrect_answers, e.correct_answer]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        e.answers = [...value];
        return e;
      });
      console.log(shuffledResults, "shuffeled");
      setQuestions([...shuffledResults]);
      setLoading(false);
    }
    getQuestions();
  }, [config.category, config.level, config.numberOfQuestion, config.type]);

  const answerCheck = (ans: string) => {
    if (ans === questions[0].correct_answer) {
      setScore();
    }
    setAnswer(questions[0].correct_answer);
  };
  const handleNext = () => {
    let remainingQuestions = [...questions];
    remainingQuestions.shift();
    setQuestions([...remainingQuestions]);
    setAnswer("");
  };

  return (
    <section className="flex flex-col justify-center items-center p-20 ">
      {questions?.length ? (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-white">
          Question No{" "}
          <span className="text-rose-600 dark:text-rose-500">
            #{config.numberOfQuestion - questions.length + 1}
          </span>
          .
        </h1>
      ) : null}
      {loading && (
        <div className="flex flex-col">
          <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm" />
          <Skeleton className="w-[600px] h-[500px] rounded-sm" />
        </div>
      )}

      {!loading && !!questions?.length && (
        <p className="text-2xl ">Score: {config.score}</p>
      )}

      {!questions?.length && !loading && (
        <div className="flex flex-col justify-center items-center ">
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_touohxv0.json"
            className="player"
            loop
            autoplay
            style={{ height: "400px", width: "400px" }}
          />
          <h1 className=" mb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Your Score :{" "}{config.score}

          </h1>
          <Button
            onClick={() => {
              window.location.reload();
            }}
        
          >
            Start Again
          </Button>
        </div>
      )}

      {!questions && <p>loading...</p>}
      {!!questions && !!questions?.length && (
        <section className="shadow-2xl mt-2 mb-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-zinc-200   dark:shadow-md dark:shadow-rose-500/50">
          <h4 className="mb-4 text-center  text-lg font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl  text-zinc-900 dark:text-zinc-100">
            {decode(questions[0].question)}
          </h4>
          <div className="flex justify-evenly items-center w-full mt-10 mb-10 flex-wrap">
            {questions[0].answers.map((e: string) => {
              return (
                <button
                  key={e}
                  onClick={() => answerCheck(e)}
                  className={cn(
                    "w-[40%] my-4 bg-zinc-200 dark:bg-zinc-50 hover:bg-zinc-500 dark:hover:bg-zinc-50 hover:text-zinc-100 dark:hover:text-zinc-800  text-zinc-800 font-semibold py-4 px-4 shadow-zinc-200  dark:shadow-none dark:shadow-white/10 rounded-lg shadow-2xl",
                    {
                      "bg-emerald-600 dark:bg-emerald-500": !!answer && answer === e,
                      "bg-red-600 dark:bg-red-500": !!answer && answer !== e,
                      "hover:bg-emerald-600 dark:bg-emerald-500": !!answer && answer === e,
                      "hover:bg-red-600 dark:bg-red-500": !!answer && answer !== e,
                      "text-white dark:text-white": !!answer,
                    }
                  )}
                >
                  {decode(e)}
                </button>
              );
            })}
          </div>

          <Button onClick={handleNext} className="text-2xl font-light p-4">
            Next
          </Button>
        </section>
      )}
    </section>
  );
}
