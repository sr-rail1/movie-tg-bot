import { isAdmin } from "../validators/isAdmin.js";
import { sendFile } from "./middlewares/sendFile.js";

export function sendSavedIDs(bot) {
  bot.onText(/^\/sendIDs/, async msg => {
    if (msg.chat.type !== "private") return;
    if (!isAdmin(bot, msg)) return;

    const userIDsPath = "./src/data/userIDs.json";
    const movieIDsPath = "./src/data/movieIDs.json";
    sendFile(bot, msg, movieIDsPath);
    sendFile(bot, msg, userIDsPath);
  });
}
