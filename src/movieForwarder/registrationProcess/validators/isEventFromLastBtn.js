export function isEventFromLastBtn(btn, msg) {
  const activeBtn = btn.data;
  const btnID = btn.message.message_id;
  const lastBtnStructureID = msg.message_id + 1;

  if (activeBtn === "btn2" && lastBtnStructureID === btnID) return true;
  else return false;
}
