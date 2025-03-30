import { isAdmin } from "../validators/isAdmin.js";
import { findAndDeleteID } from "../middlewares/findAndDeleteID.js";
import { adminID } from "../../utils/constants.js";

export function deleteAdminID(bot) {
  bot.onText(/^\/deleteAdminID/, async msg => {
    const chatID = msg.chat.id;
    if (msg.chat.type !== "private") return;
    if (!isAdmin(bot, msg)) return;
    const deleted = await findAndDeleteID(adminID);

    if (deleted) {
      bot
        .sendMessage(chatID, "✅ Tu id ha sido eliminado exitosamente")
        .catch(e => console.error("Error al enviar mensaje: " + e));
    } else {
      bot
        .sendMessage(
          chatID,
          "❌ Ha ocurrido un error al intentar eliminar tu id"
        )
        .catch(e => console.error("Error al enviar mensaje: " + e));
    }
  });
}
