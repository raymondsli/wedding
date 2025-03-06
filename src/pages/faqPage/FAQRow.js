import "./FAQRow.css";

function FAQRow(props) {
  const { question, answer } = props;
  return (
    <div className="faq-row-container">
      <div className="faq-row-question">{question}</div>
      <div className="faq-row-answer">{answer}</div>
    </div>
  );
}

export default FAQRow;
