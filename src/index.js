import dotenv from "dotenv";
import messagesWithRules from "./messagesWithRules";
import telegramMessageHandler from "./services/telegramMessageHandler";
import TelegramBot from "node-telegram-bot-api";
import stickersWithRules from "./stickersWithRules";
import _ from "lodash";

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const messageHandler = telegramMessageHandler(bot);

_.mapValues(stickersWithRules, sWr =>
    messageHandler.sendStickerUsingRegexRule(sWr.rule, sWr.stickerId)
);

_.mapValues(messagesWithRules, mWr =>
    messageHandler.sendMessageUsingRegexRule(mWr.rule, mWr.message)
);