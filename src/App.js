import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setSate] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handelPrevious() {
    if (step > 1) {
      setSate(step - 1);
    }
  }

  function handelNext() {
    if (step < 3) {
      setSate(step + 1);
    }
  }

  function handlerClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handlerClose} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <p>
              Step {step}: {messages[step - 1]}
            </p>
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#5970F2", color: "#fff" }}
              onClick={handelPrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#5970F2", color: "#fff" }}
              onClick={handelNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
