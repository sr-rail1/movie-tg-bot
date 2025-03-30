export async function deletePreviousMsg(bot, msg, btn) {
  const chatID = msg.chat.id;
  const btnID = btn.message.message_id;
  try {
    await bot.deleteMessage(chatID, btnID + 1);
    await bot.deleteMessage(chatID, btnID);
  } catch (e) {
    console.error("Error al intentar eliminar los sms en btnHandler: " + e);
  }
}
