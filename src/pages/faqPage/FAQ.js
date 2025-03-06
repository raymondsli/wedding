import "./FAQ.css";
import FAQRow from "./FAQRow";

const questionAndAnswers = {
  "What is the dress code?": "Suit for men and dress for women.",
  "Will the venue be outdoors or indoors?":
    "The ceremony will be outdoors at a public park. For the dinner, we have booked a private room at a nearby restaurant.",
  "Will there be parking at the ceremony venue?":
    "Yes there is street parking next to the park and at nearby residental street parking.",
  "Will there be parking at the restaurant?":
    "Yes there is parking at the restaurant. In the unlikely event parking runs out, you can park at the nearby residential street parking.",
};

function FAQ() {
  const renderQAndAComponent = () => {
    const rows = [];
    for (const [question, answer] of Object.entries(questionAndAnswers)) {
      rows.push(<FAQRow question={question} answer={answer} />);
    }
    return rows;
  };
  return (
    <div>
      <h1 className="subsection-header">FAQ</h1>
      <div className="faq-container">{renderQAndAComponent()}</div>
    </div>
  );
}

export default FAQ;
