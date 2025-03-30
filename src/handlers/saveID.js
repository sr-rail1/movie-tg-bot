import { readFile, writeFile } from "fs/promises";

export async function saveID(newData, path, msgError) {
  try {
    const savedDataJSON = await readFile(path, "utf8");
    const savedData = await JSON.parse(savedDataJSON);
    savedData.push(newData);
    const data = await JSON.stringify(savedData);
    await writeFile(path, data);
  } catch (e) {
    console.error(`${msgError}: ${e}`);
    return false;
  }
  return true;
}
