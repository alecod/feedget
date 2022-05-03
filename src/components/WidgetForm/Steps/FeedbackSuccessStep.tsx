import { CloseButton } from "../../CloseButton";
import Check from '../../../assets/check.svg';

interface FeedbackSuccessStepProps {
  onFeedbackResartRequest: () => void;
}

export function FeedbackSuccessStep({onFeedbackResartRequest}: FeedbackSuccessStepProps) {
    return (
        <>
        <header>
          
          <CloseButton />
        </header>
        <div className="flex flex-col items-center py-10 w-[304px]">
         
         <img src={Check} alt="" />
         <span className="text-xl mt-2">Agradeçemos o feedback!</span>

         <button type="button" className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors"
         onClick={onFeedbackResartRequest}
         >Quero Enviar outro</button>
        </div>
      </>
    )
}