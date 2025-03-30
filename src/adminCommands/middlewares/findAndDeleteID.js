import { readFile, writeFile } from "fs/promises";

export async function findAndDeleteID(recivedID) {
  const path = "./src/data/userIDs.json";

  try {
    const listIDsJSON = await readFile(path, "utf-8");
    const listIDs = await JSON.parse(listIDsJSON);

    // Delete all userIDs
    if (recivedID === null) {
      const newListIDs = await JSON.stringify([]);
      await writeFile(path, newListIDs);
    }
    // Delete an especific userID
    else {
    const newListIDs = listIDs.filter(id => id !== recivedID);
    const newListIDsJSON = JSON.stringify(newListIDs);
    await writeFile(path, newListIDsJSON);
    }
    
  } catch (e) {
    console.error(
      `Error al intentar buscar y eliminar un id (${recivedID}),
      error: ${e}`
    );
    return false;
  }
  return true;
}
