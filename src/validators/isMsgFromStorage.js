import { movieStorageID } from "../utils/constants.js";

export function isMsgFromStorage(msg) {
  if (msg.chat.id === movieStorageID) {
    return true;
  } else {
    return false;
  }
}
