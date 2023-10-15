import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  //NOTE - use the below when you want to infinitely switch between steps
  // function handleNext() {
  //   (step + 1) % 3 === 0 ? setStep(3) : setStep((step + 1) % 3);
  // }
  // function handlePrev() {
  //   step === 1 ? setStep(1) : setStep((step - 1) % 3);
  // }
  function handleToggle() {
    setisOpen((is) => !is);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button className="close" onClick={handleToggle}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            Step {step} : {messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              onClick={handlePrev}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              <span> Prev</span>
            </button>
            <button
              onClick={handleNext}
              style={{ background: "#7950f2", color: "#fff" }}
            >
              <span> Next </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
