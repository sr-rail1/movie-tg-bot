import {msgIsNotVideo} from "../messages.js";

export function isVideo(bot, msg) {
  if (msg.video) {
    return true;
  } else {
    bot.sendMessage(msg.chat.id, msgIsNotVideo);
    return false;
  }
}
