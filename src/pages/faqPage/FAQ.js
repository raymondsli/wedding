import "./FAQ.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

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
    "We have booked the private room at Whitestone from 4:30pm - 10:00pm. We expect the ceremony to end at around 6:20pm, after which you are free to go directly to the restaurant. We will start serving food at 7:15pm so you can arrive anytime before then.",
  "What do I do when I arrive at the restaurant?":
    "When you arrive, either go directly to the private room or ask restaurant staff to take you there. Note that if you are early, the room may be empty when you arrive. We will make seating arrangements for each guest, so once in the room you can look for your name and find your seat. If the seating arrangements have not been set up yet, please wait until we finish setting up.",
  "Will there be parking at the restaurant?":
    "Yes there is parking at the restaurant. If the parking at the restaurant is full, you can park at nearby residential street parking.",
  "Will there be drinks at the restaurant?":
    "Yes. While there is no open bar, we will be serving a few bottles of wine and feel free to order any cocktails on the restaurant's menu.",
  "What if I have dietary restrictions or want a different main course option?":
    'You can take a look at the Whitestone\'s <a target="_blank" rel="noreferrer" href="https://whitestonerestaurant.com/dana-point-lantern-district-whitestone-restaurant-and-bar-food-menu">menu</a>, and let us know which option you would like.',
  "Is there a gift registry?":
    "While we appreciate the thought, we are not accepting gifts and do not have a gift registry.",
};

const questionAndAnswersChinese = {
  "我需要在什麼時候回覆 RSVP?":
    "請最晚在 4 月 15 日前回覆 RSVP。如果您不確定或需要更多時間, 請直接與我們聯繫。",
  "服裝要求是什麼？":
    "服裝要求為正式服裝，男性請穿西裝，女性請穿洋裝。不允許穿涼鞋、拖鞋或牛仔褲。顏色方面，建議淺藍色或黃色（與婚禮花卉顏色相配），但其他顏色（黑色、藍色、灰色等）也可以。",
  "我可以帶一位同行賓客嗎？":
    "不可以，除非您的邀請函上有明確標註。如果您不確定，請隨時詢問我們。",
  "有哪些住宿選擇？":
    "如果您需要住宿，場地附近有幾家飯店可供選擇。我們本人將入住 Laguna Cliffs Marriott Resort & Spa。",
  "場地是室內還是室外？":
    "婚禮典禮將在松樹公園 (Pines Park) 舉行，這是一個戶外的公共公園。晚宴則是在 Whitestone 餐廳的私人室內包廂，該餐廳距離公園約 10 分鐘車程。",
  "婚禮場地有停車位嗎？":
    "有的，公園附近有有限的街邊停車位，且該地區為住宅區，可在街邊停車。",
  "婚禮場地有洗手間嗎？":
    "很抱歉，松樹公園沒有公共洗手間。我們會儘量讓典禮簡短，但如果您需要使用洗手間，請隨時自行離開場地。",
  "我應該幾點抵達餐廳？":
    "我們已預訂 Whitestone 餐廳的私人包廂，時間為下午 4:30 - 晚上 10:00。我們預計婚禮典禮將在 6:20 PM 左右結束，之後您可以直接前往餐廳。我們將在 7:15 PM 開始供餐，因此請確保在此之前抵達。",
  "抵達餐廳後，我該怎麼做？":
    "抵達後，您可以直接前往私人包廂，或請餐廳工作人員帶您前往。如果您較早抵達，包廂可能還是空的。我們會為每位賓客安排座位，因此進入包廂後，請尋找您的名字並找到您的座位。如果座位安排尚未完成，請稍等我們完成布置。",
  "餐廳有停車位嗎？":
    "有的，餐廳提供停車位。如果餐廳停車位已滿，您可以停在附近的住宅區街邊停車位。",
  "餐廳會提供飲品嗎？":
    "會的。雖然沒有開放式酒吧，但我們會準備一些紅酒，您也可以自行點選餐廳菜單上的雞尾酒。",
  "如果我有飲食限制或想選擇不同的主菜，該怎麼辦？":
    '您可以查看 Whitestone 的<a target="_blank" rel="noreferrer" href="https://whitestonerestaurant.com/dana-point-lantern-district-whitestone-restaurant-and-bar-food-menu">菜單</a>，並告訴我們您想要的選項。',
  "有禮物登記冊嗎？":
    "我們非常感謝您的心意，但我們不接受禮物，也沒有設置禮物登記冊。",
};

function FAQ(props) {
  const { language } = useContext(AppContext);
  const isMobile = window.innerWidth < 500;

  const renderQAndAComponent = () => {
    const rows = [];
    const qAndA =
      language === "Chinese" ? questionAndAnswersChinese : questionAndAnswers;
    for (const [question, answer] of Object.entries(qAndA)) {
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
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {getText("FAQ", language)}
      </h1>
      <div className="faq-container">{renderQAndAComponent()}</div>
    </div>
  );
}

export default FAQ;
