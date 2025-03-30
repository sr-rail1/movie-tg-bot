import { movieStorageID } from "../../utils/constants.js";
import { getRecivedMovieID } from "../validators/getRecivedMovieID.js";

export function forwardMovie(bot, msg) {
  const sendPlace = msg.chat.id;
  const movieID = getRecivedMovieID(bot, msg);
  bot.copyMessage(sendPlace, movieStorageID, movieID).catch(e => {
    console.error("Error al reenviar película: " + e);
    return false;
  });
  return true;
}
