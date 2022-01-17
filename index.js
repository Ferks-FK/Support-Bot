const aoijs = require("aoi.js");

const bot = new aoijs.Bot({
prefix: "b!",
token: "", //Discord Bot Token
intents: "all", 
});

//Events
bot.onMessage();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,'./commands/')

bot.onInteractionCreate()

// For when someone mentions bot
bot.command({
    name: "<@931343689161257020>",
    aliases: ['<@!931343689161257020>'],
    nonPrefixed: true,
    code: `
    $author[1;Mention;https://cdn.discordapp.com/emojis/923693718651940937.webp?size=96&quality=lossless]
    $description[
        1;:flag_us: Hi, $username!
        Welcome to the server, here you can customize your pterodactyl for free!

        :flag_br: Olá, $username!
        Seja bem vindo(a) ao servidor, aqui você pode personalizar em seu pterodactyl gratuitamente!]
        $addField[1;Developer;<@333295169812037632>;yes]
        $addField[1;Prefix;b!;yes]
        $color[1;#36393F]
        $addButton[1;😻 GitHub;5;https://github.com/Ferks-FK]
    `
})

// For when someone says "Hi" or "Hello".

bot.command({
    name: "hi",
    aliases: ['hello'],
    nonPrefixed: true,
    code: `
        $addCmdReactions[👋]
        Hello <@$authorID>👋, welcome to the themes/addons installation script support group!

        If you have any problems with the script, don't hesitate to ask 😉
        Aah, just a reminder, this group is for script-related support.
        If you have any problems with Linux or with your Pterodactyl Panel, try <#876937145380638840>
    `
})

// Message for when someone joins the server

bot.joinCommand({
    channel: "879769534872027156",
    code: `
        ◽ Welcome to the server <@$authorID>!
        Please check the channel <#932330911419211928> to prevent problems 🤠
    `
})
bot.onJoin()

bot.command({
 name: "execute",
 code: `
$eval[$message]
$onlyForIds[333295169812037632;903667263247368222;{newEmbed:{author:Acess denied:https://cdn.discordapp.com/emojis/930854281563766924.webp?size=96&quality=lossless}{color:RED}}]
`
})

// Function to kick someone from the server

bot.command({
    name: "kick",
    code: `$kick[$mentioned[1]]`
})

// Function to ban someone from the server

bot.command({
    name: "ban",
    code: `
        $username[$message] He was banned for his bad behavior (っ °Д °;)っ.
        $ban[$message]
        $argsCheck[1;Enter the user ID, and the reason.]
        $onlyPerms[ban;Only administrators have access to this command!]
    `
});
