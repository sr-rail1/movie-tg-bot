import TelegramBot from "node-telegram-bot-api";

const botToken = process.env.BOT_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });

import { idAsigner } from "./idAsigner/main.js";
import { movieForwarder } from "./movieForwarder/main.js";
import { adminCommands } from "./adminCommands/adminCommands.js";
idAsigner(bot);
movieForwarder(bot);
adminCommands(bot);

console.log("working...");
