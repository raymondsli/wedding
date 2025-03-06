import "./FAQ.css";
import FAQRow from "./FAQRow";

const questionAndAnswers = {
  "What is the dress code?":
    "The dress code will be formal attire, meaning a suit for men and a dress for women. Any color is fine.",
  "Will the venue be outdoors or indoors?":
    "The ceremony will be at Pines Park, which is an outdoor public park. For dinner, we have booked a private room at Whitestone Restaurant, which is about a 7 minute drive away from the park venue.",
  "Will there be parking at the ceremony venue?":
    "Yes, there is street parking next to the park and at nearby residental street parking.",
  "Will there be a restroom at the ceremony venue?":
    "Very unfortunately, there is no public restroom at Pines Park. We will try to keep the ceremony short, but if you do need to go at any time feel free to just leave the venue.",
  "What time should I arrive at the restaurant?":
    "We have booked the private room at Whitestone from 4:30pm - 10:00pm. We expect the ceremony to end at around 6:00pm, after which you are free to go directly to the restaurant. We will start serving food at 7:15pm so feel free to arrive anytime between the ceremony end at 7:15. However, do note that if you are early, the room may be empty when you arrive.",
  "Will there be parking at the restaurant?":
    "Yes there is parking at the restaurant. In the unlikely event parking runs out, you can park at nearby residential street parking.",
  "Will there be drinks at the restaurant?":
    "Yes. While there is no open bar, we will be serving a few bottles of wine and feel free to order any cocktails on the restaurant's menu.",
  "Is there a gift registry?": "No gifts and no gift registry.",
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
