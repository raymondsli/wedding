import "./FAQ.css";

const questionAndAnswers = {
  "When do I need to RSVP by?":
    "Please RSVP by April 15th at the latest. If you are unsure or need more time, please reach out directly to us.",
  "What is the dress code?":
    "The dress code will be formal attire, meaning a suit for men and a dress for women. No sandals, slippers, or jeans. For colors, preferably light blue or yellow (to match the wedding flower colors), but other colors (black, blue, gray, etc) are fine as well.",
  "Can I bring a plus one?":
    "No, unless it is explictly written on your invitation. If you are unsure, feel free to ask us.",
  "Where are my lodging options?":
    "If you are traveling in, there are several hotel options near the venue. Personally, we will be staying at the Laguna Cliffs Marriott Resort & Spa.",
  "Will the venue be outdoors or indoors?":
    "The ceremony will be at Pines Park, which is an outdoor public park. For dinner, we have booked a private indoor room at Whitestone Restaurant, which is about a 10 minute drive away from the park venue.",
  "Will there be parking at the ceremony venue?":
    "Yes, there is limited street parking at the park, and it is located in a residential area with street parking.",
  "Will there be a restroom at the ceremony venue?":
    "Unfortunately, there is no public restroom at Pines Park. We will try to keep the ceremony short, but if you do need to go at any time feel free to just leave the venue.",
  "What time should I arrive at the restaurant?":
    "We have booked the private room at Whitestone from 4:30pm - 10:00pm. We expect the ceremony to end at around 6:00pm, after which you are free to go directly to the restaurant. We will start serving food at 7:15pm so you can arrive anytime before then.",
  "What do I do when I arrive at the restaurant?":
    "When you arrive, either go directly to the private room or ask restaurant staff to take you there. Note that if you are early, the room may be empty when you arrive. We will make seating arrangements for each guest, so once in the room you can look for your name and find your seat. If the seating arrangements have not been set up yet, please wait until we finish setting up.",
  "Will there be parking at the restaurant?":
    "Yes there is parking at the restaurant. If the parking at the restaurant is full, you can park at nearby residential street parking.",
  "Will there be drinks at the restaurant?":
    "Yes. While there is no open bar, we will be serving a few bottles of wine and feel free to order any cocktails on the restaurant's menu.",
  "What if I have dietary restrictions or want a different main course option?":
    'You can take a look at the Whitestone\'s menu <a target="_blank" href="https://whitestonerestaurant.com/dana-point-lantern-district-whitestone-restaurant-and-bar-food-menu">here</a>, and let us know which option you\'d like.',
  "Is there a gift registry?":
    "While we appreciate the thought, we are not accepting gifts and do not have a gift registry.",
};

function FAQ(props) {
  const renderQAndAComponent = () => {
    const rows = [];
    for (const [question, answer] of Object.entries(questionAndAnswers)) {
      rows.push(
        <div className="faq-row-container" key={question}>
          <div className="faq-row-question">{question}</div>
          <div
            className="faq-row-answer"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      );
    }
    return rows;
  };

  return (
    <div ref={props.ref}>
      <h1 className="subsection-header">FAQ</h1>
      <div className="faq-container">{renderQAndAComponent()}</div>
    </div>
  );
}

export default FAQ;
