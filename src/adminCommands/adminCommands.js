import { deleteAdminID } from "./deleteAdminID/deleteAdminID.js";
import { deleteUserIDs } from "./deleteUserIDs/deleteUserIDs.js";
import { sendSavedIDs } from "./sendSavedIDs/sendSavedIDs.js";

export function adminCommands(bot) {
  // Commands
  deleteAdminID(bot);
  deleteUserIDs(bot);
  sendSavedIDs(bot);
}
