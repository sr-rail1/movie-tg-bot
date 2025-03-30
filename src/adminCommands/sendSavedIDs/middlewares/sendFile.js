export async function sendFile(bot, msg, filePath) {
  try {
    bot.sendDocument(msg.chat.id, filePath);
  } catch (error) {
    console.error(`Error al intentar enviar el archivo de la siguiente ruta ${filePath}
    error: ${error}`);
  }
}
