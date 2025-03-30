import { isMsgFromStorage } from "../validators/isMsgFromStorage.js";
import { isVideo } from "./validators/isVideo.js";
import { saveID } from "../handlers/saveID.js";
import { msgErrorSaveID } from "./messages.js";
import { sendID } from "./middlewares/sendID.js";
const movieIDsPath = "./src/data/movieIDs.json";

export function idAsigner(bot) {
  bot.on("message", async msg => {
    if (isMsgFromStorage(msg) && isVideo(bot, msg)) {
      const isSaved = await saveID(
        msg.message_id,
        movieIDsPath,
        msgErrorSaveID
      );
      if (isSaved) {
        sendID(bot, msg);
      }
    }
  });
}
