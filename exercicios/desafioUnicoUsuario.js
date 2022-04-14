const env = require('../.env')
const {Telegraf} = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const idUser = ctx.update.message.from.id
    if(idUser == 1140319068){
        ctx.reply("Ao seu dispor, mestre!")
    }else{
        ctx.reply("Sinto muito, mas eu so falo com o boss")
    }
})

bot.startPolling()