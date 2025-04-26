export const getText = (text, language) => {
  if (
    translations.hasOwnProperty(text) &&
    translations[text].hasOwnProperty(language)
  ) {
    return translations[text][language];
  }
  return language === "English" ? text : "";
};

const translations = {
  Schedule: {
    English: "Schedule",
    Chinese: "流程安排",
  },
  "Dinner Menu": {
    English: "Dinner Menu",
    Chinese: "晚宴菜單",
  },
  Dinner: {
    English: "Dinner",
    Chinese: "晚宴菜單",
  },
  FAQ: {
    English: "FAQ",
    Chinese: "賓客須知",
  },
  "Yi-Nung": {
    English: "Yi-Nung",
    Chinese: "以儂",
  },
  Raymond: {
    English: "Raymond",
    Chinese: "善牛",
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
    Chinese: "出席回覆",
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
    Chinese: "您會參加婚禮儀式嗎？",
  },
  "Choose your main course": {
    English: "Choose your main course",
    Chinese: "選擇您的主菜",
  },
  "Select option": {
    English: "Select option",
    Chinese: "請選擇",
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
    Chinese: "您會參加晚宴嗎？",
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
    Chinese: "10 盎司菲力牛排",
  },
  "Chilean Sea Bass": {
    English: "Chilean Sea Bass",
    Chinese: "智利鱸魚",
  },
  "Jidori Roasted Chicken": {
    English: "Jidori Roasted Chicken",
    Chinese: "炭烤走地雞",
  },
  "Additional private message to the hosts (optional)": {
    English: "Additional private message to the hosts (optional)",
    Chinese: "有任何想對我們說的話嗎？（選填）",
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
    Chinese: "名字為必填欄位",
  },
  "Last name is missing": {
    English: "Last name is missing",
    Chinese: "姓氏為必填欄位",
  },
  "Ceremony and dinner attendance are missing": {
    English: "Ceremony and dinner attendance are missing",
    Chinese: "請選擇是否出席儀式和晚宴",
  },
  "Ceremony attendance is missing": {
    English: "Ceremony attendance is missing",
    Chinese: "請選擇是否出席儀式",
  },
  "Dinner attendance is missing": {
    English: "Dinner attendance is missing",
    Chinese: "請選擇是否出席晚宴",
  },
  "Main course selection is missing": {
    English: "Main course selection is missing",
    Chinese: "請選擇您的主菜",
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
    Chinese: "我們儀式和晚宴見！",
  },
  "Thank you!": {
    English: "Thank you!",
    Chinese: "謝謝您！",
  },
  "We'll see you at the ceremony!": {
    English: "We'll see you at the ceremony!",
    Chinese: "我們儀式見！",
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
    Chinese: "我們改天再見！",
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
    Chinese: "請填寫姓名",
  },
  "No RSVP status found for": {
    English: "No RSVP status found for",
    Chinese: "未找到回覆狀態",
  },
  "!": {
    English: "!",
    Chinese: "！",
  },
  "Please note RSVP status submissions may take a few hours to be reflected.": {
    English:
      "Please note RSVP status submissions may take a few hours to be reflected.",
    Chinese: "請注意，提交後回覆狀態可能需要數小時才會顯示。",
  },
  "Attending Ceremony": {
    English: "Attending Ceremony",
    Chinese: "參加儀式",
  },
  "Attending Dinner": {
    English: "Attending Dinner",
    Chinese: "參加晚宴",
  },
  "Main Course Selection": {
    English: "Main Course Selection",
    Chinese: "主菜選擇",
  },
  "Arrive at Pines Park": {
    English: "Arrive at Pines Park",
    Chinese: "抵達 Pines Park",
  },
  Address: {
    English: "Address",
    Chinese: "地址",
  },
  "Wedding Ceremony": {
    English: "Wedding Ceremony",
    Chinese: "婚禮儀式",
  },
  "Photos with Guests": {
    English: "Photos with Guests",
    Chinese: "與賓客合影",
  },
  "Arrive at Whitestone Restaurant & Bar": {
    English: "Arrive at Whitestone Restaurant & Bar",
    Chinese: "抵達 Whitestone Restaurant & Bar 餐廳",
  },
  "Dinner and Drinks": {
    English: "Dinner and Drinks",
    Chinese: "晚宴與飲品",
  },
  "Cake Cutting": {
    English: "Cake Cutting",
    Chinese: "切蛋糕儀式",
  },
  "Go Home": {
    English: "Go Home",
    Chinese: "返家",
  },
  "Source Code": {
    English: "Source Code",
    Chinese: "檢視程式碼",
  },
};
