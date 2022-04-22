const env = require("../.env")
const {Telegraf, Markup} = require("telegraf")
const bot = new Telegraf(env.token)

const tecladoTime = Markup.keyboard(["Ceará", "Fortaleza", "Ferroviário"]).resize().oneTime()

bot.start(async ctx => {
    await ctx.reply(`Olá ${ctx.update.message.from.first_name}, qual time você torce?`, tecladoTime)
})
bot.hears('Ceará', async ctx => {
    await ctx.reply(`Muito bem ${ctx.update.message.from.first_name}!`)
    await ctx.reply("Qual você prefere?", Markup.keyboard(["Vina", "Clebão"]).resize())
})
bot.hears("Clebão", async ctx => {
    await ctx.reply("AAAH seu Arrom****!")
})
bot.hears("Vina", async ctx => {
    await ctx.reply("É VAPO!")
})
bot.on('text', ctx => ctx.reply('Legal!'))
bot.startPolling()