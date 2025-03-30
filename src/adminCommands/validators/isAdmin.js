import { adminID } from "../../utils/constants.js";
import { accessDenied } from "../utils/messages.js";

export function isAdmin(bot, msg) {
  const userID = msg.from.id;
  if (userID === adminID) return true;
  else {
    bot
        .sendMessage(msg.chat.id, accessDenied)
        .catch(e =>
          console.error(
            "Error al intentar enviar el mensaje de acceso denegado: " + e
          )
          );
    return false;
  };
}
