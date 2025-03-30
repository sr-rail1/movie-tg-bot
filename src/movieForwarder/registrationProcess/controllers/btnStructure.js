import { msgInstructions } from "../utils/messages.js";
const refLink = process.env.REF_LINK;

export async function btnStructure(bot, msg) {
  const btn = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀Activar Acceso",
            url: refLink
          },
          { text: "🛸Obtener Película", callback_data: "btn2" }
        ]
      ]
    }
  };
  try {
    await bot.sendMessage(msg.chat.id, msgInstructions, btn);
  } catch (e) {
    console.error("Error al crear la btnStructure: " + e);
  }
}
