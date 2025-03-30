import { validator } from "./validators/validator.js";
import { msgErrorFindUser } from "./utils/messages.js";
import { findID } from "../handlers/findID.js";
import { forwardMovie } from "./middlewares/forwardMovie.js";
import { registrationProcess } from "./registrationProcess/registrationProcess.js";
const userIDsPath = "./src/data/userIDs.json";

export function movieForwarder(bot) {
  bot.onText(/^\/start/, async msg => {
    // Validation Processes
    const passValidation = await validator(bot, msg);
    if (!passValidation) return;

    const isUserRegister = await findID(
      msg.from.id,
      userIDsPath,
      msgErrorFindUser
    );
    if (isUserRegister) {
      forwardMovie(bot, msg);
      return;
    }

    registrationProcess(bot, msg);
  });
}
