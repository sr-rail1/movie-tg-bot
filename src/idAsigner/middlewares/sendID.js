import { msgErrorSaveID } from "../messages.js";

export function sendID(bot, msg) {
  const chatID = msg.chat.id;
  const message = `http://t.me/birdsender_bot?start=${msg.message_id}`;
  bot
    .sendMessage(chatID, `\`\`\`\n${message}\n\`\`\``, {
      parse_mode: "MarkdownV2"
    })
    .catch(e => bot.sendMessage(chatID, msgErrorSaveID));
}
