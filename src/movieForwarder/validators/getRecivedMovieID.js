import {startMessage} from "../utils/messages.js";

export function getRecivedMovieID(bot, msg) {
  const commandWithID = msg.text;
  const commandWithIDArr = commandWithID.split("");
  const initialPosition = commandWithIDArr.lastIndexOf(" ") + 1;
  if (initialPosition !== 0) {
    const movieIDArr = commandWithIDArr.slice(initialPosition);
    const movieIDString = movieIDArr.join("");
    const movieID = Number(movieIDString);
    return movieID;
  } else {
    bot.sendMessage(msg.chat.id, startMessage);
    return false;
  }
}
