const TelegramBot = require('node-telegram-bot-api');
var _ = require('lodash');
require('dotenv/config');

import telegramMessageHandler from "./services/telegramMessageHandler";
import stickersWithRules from "./stickersWithRules";
import messagesWithRules from "./messagesWithRules";

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });
const messageHandler = telegramMessageHandler(bot);

_.mapValues(stickersWithRules, sWr =>
    messageHandler.sendStickerUsingRegexRule(sWr.rule, sWr.stickerId)
);

_.mapValues(messagesWithRules, mWr =>
    messageHandler.sendMessageUsingRegexRule(mWr.rule, mWr.message)
);