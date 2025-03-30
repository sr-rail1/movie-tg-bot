import { getRecivedMovieID } from "./getRecivedMovieID.js";
import { findID } from "../../handlers/findID.js";
import { msgErrorFindMovie, msgWrongMovieID } from "../utils/messages.js";
const movieIDsPath = "./src/data/movieIDs.json";

export async function validator(bot, msg) {
  if (msg.chat.type !== "private") return;
  const recivedMovieID = getRecivedMovieID(bot, msg); // return number | false
  if (recivedMovieID === false) return false;
  const finded = await findID(recivedMovieID, movieIDsPath, msgErrorFindMovie);
  if (!finded) {
    bot.sendMessage(msg.chat.id, msgWrongMovieID);
    return false;
  }
  return true;
}
