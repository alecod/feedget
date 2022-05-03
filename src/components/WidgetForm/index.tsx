import { useState } from "react";

import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import lightImageUrl from "../../assets/light.svg";
import boxImageUrl from "../../assets/box.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  ideia: {
    title: "Ideia",
    image: {
      source: lightImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  other: {
    title: "Outro",
    image: {
      source: boxImageUrl,
      alt: "Imagem de uma caixa de texto",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleResartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  const [feedbackSent, setFeedbackSent] = useState(false);

  return (
    <div className="bg-zinc-900 p-4 relative rounded rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackResartRequest={handleResartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackResartRequest={handleResartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
