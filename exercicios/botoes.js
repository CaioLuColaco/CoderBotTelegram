const env = require("../.env")
const {Telegraf, Markup} = require('telegraf')
const bot = new Telegraf(env.token)

let contagem = 0

const botoes = () => Markup.inlineKeyboard([
    [{text: '+1', callback_data: 'add 1'}, {text: '+10', callback_data: 'add 10'}, {text: '+100', callback_data: 'add 100'}],
    [{text: '-1', callback_data: 'sub 1'}, {text: '-10', callback_data: 'sub 10'}, {text: '-100', callback_data: 'sub 100'}],
    [{text: 'Zerar', callback_data: 'reset'}, {text: 'Resultado', callback_data: 'result'}]
], { columns: 3 })

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}`)
    await ctx.reply(`A contagem está em ${contagem}`, botoes())
})

bot.action(/add (\d+)/, ctx => {
    contagem += parseInt(ctx.match[1])
    ctx.reply(`A contagem atual está em ${contagem}`, botoes())
})
bot.action(/sub (\d+)/, ctx => {
    contagem -= parseInt(ctx.match[1])
    ctx.reply(`A contagem atual está em ${contagem}`, botoes())
})
bot.action('reset', ctx => {
    contagem = 0
    ctx.reply(`A contagem atual está em ${contagem}`, botoes())
})
bot.action('result', ctx => {
    ctx.answerCbQuery(`A contagem atual está em ${contagem}`, botoes())
})


bot.startPolling()