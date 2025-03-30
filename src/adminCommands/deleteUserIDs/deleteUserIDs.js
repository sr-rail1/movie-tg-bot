import { isAdmin } from "../validators/isAdmin.js";
import { findAndDeleteID } from "../middlewares/findAndDeleteID.js";

export function deleteUserIDs(bot) {
  bot.onText(/^\/deleteUserIDs/, async msg => {
    const chatID = msg.chat.id;
    if (msg.chat.type !== "private") return;
    if (!isAdmin(bot, msg)) return;
    const deleted = await findAndDeleteID(null);

    if (deleted) {
      bot
        .sendMessage(chatID, "✅ Se ha vaciado exitosamente la UserIDsList")
        .catch(e => console.error("Error al enviar mensaje: " + e));
    } else {
      bot
        .sendMessage(
          chatID,
          "❌ Ha ocurrido un error al intentar vaciar la UserIDsList"
        )
        .catch(e => console.error("Error al enviar mensaje: " + e));
    }
  });
}
