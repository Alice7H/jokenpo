import { useEffect, useState } from "react";
import './CountDownTimer.css'

export function CountDownTimer({calculateResults}: {calculateResults: () => void}) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (timeLeft === 0){
      calculateResults();
      setTimeLeft(null)
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [calculateResults, timeLeft]);

  return (
    <>
      <p className="counter">{timeLeft}</p>
      <button type="button" onClick={()=> setTimeLeft(3)} className="button-counter">
        Iniciar contagem regressiva
      </button>
    </>
  )
}