// Function to ban someone from the server

module.exports = [{
    name: "ban",
    code: `
        $username[$message] He was banned for his bad behavior (っ °Д °;)っ.
        $ban[$message]
        $argsCheck[1;Enter the user ID, and the reason.]
        $onlyPerms[ban;Only administrators have access to this command!]
    `
}]