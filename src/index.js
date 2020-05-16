const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1271816008:AAHYO3dYcXGRDPwlKtJ4XjEEqVKQlKyucJQ';
const safado = "CAACAgEAAxkBAAIBD16_VJIPb9v_waPHfw7IW2fCCI7yAALdAwACS1KPEoLhG4PEFyvLGQQ";
const bobo = "CAACAgEAAxkBAAIBDl6_VFnJNnBTNlDD7W2nNu30eg9zAAIzAAN09jML9gLmBxF7wQUZBA";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/[BbCcDdFfGgHhJjLlMmNnPpQqRrSsTtVvWwXxYyZz]{4,}/g, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    console.log(match);
    
    bot.sendSticker(chatId, bobo);

    // send back the matched "whatever" to the chat
    //bot.sendMessage(chatId, resp);
});

bot.onText(/^.*\b(morena|MORENA)\b.*$/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    bot.sendSticker(chatId, safado);

    // send back the matched "whatever" to the chat
    //bot.sendMessage(chatId, resp);
});

bot.onText(/^.*\b(mamou)\b.*$/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = `mamaste???`; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

bot.onText(/^.*\b(MAMOU)\b.*$/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = `MAMASTE???`; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

bot.on("sticker", msg => {
    console.log(msg);
});