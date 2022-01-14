module.exports = ({
    name: "suggest",
    code: `
    $channelSendMessage[$channelID;⭐ | Your suggestion has been sent, <@$authorID>!
        Sua sugestão foi enviada, <@$authorID>!]
        $author[1;New suggest!;https://cdn.discordapp.com/emojis/901609226428903464.webp?size=96&quality=lossless]
        $description[1;**Suggestion:**
        \`\`\`$message[1]\`\`\`
    
    **Author:**
    <@$authorID>]
    $color[1;YELLOW]
    $addReactions[👍;👎]
        $useChannel[929091368855408690]
        $argsCheck[1;<@$authorID> {newEmbed:{author:Suggestion:https://cdn.discordapp.com/emojis/919662224992247828.webp?size=96&quality=lossless}{description::flag_br: Digite sua sugestão!
        :flag_us: Enter your suggestion!}{color:#36393F}}]
        $suppressErrors[<@$authorID> {newEmbed:{author:Error:https://cdn.discordapp.com/emojis/927949402579030116.webp?size=96&quality=lossless}{description::flag_br: Tente novamente!
        :flag_us: Try again!}{color:RED}}]
    `
})
