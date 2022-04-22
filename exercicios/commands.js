const env = require("../.env")
const {Telegraf} = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}\nAvise se precisar de /ajuda`)
})

bot.command('ajuda', ctx => ctx.reply(`/ajuda: vou te mostarr as opções\n/ajuda2: Sei de nada\n/op2: Sei de nada não\n/op3: eu que não sei mesmo`))
bot.command('ajuda2', ctx => ctx.reply("Já te disse doidão, sei de nada."))

bot.hears(/\/op(2|3)/i, ctx => ctx.reply("Não sei caraaa"))

bot.startPolling()