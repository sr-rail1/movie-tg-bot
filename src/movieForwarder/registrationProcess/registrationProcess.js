import { btnStructure } from "./controllers/btnStructure.js";
import { isEventFromLastBtn } from "./validators/isEventFromLastBtn.js";
import { findID } from "../../handlers/findID.js";
import { saveID } from "../../handlers/saveID.js";
import { msgErrorFindUser } from "../utils/messages.js";
import { deletePreviousMsg } from "./middlewares/deletePreviousMsg.js";
import { forwardMovie } from "../middlewares/forwardMovie.js";
import { msgSoonAccess, msgErrorSaveUser } from "./utils/messages.js";
const userIDsPath = "./src/data/userIDs.json";

export async function registrationProcess(bot, msg) {
  await btnStructure(bot, msg);

  bot.on("callback_query", async btn => {
    if (isEventFromLastBtn(btn, msg)) {
      const isRegister = await findID(
        msg.from.id,
        userIDsPath,
        msgErrorFindUser
      );

      if (isRegister) {
        await deletePreviousMsg(bot, msg, btn);
        if (forwardMovie(bot, msg)) console.log(`Nuevo usuario: ${new Date()}`);
      } else {
        bot
          .sendMessage(msg.chat.id, msgSoonAccess)
          .catch(e => console.error("Error al enviar msgSoonAccess: " + e))
          .then(
            async () => await saveID(msg.from.id, userIDsPath, msgErrorSaveUser)
          );
      }
    }
    bot
      .answerCallbackQuery(btn.id)
      .then(() => {})
      .catch(e => console.error("answerCallbackQuery error: " + e));
  });
}
