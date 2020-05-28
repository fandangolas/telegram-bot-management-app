# App description

A basic Node.Js application to manage a telegram bot.

# Functionalities
At this moment, it's possible to listen a chat in Telegram and identify words or expressions using Regex, and then, send a specific sticker or message.

# Features to be add
First, I pretend to store the relations Regex-rule/Sticker and Regex-rule/Message in a database.
Then, use telegram bot commands like /add-sticker-match and others to update or remove these relations.
The central idea is to manage these relations using Telegram as if it had a CRUD API behind to manage.


Using [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api)
