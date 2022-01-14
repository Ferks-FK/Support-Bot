module.exports = [{
    name: "help",
    code: `
    <@$authorID>
    $author[1;Help Menu;https://cdn.discordapp.com/emojis/912694358833254422.webp?size=96&quality=lossless]
    $description[1;:flag_br: Olá, seja muito bem vindo(a) ao menu de ajuda!
    > Veja os comandos de acordo com suas categorias.

:flag_us: Hello, welcome to the help menu!
> See commands according to their categories.]
$addSelectMenu[1;help_$authorID;Select/Selecione;1;1;false;◽ Info:Information commands:option1;◽ Back:Home menu:option2]
    $color[1;#36393F]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `
        $interactionUpdate[<@$authorID>;{newEmbed:{title:Category: Info}{color:#36393F}{description:#COLON#flag_br#COLON# Veja a lista de comandos, logo abaixo.
        #COLON#flag_us#COLON# See the list of commands, just below.
    
    ➡️ \`themes\` - Learn how to install theme!
    Aprenda a como instalar tema!

    ➡️ \`addons\` - Learn how to install addons!
    Aprenda a como instalar addons!}};{actionRow:{selectMenu:help_$authorID:Selecione:1:1:no:{selectMenuOptions:◽ Info:option1:Information commands}{selectMenuOptions:◽ Back:option2:Home menu}}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content" : "❌ | Você não pode utilizar esta interação.",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
    $onlyIf[$interactionData[values[0]]==option1;]
        `
},{
    type: "interaction",
    prototype: "selectMenu",
    code: `
    $interactionUpdate[<@$authorID>;{newEmbed:{author:Help Menu:https://cdn.discordapp.com/emojis/912694358833254422.webp?size=96&quality=lossless}{description::flag_br: Olá, seja muito bem vindo(a) ao menu de ajuda!
        > Veja os comandos de acordo com suas categorias.
    
    :flag_us: Hello, welcome to the help menu!
    > See commands according to their categories.}{color:#36393F}};{actionRow:{selectMenu:help_$authorID:Selecione:1:1:no:{selectMenuOptions:◽ Info:option1:Information commands}{selectMenuOptions:◽ Back:option2:Home menu}}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content" : "❌ | Você não pode utilizar esta interação.",
        "ephemeral" : true,
        "options" : {
            "interaction" : true
        }
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==help;]
    $onlyIf[$interactionData[values[0]]==option2;]
    `
}]