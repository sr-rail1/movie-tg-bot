import { readFile, writeFile } from "fs/promises";

export async function findID(recivedID, path, msgError) {
  let finded = false;
  try {
    const dataJSON = await readFile(path, "utf-8");
    const data = await JSON.parse(dataJSON);
    finded = data.some(dataID => dataID === recivedID);
  } catch (e) {
    console.error(
      `${msgError},
      ID que se intento buscar ${recivedID},
      error: ${e}` 
      );
  }
  return finded;
}