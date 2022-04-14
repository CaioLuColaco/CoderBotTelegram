const env = require('../.env')
const {Telegraf} = require("telegraf")
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
    <a> href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown* _de várias_ `formas` ```possíveis``` [Google](http://www.google.com')
    await ctx.replyWithPhoto({source: `${__dirname}/Seu_Madruga_-_Seriado.jpg`})
    await ctx.replyWithPhoto("https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/1d3e5f633b128e0a8672_omeiaum_46075222397_1649122687//thumb/thumb0-276x155.jpg",
        {caption: "Boa tarde gurizada"})
    await ctx.replyWithLocation(-3.748428, -38.493785)
    // await ctx.replyWithVideo('http://filex.cod3r.com.br/curso-bot/cod3r-end.m4v')
    // await ctx.reply()
})

bot.startPolling()