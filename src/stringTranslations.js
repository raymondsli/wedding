export const getText = (text, language) => {
  return translations[text][language] ?? (language === "English" ? text : "");
};

const translations = {
  "": {
    English: "",
    Chinese: "",
  },
  Schedule: {
    English: "Schedule",
    Chinese: "行程安排",
  },
  "Dinner Menu": {
    English: "Dinner Menu",
    Chinese: "晚宴菜單",
  },
  FAQ: {
    English: "FAQ",
    Chinese: "常見問題",
  },
  "Yi-Nung": {
    English: "Yi-Nung",
    Chinese: "黃以儂",
  },
  Raymond: {
    English: "Raymond",
    Chinese: "李善牛",
  },
  "6th September 2025 at Pines Park": {
    English: "6th September 2025 at Pines Park",
    Chinese: "2025年9月6日 於 Pines Park",
  },
  Days: {
    English: "Days",
    Chinese: "天",
  },
  Hours: {
    English: "Hours",
    Chinese: "小時",
  },
  Minutes: {
    English: "Minutes",
    Chinese: "分鐘",
  },
  Seconds: {
    English: "Seconds",
    Chinese: "秒",
  },
  RSVP: {
    English: "RSVP",
    Chinese: "敬請回覆",
  },
  "Check RSVP Status": {
    English: "Check RSVP Status",
    Chinese: "查看回覆狀態",
  },
  "First Name": {
    English: "First Name",
    Chinese: "名字",
  },
  "Last Name": {
    English: "Last Name",
    Chinese: "姓氏",
  },
  "Will you be attending the ceremony?": {
    English: "Will you be attending the ceremony?",
    Chinese: "您會參加典禮嗎？",
  },
  "Select option": {
    English: "Select option",
    Chinese: "選擇選項",
  },
  Yes: {
    English: "Yes",
    Chinese: "是",
  },
  No: {
    English: "No",
    Chinese: "否",
  },
  "Will you be attending the dinner?": {
    English: "Will you be attending the dinner?",
    Chinese: "選擇選項",
  },
  "Wild Mushroom Ravioli (vegetarian)": {
    English: "Wild Mushroom Ravioli (vegetarian)",
    Chinese: "野生蘑菇義大利餃（素食）",
  },
  "Wild Mushroom Ravioli": {
    English: "Wild Mushroom Ravioli",
    Chinese: "野生蘑菇義大利餃",
  },
  "10oz Filet Mignon": {
    English: "10oz Filet Mignon",
    Chinese: "10盎司菲力牛排",
  },
  "Chilean Sea Bass": {
    English: "Chilean Sea Bass",
    Chinese: "智利鱸魚",
  },
  "Jidori Roasted Chicken": {
    English: "Jidori Roasted Chicken",
    Chinese: "地雞烤雞",
  },
  "Additional private message to the hosts (optional)": {
    English: "Additional private message to the hosts (optional)",
    Chinese: "給主辦人的額外私人留言（可選)",
  },
  "Enter your message": {
    English: "Enter your message",
    Chinese: "輸入您的訊息",
  },
  Close: {
    English: "Close",
    Chinese: "關閉",
  },
  Submit: {
    English: "Submit",
    Chinese: "提交",
  },
  "First name is missing": {
    English: "First name is missing",
    Chinese: "名字缺失",
  },
  "Last name is missing": {
    English: "Last name is missing",
    Chinese: "姓氏缺失",
  },
  "Ceremony and dinner attendance are missing": {
    English: "Ceremony and dinner attendance are missing",
    Chinese: "典禮和晚宴出席狀態缺失",
  },
  "Ceremony attendance is missing": {
    English: "Ceremony attendance is missing",
    Chinese: "典禮出席狀態缺失",
  },
  "Dinner attendance is missing": {
    English: "Dinner attendance is missing",
    Chinese: "晚宴出席狀態缺失",
  },
  "Main course selection is missing": {
    English: "Main course selection is missing",
    Chinese: "主菜選擇缺失",
  },
  "Something went wrong with the submission.": {
    English: "Something went wrong with the submission.",
    Chinese: "提交時發生錯誤。",
  },
  "Please try again later or directly message either Yi-Nung or Raymond.": {
    English:
      "Please try again later or directly message either Yi-Nung or Raymond.",
    Chinese: "請稍後再試，或直接聯繫以儂或瑞瑞。",
  },
  "RSVP received!": {
    English: "RSVP received!",
    Chinese: "已收到您的回覆！",
  },
  "We'll see you at the ceremony and dinner!": {
    English: "We'll see you at the ceremony and dinner!",
    Chinese: "我們典禮和晚宴見！",
  },
  "Thank you!": {
    English: "Thank you!",
    Chinese: "謝謝您！",
  },
  "We'll see you at the ceremony!": {
    English: "We'll see you at the ceremony!",
    Chinese: "我們典禮見！",
  },
  "We'll see you at the dinner!": {
    English: "We'll see you at the dinner!",
    Chinese: "我們晚宴見！",
  },
  "No worries!": {
    English: "No worries!",
    Chinese: "沒關係！",
  },
  "Guess we'll have to see you some other time then!": {
    English: "Guess we'll have to see you some other time then!",
    Chinese: "看來我們只能下次再見了！",
  },
  "Check your RSVP status and main course selection.": {
    English: "Check your RSVP status and main course selection.",
    Chinese: "查看您的回覆狀態和主菜選擇。",
  },
  "Note: Status changes may take a few hours to be reflected.": {
    English: "Note: Status changes may take a few hours to be reflected.",
    Chinese: "注意：狀態變更可能需要數小時才會顯示。",
  },
  Name: {
    English: "Name",
    Chinese: "姓名",
  },
  "Name is missing": {
    English: "Name is missing",
    Chinese: "姓名缺失",
  },
  "No RSVP status found for": {
    English: "No RSVP status found for",
    Chinese: "未找到回覆狀態",
  },
  "Please note RSVP status submissions may take a few hours to be reflected.": {
    English:
      "Please note RSVP status submissions may take a few hours to be reflected.",
    Chinese: "請注意，回覆狀態的提交可能需要數小時才會顯示。",
  },
  "Attending Ceremony": {
    English: "Attending Ceremony",
    Chinese: "參加典禮",
  },
  "Attending Dinner": {
    English: "Attending Dinner",
    Chinese: "參加晚宴",
  },
  "Main Course Selection": {
    English: "Main Course Selection",
    Chinese: "主菜選擇",
  },
  "": {
    English: "",
    Chinese: "",
  },
};
