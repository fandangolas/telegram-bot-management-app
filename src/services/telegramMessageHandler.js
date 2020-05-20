const telegramMessageHandler = (bot) => {

  const sendStickerUsingRegexRule = (rule, sticker) => {
    bot.onText(rule, msg => {
      const chatId = msg.chat.id;

      bot.sendSticker(chatId, sticker);
    });
  };

  const sendMessageUsingRegexRule = (rule, message) => {
    bot.onText(rule, msg => {
      const chatId = msg.chat.id;

      bot.sendMessage(chatId, message);
    });
  };

  return {
    sendStickerUsingRegexRule,
    sendMessageUsingRegexRule
  };
};

export default telegramMessageHandler;