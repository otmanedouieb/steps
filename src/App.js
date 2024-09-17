const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;

  function handelPrevious() {
    alert("Previous button clicked!");
  }

  function handelNext() {
    alert("Next button clicked!");
  }

  return (
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
  );
}
