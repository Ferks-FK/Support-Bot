const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
prefix: "b!",
token: "OTMxMzQzNjg5MTYxMjU3MDIw.YeDDZw.H1w_Mx_dWIYXApNnDz6nrjwbKFc", //Discord Bot Token
intents: "all", 
});

//Events
bot.onMessage();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,'./commands/')

bot.onInteractionCreate()

bot.command({
    name: "<@931343689161257020>",
    aliases: ['<@!931343689161257020>'],
    nonPrefixed: true,
    code: `
    $author[1;Mention;https://cdn.discordapp.com/emojis/923693718651940937.webp?size=96&quality=lossless]
    $description[1;:flag_us: Hi, $username!
    Welcome to the server, here you can customize your pterodactyl for free!

:flag_br: Olá, $username!
Seja bem vindo(a) ao servidor, aqui você pode personalizar em seu pterodactyl gratuitamente!]
$addField[1;Developer;<@333295169812037632>;yes]
$addField[1;Prefixo;b!;yes]
    $color[1;#36393F]
    $addButton[1;😻 GitHub;5;https://github.com/Ferks-FK]
    `
})

bot.command({
    name: "hi",
    aliases: ['hello'],
    nonPrefixed: true,
    code: `
    👋 Hello <@$authorID>, welcome to the themes/addons installation script support group!

If you have any problems with the script, don't hesitate to ask 😉
Aah, just a reminder, this group is for script-related support.
If you have any problems with Linux or with your Pterodactyl Panel, try <#876937145380638840>
    `
})

bot.joinCommand({
    channel: "879769534872027156",
    code: `
    ◽ <@$authorID> joined to $guildName, welcome!
    `
})
bot.onJoin()