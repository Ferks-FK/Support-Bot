module.exports = [{
    name: "themes",
    code: `
    $author[1;Select;https://cdn.discordapp.com/emojis/927032168931287060.webp?size=96&quality=lossless]
    $description[1;:flag_us: $username, select language 
    for better experience.

    :flag_br: $username, selecione a linguagem 
    para uma melhor experiência.]
    $addButton[1;🇧🇷;primary;brthemes_$authorID]
    $addButton[1;🇺🇸;primary;usthemes_$authorID]
    $color[1;#36393F]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[;{newEmbed:{author:Processo de Instalação:https://cdn.discordapp.com/emojis/927972508081209386.webp?size=96&quality=lossless}{color:#36393F}{description:**1º Passo**
        Execute este comando em seu terminal/ssh.
    \`\`\`bash <(curl -s https://raw.githubusercontent.com/Ferks-FK/Pterodactyl-AutoThemes/main/install.sh)\`\`\`

[Caso o primeiro não funcione, execute:]
\`\`\`wget https://raw.githubusercontent.com/Ferks-FK/Pterodactyl-AutoThemes/main/install.sh && bash install.sh\`\`\`

Clique no ➡️ para o próximo passo!}};{actionRow:{button:➡️:primary:nextbr_$authorID}}]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
    "content": "❌ | Você não pode utilizar esta interação.",
    "ephemeral": "true",
    "options": {"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==brthemes;]
        `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[;{newEmbed:{author:Processo de Instalação:https://cdn.discordapp.com/emojis/927972508081209386.webp?size=96&quality=lossless}{color:#36393F}{description:**2º Passo**
       Agora basta selecionar o tema que você deseja!
    
    > Funcionou?}{image:https://cdn.discordapp.com/attachments/931346263213998130/931378393604309022/unknown.png}};{actionRow:{button:✅:primary:yes_$authorID}{button:❌:primary:no_$authorID}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content": "❌ | Você não pode utilizar esta interação.",
        "ephemeral": "true",
        "options": {"interaction":true}
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==nextbr;]    
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[;{newEmbed:{author:Installation Process:https://cdn.discordapp.com/emojis/927972508081209386.webp?size=96&quality=lossless}{color:#36393F}{description:Run this command in your terminal/ssh.
            \`\`\`bash <(curl -s https://raw.githubusercontent.com/Ferks-FK/Pterodactyl-AutoThemes/main/install.sh)\`\`\`
        
        [If the first one doesn't work, run:]
        \`\`\`wget https://raw.githubusercontent.com/Ferks-FK/Pterodactyl-AutoThemes/main/install.sh && bash install.sh\`\`\`
        
        Click the ➡️ for the next step!}};{actionRow:{button:➡️:primary:nextus_$authorID}}]
        $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
            "content": "❌ | Você não pode utilizar esta interação.",
            "ephemeral": "true",
            "options": {"interaction":true}
        }]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==usthemes;]    
        `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[;{newEmbed:{author:Installation Process:https://cdn.discordapp.com/emojis/927972508081209386.webp?size=96&quality=lossless}{color:#36393F}{description:**2º Step**
        Now just select the theme you want!
    
    > Work?}{image:https://cdn.discordapp.com/attachments/931346263213998130/931378393604309022/unknown.png}};{actionRow:{button:✅:primary:yes_$authorID}{button:❌:primary:no_$authorID}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content": "❌ | Você não pode utilizar esta interação.",
        "ephemeral": "true",
        "options": {"interaction":true}
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==nextus;]        
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[<@$authorID>;{newEmbed:{author:AutoTheme:https://cdn.discordapp.com/emojis/928693461568323584.gif?size=96&quality=lossless}{description::flag_br: Fico muito feliz por ter conseguido te ajudar!
        > Obrigado por utilizar nosso código, o <@333295169812037632> agradece!
    
    :flag_us: I'm so glad I was able to help you!
    > Thank you for using our code, <@333295169812037632> thanks you!}{color:#36393F}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content": "❌ | Você não pode utilizar esta interação.",
        "ephemeral": "true",
        "options": {"interaction":true}
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==yes;]
        `
    },{
        type: "interaction",
        prototype: "button",
        code: `
        $interactionUpdate[<@$authorID>;{newEmbed:{author:AutoTheme:https://cdn.discordapp.com/emojis/928693846081146960.webp?size=96&quality=lossless}{description::flag_br: Uma pena que não consegui te ajudar!
        > Solicite suporte no canal: <#876956205556330547>
    
    :flag_us: Too bad I couldn't help you!
    > Request support on the channel: <#876936954023915521>}{color:#36393F}}]
    $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
        "content": "❌ | Você não pode utilizar esta interação.",
        "ephemeral": "true",
        "options": {"interaction":true}
    }]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==no;]
        `
}]
