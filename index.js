require("dotenv").config();

const { Telegraf } = require("telegraf");

const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

const bot = new Telegraf(TOKEN);

bot.command("start", (ctx) => {
  console.log(ctx);
});

bot.command("help", (ctx) => {
  console.log(ctx);
});

bot.on("text", (ctx) => {
  console.log(ctx);
  ctx.reply(ctx.message.text);
});

bot.launch();

// const init = async () => {
//   const res = await axios.post(`${TELEGRAM_API}/setWebhook`, {
//     url: WEBHOOK_URL,
//   });
//   // console.log(res);
// };
